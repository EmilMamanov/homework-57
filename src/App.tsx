import React, { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';

interface User {
    id: number;
    name: string;
    email: string;
    active: boolean;
    role: string;
    image: string;
}

interface AppProps {}

const App: React.FC<AppProps> = () => {
    const [users, setUsers] = useState<User[]>([]);
    const addUser = (user: User) => {
        user.id = users.length + 1;
        setUsers((prevUsers) => [...prevUsers, user]);
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 min-width-300">
                    <h2>Add User</h2>
                    <UserForm onUserAdd={addUser} />
                </div>
                <div className="col-6 min-width-300">
                    <h2>Users</h2>
                    <Users users={users} />
                </div>
            </div>
        </div>
    );
};

export default App;
