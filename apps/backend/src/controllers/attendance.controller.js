const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const checkIn = async (req, res) => {
    try {
        const userId = req.user.id;
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Check if attendance record exists for today
        let attendance = await prisma.attendance.findFirst({
            where: {
                userId,
                date: {
                    gte: today,
                    lt: new Date(today.getTime() + 24 * 60 * 60 * 1000)
                }
            }
        });

        if (attendance) {
            return res.status(400).json({ message: 'Already checked in today' });
        }

        attendance = await prisma.attendance.create({
            data: {
                userId,
                checkIn: new Date(),
                status: 'PRESENT'
            }
        });

        res.status(201).json(attendance);
    } catch (error) {
        res.status(500).json({ message: 'Error checking in', error: error.message });
    }
};

const checkOut = async (req, res) => {
    try {
        const userId = req.user.id;
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const attendance = await prisma.attendance.findFirst({
            where: {
                userId,
                date: {
                    gte: today,
                    lt: new Date(today.getTime() + 24 * 60 * 60 * 1000)
                }
            }
        });

        if (!attendance) {
            return res.status(400).json({ message: 'No check-in record found for today' });
        }

        if (attendance.checkOut) {
            return res.status(400).json({ message: 'Already checked out today' });
        }

        const updatedAttendance = await prisma.attendance.update({
            where: { id: attendance.id },
            data: { checkOut: new Date() }
        });

        res.json(updatedAttendance);
    } catch (error) {
        res.status(500).json({ message: 'Error checking out', error: error.message });
    }
};

const getAttendance = async (req, res) => {
    try {
        const userId = req.user.id;
        const isAdmin = req.user.role === 'ADMIN';
        const { startDate, endDate } = req.query;

        const where = {
            ...(isAdmin ? {} : { userId }),
            ...(startDate && endDate ? {
                date: {
                    gte: new Date(startDate),
                    lte: new Date(endDate)
                }
            } : {})
        };

        const attendance = await prisma.attendance.findMany({
            where,
            include: {
                user: {
                    select: {
                        name: true,
                        email: true,
                        department: true
                    }
                }
            },
            orderBy: { date: 'desc' }
        });

        res.json(attendance);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching attendance', error: error.message });
    }
};

module.exports = {
    checkIn,
    checkOut,
    getAttendance
};