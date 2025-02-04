import { Outlet } from 'react-router-dom';

export default function ProtectedLayout() {
    // if (!authorizationKey) {
    //     return <Navigate to="/" />;
    // }
    return (
        <Outlet />
    );
}
