import React from "react";
import Sidebar from "./Sidebar.jsx";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Grid container */}
      <div className="grid grid-cols-12 gap-4 p-4">
        {/* Phần bên trái (left) - chiếm 3 cột */}
        <div className="col-span-3 bg-white rounded-lg shadow p-4">
          <div className="h-full">
            <div className="flex">
              <Sidebar />
              <main className="flex-1 bg-gray-50 p-4">
                {/* nội dung ở đây */}
              </main>
            </div>
          </div>
        </div>

        {/* Phần bên phải - chiếm 9 cột */}
        <div className="col-span-9 space-y-4">
          {/* Header - phần trên cùng bên phải */}
          <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
            {/* Tiêu đề Dashboard */}
            <h1 className="text-2xl font-bold text-pink-600">Dashboard</h1>

            {/* Phần bên phải của header */}
            <div className="flex items-center space-x-4">
              {/* Thanh tìm kiếm */}
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  🔍
                </span>
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-lg bg-gray-100 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                />
              </div>

              {/* Icon thông báo */}
              <button className="text-gray-600 hover:text-black text-xl">
                🔔
              </button>

              {/* Icon trợ giúp */}
              <button className="text-gray-600 hover:text-black text-xl">
                ❓
              </button>

              {/* Avatar người dùng */}
              <img
                src="https://i.pravatar.cc/40"
                alt="User avatar"
                className="w-9 h-9 rounded-full object-cover"
              />
            </div>
          </div>
          {/* Overview - phần giữa bên phải */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center mb-4 space-x-2">
              <span className="text-pink-600 text-xl">🟪</span>
              <h2 className="text-lg font-semibold">Overview</h2>
            </div>

            {/* Các card tổng quan */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Turnover */}
              <div className="bg-pink-50 rounded-lg p-4 relative">
                <div className="text-sm font-semibold text-gray-600 mb-1">
                  Turnover
                </div>
                <div className="text-2xl font-bold text-gray-800">$92,405</div>
                <div className="text-sm text-green-600 mt-1">
                  ▲ 5.39%{" "}
                  <span className="text-gray-500">period of change</span>
                </div>
                <div className="absolute top-4 right-4 border border-pink-300 text-pink-600 rounded-md p-1">
                  🛒
                </div>
              </div>

              {/* Profit */}
              <div className="bg-blue-50 rounded-lg p-4 relative">
                <div className="text-sm font-semibold text-gray-600 mb-1">
                  Profit
                </div>
                <div className="text-2xl font-bold text-gray-800">$32,218</div>
                <div className="text-sm text-green-600 mt-1">
                  ▲ 5.39%{" "}
                  <span className="text-gray-500">period of change</span>
                </div>
                <div className="absolute top-4 right-4 border border-blue-300 text-blue-600 rounded-md p-1">
                  💲
                </div>
              </div>

              {/* New Customer */}
              <div className="bg-blue-50 rounded-lg p-4 relative">
                <div className="text-sm font-semibold text-gray-600 mb-1">
                  New customer
                </div>
                <div className="text-2xl font-bold text-gray-800">298</div>
                <div className="text-sm text-green-600 mt-1">
                  ▲ 6.84%{" "}
                  <span className="text-gray-500">period of change</span>
                </div>
                <div className="absolute top-4 right-4 border border-blue-300 text-blue-600 rounded-md p-1">
                  👤
                </div>
              </div>
            </div>
          </div>

          {/* Table - phần dưới cùng bên phải */}
          {/* Table - phần dưới cùng bên phải */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-pink-600 text-xl">🗂️</span>
                <h2 className="text-lg font-semibold">Detailed report</h2>
              </div>
              <div className="space-x-2">
                <button className="border border-pink-500 text-pink-500 px-4 py-1 rounded-md hover:bg-pink-50 text-sm">
                  ⬇ Import
                </button>
                <button className="border border-pink-500 text-pink-500 px-4 py-1 rounded-md hover:bg-pink-50 text-sm">
                  ⬆ Export
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left text-gray-700">
                <thead className="bg-gray-50 font-semibold">
                  <tr>
                    <th className="px-4 py-3">
                      <input type="checkbox" />
                    </th>
                    <th className="px-4 py-3">Customer Name</th>
                    <th className="px-4 py-3">Company</th>
                    <th className="px-4 py-3">Order Value</th>
                    <th className="px-4 py-3">Order Date</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3 text-right">Edit</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    {
                      name: "Elizabeth Lee",
                      avatar: "https://i.pravatar.cc/40?img=1",
                      company: "AvatarSystems",
                      value: "$359",
                      date: "10/07/2023",
                      status: "New",
                    },
                    {
                      name: "Carlos Garcia",
                      avatar: "https://i.pravatar.cc/40?img=2",
                      company: "SmoozeShift",
                      value: "$747",
                      date: "24/07/2023",
                      status: "New",
                    },
                    {
                      name: "Elizabeth Bailey",
                      avatar: "https://i.pravatar.cc/40?img=3",
                      company: "Prime Time Telecom",
                      value: "$564",
                      date: "08/08/2023",
                      status: "In-progress",
                    },
                    {
                      name: "Ryan Brown",
                      avatar: "https://i.pravatar.cc/40?img=4",
                      company: "OmniTech Corporation",
                      value: "$541",
                      date: "31/08/2023",
                      status: "In-progress",
                    },
                    {
                      name: "Ryan Young",
                      avatar: "https://i.pravatar.cc/40?img=5",
                      company: "DataStream Inc.",
                      value: "$769",
                      date: "01/05/2023",
                      status: "Completed",
                    },
                    {
                      name: "Hailey Adams",
                      avatar: "https://i.pravatar.cc/40?img=6",
                      company: "FlowRush",
                      value: "$922",
                      date: "10/06/2023",
                      status: "Completed",
                    },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <input type="checkbox" />
                      </td>
                      <td className="px-4 py-3 flex items-center space-x-2">
                        <img
                          src={row.avatar}
                          alt=""
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="font-medium">{row.name}</span>
                      </td>
                      <td className="px-4 py-3">{row.company}</td>
                      <td className="px-4 py-3">{row.value}</td>
                      <td className="px-4 py-3">{row.date}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`
                px-2 py-1 text-xs rounded-full font-medium
                ${row.status === "New" ? "bg-blue-100 text-blue-600" : ""}
                ${
                  row.status === "In-progress"
                    ? "bg-yellow-100 text-yellow-700"
                    : ""
                }
                ${
                  row.status === "Completed"
                    ? "bg-green-100 text-green-600"
                    : ""
                }
              `}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">✏️</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
              <span>63 results</span>
              <div className="flex items-center space-x-2">
                <button className="px-2 py-1 rounded hover:bg-gray-200">
                  &lt;
                </button>
                {[1, 2, 3, 4, "...", 10, 11].map((page, i) => (
                  <button
                    key={i}
                    className={`px-3 py-1 rounded-full ${
                      page === 1
                        ? "bg-pink-500 text-white"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-2 py-1 rounded hover:bg-gray-200">
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
