"use client";

import { useState } from "react";

const StaffPage = () => {
  const [activeTab, setActiveTab] = useState("management");

  const staffManagement = (
    <div>
      {/* Add the first view (Staff Management) table here */}
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Staff Management</h1>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-lg">
          Add Staff
        </button>
      </header>

      <table className="w-full bg-gray-800 text-sm rounded-lg overflow-hidden">
        <thead className="bg-gray-700">
          <tr>
            <th className="p-4">#</th>
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Phone</th>
            <th className="p-4">Age</th>
            <th className="p-4">Salary</th>
            <th className="p-4">Timings</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <tr key={index} className="hover:bg-gray-700">
                <td className="p-4">#{index + 1}</td>
                <td className="p-4">Watson Joyce</td>
                <td className="p-4">watsonjoyce12@gmail.com</td>
                <td className="p-4">+1 (123) 123 4564</td>
                <td className="p-4">45 yr</td>
                <td className="p-4">$2200.00</td>
                <td className="p-4">9am to 6pm</td>
                <td className="p-4 flex items-center gap-2">
                  <button className="text-pink-500 hover:underline">Edit</button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );

  const attendance = (
    <div>
      {/* Add the second view (Attendance) table here */}
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Attendance</h1>
      </header>

      <table className="w-full bg-gray-800 text-sm rounded-lg overflow-hidden">
        <thead className="bg-gray-700">
          <tr>
            <th className="p-4">#</th>
            <th className="p-4">Name</th>
            <th className="p-4">Date</th>
            <th className="p-4">Timings</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <tr key={index} className="hover:bg-gray-700">
                <td className="p-4">#{index + 1}</td>
                <td className="p-4">Watson Joyce</td>
                <td className="p-4">16-Apr-2024</td>
                <td className="p-4">9am to 6pm</td>
                <td className="p-4 flex gap-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-md">
                    Present
                  </span>
                  <span className="bg-yellow-500 text-white px-2 py-1 rounded-md">
                    Half Shift
                  </span>
                  <span className="bg-red-500 text-white px-2 py-1 rounded-md">
                    Absent
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="p-6 text-white bg-gray-900">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Staff (22)</h1>
      </header>
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "management"
              ? "bg-pink-500 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
          onClick={() => setActiveTab("management")}
        >
          Staff Management
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "attendance"
              ? "bg-pink-500 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
          onClick={() => setActiveTab("attendance")}
        >
          Attendance
        </button>
      </div>

      {activeTab === "management" ? staffManagement : attendance}
    </div>
  );
};

export default StaffPage;
