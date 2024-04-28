import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const AlbumPage = () => {
    const [albums, setAlbums] = useState([]);
    const { userId } = useParams();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/albums?userId=1&_limit=2`)
            .then(response => {
                setAlbums(response.data);
            })
            .catch(error => {
                console.log('Error fetching albums data:', error);
            });
    }, [userId]);

    return (
        <div>
            <h1>Альбоми користувача</h1>
            <ul>
                {albums.map(album => (
                    <li key={album.id}>
                        <h3>{album.title}</h3>
                        <Link to={`/user/${userId}/album/${album.id}/photos`}>Переглянути фотографії</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlbumPage;