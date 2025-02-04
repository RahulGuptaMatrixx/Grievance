import { lazy } from 'react'
const PageNotFound = lazy(()=>import('src/components/PageNotFound'))
const SignIn = lazy(()=>import('src/pages/auth/signin'))
const Dashboard = lazy(()=>import('src/pages/dashboard'))

export const publicRoutes = [
    {
        path: '*',
        component: PageNotFound,
    },
    {
        path: '/',
        component: SignIn,
    },
];

export const protectedRoutes = [
    {
        path: '/dashboard',
        component: Dashboard
    },
];

