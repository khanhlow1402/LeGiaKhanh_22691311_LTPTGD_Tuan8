import React from "react";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Grid container */}
      <div className="grid grid-cols-12 gap-4 p-4">
        {/* Phần bên trái (left) - chiếm 3 cột */}
        <div className="col-span-3 bg-white rounded-lg shadow p-4">
          <div className="h-full">
            {/* Nội dung phần left sẽ được thêm sau */}
            <p className="text-gray-500">Left sidebar content</p>
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
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Detailed report</h2>
            {/* Nội dung bảng sẽ được thêm sau */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
