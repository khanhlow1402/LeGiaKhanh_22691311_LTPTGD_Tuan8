import React, { useState, useEffect } from "react";

const EditCustomerModal = ({ isOpen, onClose, customer, onSave }) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("New");

  useEffect(() => {
    if (customer) {
      setName(customer.name || "");
      setCompany(customer.company || "");
      setValue(customer.value?.replace("$", "") || "");
      setDate(customer.date || "");
      setStatus(customer.status || "New");
    }
  }, [customer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !company || !value || !date || !status) return;

    const updatedCustomer = {
      ...customer,
      name,
      company,
      value: `$${value}`,
      date,
      status,
    };

    onSave(updatedCustomer);
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
          <input
            type="number"
            className="w-full px-3 py-2 border rounded"
            placeholder="Order Value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <input
            type="date"
            className="w-full px-3 py-2 border rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <select
            className="w-full px-3 py-2 border rounded"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="New">New</option>
            <option value="In-progress">In-progress</option>
            <option value="Completed">Completed</option>
          </select>
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
