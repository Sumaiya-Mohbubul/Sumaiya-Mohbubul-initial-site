import { lazy } from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() => import('../../pages/Home'));
const Projects = lazy(() => import('../../pages/Projects'));
const Articles = lazy(() => import('../../pages/Articles'));
const NotFound = lazy(() => import('../../pages/NotFound'));

function Routes() {
    return (
        <RouterRoutes>
            <Route path="/home" element={<Home />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/articles" element={<Articles />}/>
            <Route path="*" element={<Navigate to="/home" />} />
            <Route path="404" element={<NotFound />} />
        </RouterRoutes>
    );
}

export default Routes;
