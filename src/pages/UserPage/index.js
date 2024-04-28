import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users?_limit=5')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.log('Error fetching users data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Список користувачів</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <h3>{user.name}</h3>
                        <Link to={`/user/${user.id}/albums`}>Переглянути альбоми</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserPage;