import { Home } from '../pages/Home/Home';
import { SignIn } from '../pages/SignIn/SignIn';

const pages = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/sign-in',
        component: SignIn,
    },
    // {
    //     path: '/favorites',
    //     component: FavoritesList,
    // },
    // {
    //     path: '/video',
    //     component: VideoList,
    // },
    // {
    //     path: '/films',
    //     component: Films,
    // },
    // {
    //     path: '/films/:id',
    //     component: Film,
    // },
    // {
    //     path: '/serials',
    //     component: Serials,
    // },
    // {
    //     path: '/serials/:id',
    //     component: Serial,
    // },
];

export default pages;
