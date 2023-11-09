import React, { useState } from 'react';
import { User } from '../../types';

interface UserFormProps {
    onUserAdd: (user: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onUserAdd }) => {
    const [user, setUser] = useState<User>({
        id: 0,
        name: '',
        email: '',
        active: false,
        role: 'user',
        image: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setUser({
            ...user,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onUserAdd(user);
        setUser({
            id: 0,
            name: '',
            email: '',
            active: false,
            role: 'user',
            image: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="active"
                    name="active"
                    checked={user.active}
                    onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="active">
                    Active
                </label>
            </div>
            <div className="mb-3">
                <label htmlFor="role" className="form-label">
                    Role
                </label>
                <select
                    className="form-select"
                    id="role"
                    name="role"
                    value={user.role}
                    onChange={handleInputChange}
                >
                    <option value="user">User</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">
                    Image URL
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="image"
                    name="image"
                    value={user.image}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Add User
            </button>
        </form>
    );
};

export default UserForm;
