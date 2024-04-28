import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PhotosPage = () => {
    const [photos, setPhotos] = useState([]);
    const { albumId } = useParams();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=1&_limit=1`)
            .then(response => {
                setPhotos(response.data);
            })
            .catch(error => {
                console.log('Error fetching photos data:', error);
            });
    }, [albumId]);

    return (
        <div>
            <h1>Фотографії з альбому</h1>
            <ul>
                {photos.map(photo => (
                    <li key={photo.id}>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PhotosPage;