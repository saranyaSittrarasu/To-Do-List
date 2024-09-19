import React, { useState } from 'react';
import { FiSave, FiX } from 'react-icons/fi';

const EditTask = ({ task, onSave, onCancel }) => {
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    if (editText.trim() === '') return;
    onSave(task.id, editText);
  };

  return (
    <div className="flex space-x-2 items-center">
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        className="border border-gray-300 rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button onClick={handleSave} className="bg-green-500 p-1 rounded text-white">
      <FiSave className="h-5 w-5" />
      </button>
      <button onClick={onCancel} className="bg-gray-500 p-1 rounded text-white">
      <FiX className="h-5 w-5" />
      </button>
    </div>
  );
};

export default EditTask;
