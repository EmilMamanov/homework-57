import React, { useState } from 'react';
import './App.css';

interface User {
    id: number;
    name: string;
    email: string;
    active: boolean;
    role: string;
}

interface AppProps {}

const App: React.FC<AppProps> = () => {
    const [users, setUsers] = useState<User[]>([]);

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6">
                    <h2>Add User</h2>
                </div>
                <div className="col-6">
                    <h2>Users</h2>
                </div>
            </div>
        </div>
    );
};

export default App;