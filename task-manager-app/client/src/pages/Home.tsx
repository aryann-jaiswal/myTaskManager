import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Welcome to myTaskManager</h1>
            <p className="mt-4 text-lg">Boost your productivity by managing your tasks efficiently.</p>
        </div>
    );
};

export default Home;