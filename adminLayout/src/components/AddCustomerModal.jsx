import React, { useState } from "react";

const AddCustomerModal = ({ isOpen, onClose, onAdd }) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("New");

  const handleSave = () => {
    if (!name || !company || !value || !date || !status) return;

    onAdd({
      id: Date.now(),
      name,
      avatar: `https://i.pravatar.cc/40?u=${name}`,
      company,
      value: `$${value}`,
      date,
      status,
    });

    // Reset form
    setName("");
    setCompany("");
    setValue("");
    setDate("");
    setStatus("New");

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
      <div className="bg-white rounded-lg p-6 shadow-xl w-[400px] space-y-4">
        <h2 className="text-xl font-semibold">Add Customer</h2>
        <input
          className="w-full border p-2 rounded"
          placeholder="Customer name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full border p-2 rounded"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          className="w-full border p-2 rounded"
          placeholder="Order Value"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          className="w-full border p-2 rounded"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <select
          className="w-full border p-2 rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="New">New</option>
          <option value="In-progress">In-progress</option>
          <option value="Completed">Completed</option>
        </select>

        <div className="flex justify-end space-x-2">
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCustomerModal;
