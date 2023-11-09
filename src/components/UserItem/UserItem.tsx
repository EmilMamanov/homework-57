import React from 'react';

interface User {
    name: string;
    email: string;
    active: boolean;
    role: string;
    image: string | null;
}

interface UserItemProps {
    user: User;
}

const defaultImage = '';

const UserItem: React.FC<UserItemProps> = ({ user }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <img
                    src={user.image || defaultImage}
                    alt="User Image"
                    className="img-fluid"
                    style={{ maxHeight: '200px' }}
                />
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">
                    <strong>Email:</strong> {user.email}
                </p>
                <p className="card-text">
                    <strong>Active:</strong> {user.active ? 'Yes' : 'No'}
                </p>
                <p className="card-text">
                    <strong>Role:</strong> {user.role}
                </p>
            </div>
        </div>
    );
};

export default UserItem;