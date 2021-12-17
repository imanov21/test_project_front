import { Route, Routes } from 'react-router-dom';
import { VideoPage } from 'pages/Video/DetailPage/VideoPage';
import { Home } from 'pages/Home/Home';
import { Login } from 'pages/Login/Login';
import { FavoritesList } from 'pages/FavoritesList/FavoritesList';
import Logout from 'pages/logout/Logout';
import { ListPage } from 'pages/Video/ListPage';

const Routs = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/video/:id" element={<VideoPage />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/films" element={<ListPage videoType="Films" />} />
        <Route path="/serials" element={<ListPage videoType="Serials" />} />
    </Routes>
);

export default Routs;
