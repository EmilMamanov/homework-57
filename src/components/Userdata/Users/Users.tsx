import React from 'react';
import { User } from '../../../types';
import UserItem from '../UserItem/UserItem.tsx';

interface UsersProps {
    users: User[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
    return (
        <div>
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    );
};

export default Users;
