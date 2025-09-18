const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getStats = async (req, res) => {
    try {
        const userId = req.user.id;
        const today = new Date();
        const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

        // Get total leaves
        const totalLeaves = await prisma.leave.count({
            where: { userId }
        });

        // Get pending leaves
        const pendingLeaves = await prisma.leave.count({
            where: {
                userId,
                status: 'PENDING'
            }
        });

        // Get attendance percentage
        const totalDays = await prisma.attendance.count({
            where: {
                userId,
                date: {
                    gte: firstDayOfMonth
                }
            }
        });

        const presentDays = await prisma.attendance.count({
            where: {
                userId,
                status: 'PRESENT',
                date: {
                    gte: firstDayOfMonth
                }
            }
        });

        const attendancePercentage = totalDays > 0
            ? Math.round((presentDays / totalDays) * 100)
            : 0;

        res.json({
            totalLeaves,
            pendingLeaves,
            attendancePercentage,
            totalWorkingDays: totalDays
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching dashboard stats', error: error.message });
    }
};

module.exports = {
    getStats
};