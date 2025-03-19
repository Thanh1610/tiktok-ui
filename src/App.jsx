import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { publicRoutes } from '@/routes';
import MainLayout from '@/layouts/MainLayout';
import { Fragment } from 'react';
import { useEffect } from 'react';
function App() {
    useEffect(() => {
        const handleBeforeUnload = () => {
            sessionStorage.clear();
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = MainLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
