export enum LeaveType {
  SICK = "SICK",
  CASUAL = "CASUAL",
  VACATION = "VACATION",
}

export enum LeaveStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}

export enum AttendanceStatus {
  PRESENT = "PRESENT",
  ABSENT = "ABSENT",
  HALF_DAY = "HALF_DAY",
}

export interface Leave {
  id: string;
  userId: string;
  startDate: string;
  endDate: string;
  reason: string;
  status: LeaveStatus;
  type: LeaveType;
  createdAt: string;
  updatedAt: string;
  user?: {
    name: string;
    email: string;
    department: string;
  };
}

export interface CreateLeaveRequest {
  startDate: string;
  endDate: string;
  reason: string;
  type: LeaveType;
}

export interface Attendance {
  id: string;
  userId: string;
  date: string;
  checkIn: string | null;
  checkOut: string | null;
  status: AttendanceStatus;
  user?: {
    name: string;
    email: string;
    department: string;
  };
}

export interface DashboardStats {
  totalLeaves: number;
  pendingLeaves: number;
  attendancePercentage: number;
  totalWorkingDays: number;
}
