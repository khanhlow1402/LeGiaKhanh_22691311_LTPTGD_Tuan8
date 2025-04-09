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
          <div className="bg-white rounded-lg shadow p-4">
            <h1 className="text-xl font-bold">Dashboard</h1>
            {/* Nội dung header sẽ được thêm sau */}
          </div>

          {/* Overview - phần giữa bên phải */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Overview</h2>
            {/* Nội dung overview sẽ được thêm sau */}
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
