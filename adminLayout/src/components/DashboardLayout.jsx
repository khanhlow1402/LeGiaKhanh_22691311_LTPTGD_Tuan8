import React, { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import EditCustomerModal from "./EditCustomerModal";

const initialCustomers = [
  {
    id: 1,
    name: "Elizabeth Lee",
    avatar: "https://i.pravatar.cc/40?img=1",
    company: "AvatarSystems",
    value: "$359",
    date: "10/07/2023",
    status: "New",
  },
  {
    id: 2,
    name: "Carlos Garcia",
    avatar: "https://i.pravatar.cc/40?img=2",
    company: "SmoozeShift",
    value: "$747",
    date: "24/07/2023",
    status: "New",
  },
  {
    id: 3,
    name: "Elizabeth Bailey",
    avatar: "https://i.pravatar.cc/40?img=3",
    company: "Prime Time Telecom",
    value: "$564",
    date: "08/08/2023",
    status: "In-progress",
  },
  {
    id: 4,
    name: "Ryan Brown",
    avatar: "https://i.pravatar.cc/40?img=4",
    company: "OmniTech Corporation",
    value: "$541",
    date: "31/08/2023",
    status: "In-progress",
  },
  {
    id: 5,
    name: "Ryan Young",
    avatar: "https://i.pravatar.cc/40?img=5",
    company: "DataStream Inc.",
    value: "$769",
    date: "01/05/2023",
    status: "Completed",
  },
  {
    id: 6,
    name: "Hailey Adams",
    avatar: "https://i.pravatar.cc/40?img=6",
    company: "FlowRush",
    value: "$922",
    date: "10/06/2023",
    status: "Completed",
  },
];

const DashboardLayout = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleEditClick = (customer) => {
    setEditingCustomer(customer);
    setEditModalOpen(true);
  };

  const handleSave = (updatedCustomer) => {
    setCustomers((prev) =>
      prev.map((cust) =>
        cust.id === updatedCustomer.id ? updatedCustomer : cust
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="grid grid-cols-12 gap-4 p-4">
        <div className="col-span-3 bg-white rounded-lg shadow p-4">
          <div className="h-full">
            <div className="flex">
              <Sidebar />
              <main className="flex-1 bg-gray-50 p-4"></main>
            </div>
          </div>
        </div>

        <div className="col-span-9 space-y-4">
          <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-pink-600">Dashboard</h1>
            <div className="flex items-center space-x-4">
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
              <button className="text-gray-600 hover:text-black text-xl">
                🔔
              </button>
              <button className="text-gray-600 hover:text-black text-xl">
                ❓
              </button>
              <img
                src="https://i.pravatar.cc/40"
                alt="User avatar"
                className="w-9 h-9 rounded-full object-cover"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center mb-4 space-x-2">
              <span className="text-pink-600 text-xl">🟪</span>
              <h2 className="text-lg font-semibold">Overview</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Cards */}
            </div>
          </div>

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
                  {customers.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50">
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
                          className={`px-2 py-1 text-xs rounded-full font-medium ${
                            row.status === "New"
                              ? "bg-blue-100 text-blue-600"
                              : row.status === "In-progress"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-green-100 text-green-600"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button onClick={() => handleEditClick(row)}>✏️</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <EditCustomerModal
        customer={editingCustomer}
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
};

export default DashboardLayout;
