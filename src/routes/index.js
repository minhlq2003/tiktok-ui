import Home from '../page/home';
import Following from '../page/Following';
import Profile from '../page/Profile';
import Upload from '../page/Upload';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
