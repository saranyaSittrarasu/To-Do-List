import React, { useState } from 'react';
import { FiPlus,FiEdit } from 'react-icons/fi';
import EditTask from './components/EditTask';
import DeleteTask from './components/DeleteTask';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [isEditing, setIsEditing] = useState(null);

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: newTask }]);
    setNewTask('');
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleSaveEdit = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
    setIsEditing(null);
  };

  const handleEditTask = (id) => {
    setIsEditing(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 via-blue-200 to-purple-300 flex items-center justify-center">

      <div className="bg-white/90 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">To Do List</h1>

        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="border border-gray-300 rounded-l-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add a new task..."
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600"
          >
            <FiPlus className="h-5 w-5 mr-1" />
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center p-2 border rounded-md bg-gray-100"
            >
              {isEditing === task.id ? (
                <EditTask
                  task={task}
                  onSave={handleSaveEdit}
                  onCancel={() => setIsEditing(null)}
                />
              ) : (
                <>
                  <span>{task.text}</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditTask(task.id)}
                      className="bg-yellow-400 p-1 rounded text-white"
                    >
                      <FiEdit className="h-5 w-5 " />
                    </button>
                    <DeleteTask taskId={task.id} onDelete={handleDeleteTask} />
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
