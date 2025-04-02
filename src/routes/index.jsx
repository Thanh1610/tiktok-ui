import config from '@/config';

import Home from '@/pages/Home';
import Explore from '@/pages/Explore';
import Following from '@/pages/Following';
import Friends from '@/pages/Friends';
import Upload from '@/pages/Upload';
import Messages from '@/pages/Messages';
import LIVE from '@/pages/LIVE';
import Profile from '@/pages/Profile';
import UploadPage from '@/layouts/components/UploadPage';

export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.following, component: Following },
    { path: config.routes.friends, component: Friends },
    { path: config.routes.upload, component: Upload, layout: UploadPage },
    { path: config.routes.messages, component: Messages },
    { path: config.routes.live, component: LIVE },
    { path: config.routes.profile, component: Profile },
];

export const privateRoutes = [];
