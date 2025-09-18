const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createLeave = async (req, res) => {
    try {
        const { startDate, endDate, reason, type } = req.body;
        const userId = req.user.id;

        const leave = await prisma.leave.create({
            data: {
                userId,
                startDate: new Date(startDate),
                endDate: new Date(endDate),
                reason,
                type
            }
        });

        res.status(201).json(leave);
    } catch (error) {
        res.status(500).json({ message: 'Error creating leave request', error: error.message });
    }
};

const getLeaves = async (req, res) => {
    try {
        const userId = req.user.id;
        const isAdmin = req.user.role === 'ADMIN';

        const leaves = await prisma.leave.findMany({
            where: isAdmin ? {} : { userId },
            include: {
                user: {
                    select: {
                        name: true,
                        email: true,
                        department: true
                    }
                }
            }
        });

        res.json(leaves);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching leaves', error: error.message });
    }
};

const updateLeaveStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (req.user.role !== 'ADMIN') {
            return res.status(403).json({ message: 'Only admins can update leave status' });
        }

        const leave = await prisma.leave.update({
            where: { id },
            data: { status }
        });

        res.json(leave);
    } catch (error) {
        res.status(500).json({ message: 'Error updating leave status', error: error.message });
    }
};

module.exports = {
    createLeave,
    getLeaves,
    updateLeaveStatus
};