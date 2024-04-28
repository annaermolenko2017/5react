import React from 'react';
import {Routes, Route} from "react-router-dom";

import UserPage from "./pages/UserPage";
import AlbumPage from "./pages/AlbumPage";
import PhotosPage from "./pages/PhotosPage";


const App = () => {
    return (
        <Routes>
            <Route path='/' element={<UserPage />} />
            <Route path='/user/:userId/albums' element={<AlbumPage />} />
            <Route path='/user/:userId/album/:albumId/photos' element={<PhotosPage />} />
        </Routes>
    );
};

export default App;
