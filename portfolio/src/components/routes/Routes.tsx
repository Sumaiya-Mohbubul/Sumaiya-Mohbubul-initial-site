import { lazy } from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() => import('../../pages/Home'));
const NotFound = lazy(() => import('../../pages/NotFound'));

function Routes() {
    return (
        <RouterRoutes>
            <Route path="/home" element={<Home />}/>
            <Route path="*" element={<Navigate to="/home" />} />
            <Route path="404" element={<NotFound />} />
        </RouterRoutes>
    );
}

export default Routes;
