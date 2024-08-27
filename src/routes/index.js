import Home from '../page/home';
import Following from '../page/Following';
import Profile from '../page/Profile';
import Upload from '../page/Upload';
import config from '../config';
import Search from '../page/Search';
import Live from '../page/Live';
import HeaderOnly from '../components/layout/HeaderOnly';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
