import React from 'react';
import useStore from '../store/taskStore';

const TaskList: React.FC = () => {
    const tasks = useStore(state => state.tasks);

    return (
        <div className="task-list">
            <h2 className="text-xl font-bold mb-4">Task List</h2>
            <ul className="list-disc pl-5">
                {tasks.map(task => (
                    <li key={task.id} className="mb-2">
                        <span className="font-semibold">{task.title}</span>: {task.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;