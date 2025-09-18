// import { LeaveType, LeaveStatus, AttendanceStatus } from "./types";

import { CreateLeaveRequest, LeaveStatus } from "./types";

const API_URL = "http://localhost:5000/api";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

export const leaveService = {
  create: async (data: CreateLeaveRequest) => {
    const response = await fetch(`${API_URL}/leaves`, {
      method: "POST",
      headers: getAuthHeader(),
      body: JSON.stringify(data),
    });
    return response.json();
  },

  getAll: async () => {
    const response = await fetch(`${API_URL}/leaves`, {
      headers: getAuthHeader(),
    });
    return response.json();
  },

  updateStatus: async (id: string, status: LeaveStatus) => {
    const response = await fetch(`${API_URL}/leaves/${id}/status`, {
      method: "PATCH",
      headers: getAuthHeader(),
      body: JSON.stringify({ status }),
    });
    return response.json();
  },
};

export const attendanceService = {
  checkIn: async () => {
    const response = await fetch(`${API_URL}/attendance/check-in`, {
      method: "POST",
      headers: getAuthHeader(),
    });
    return response.json();
  },

  checkOut: async () => {
    const response = await fetch(`${API_URL}/attendance/check-out`, {
      method: "POST",
      headers: getAuthHeader(),
    });
    return response.json();
  },

  getAll: async (startDate?: string, endDate?: string) => {
    const query =
      startDate && endDate ? `?startDate=${startDate}&endDate=${endDate}` : "";
    const response = await fetch(`${API_URL}/attendance${query}`, {
      headers: getAuthHeader(),
    });
    return response.json();
  },
};

export const dashboardService = {
  getStats: async () => {
    const response = await fetch(`${API_URL}/dashboard/stats`, {
      headers: getAuthHeader(),
    });
    return response.json();
  },
};
