import React, { useState, useEffect } from "react";

const EditCustomerModal = ({ isOpen, onClose, customer }) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    if (customer) {
      setName(customer.name);
      setCompany(customer.company);
    }
  }, [customer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // xử lý logic update customer ở đây
    console.log("Updated:", { name, company });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md pointer-events-auto">
        <h2 className="text-lg font-semibold mb-4">Edit Customer</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            placeholder="Customer name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCustomerModal;
