import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

const DeleteTask = ({ taskId, onDelete }) => {
  return (
    <button
      onClick={() => onDelete(taskId)}
      className="bg-red-500 p-1 rounded text-white"
    >
       <FiTrash2 className="h-5 w-5" />
    </button>
  );
};

export default DeleteTask;
