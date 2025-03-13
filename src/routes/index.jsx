import HeaderOnly from '@/layouts/HeaderOnly';

import Home from '@/pages/Home';
import Explore from '@/pages/Explore';
import Following from '@/pages/Following';
import Friends from '@/pages/Friends';
import Upload from '@/pages/Upload';
import Activity from '@/pages/Activity';
import Messages from '@/pages/Messages';
import LIVE from '@/pages/LIVE';
import Profile from '@/pages/Profile';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/explore', component: Explore },
    { path: '/following', component: Following },
    { path: '/friends', component: Friends },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/activity', component: Activity },
    { path: '/messages', component: Messages },
    { path: '/live', component: LIVE },
    { path: '/profile', component: Profile },
];

export const privateRoutes = [];
