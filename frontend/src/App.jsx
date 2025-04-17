import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

import { useUserStore } from "./stores/useUserStore";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
    const { user, checkAuth, checkingAuth } = useUserStore();

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    /*useEffect(() => {
        if (!user) return;

        getNotifications();
    }, [getNotifications, user]);*/

    if (checkingAuth) return <LoadingSpinner />;

    return (
        <div className="min-h-screen bg-gray-50 text-gray-500 relative overflow-hidden">
            <div className="relative z-50 pt-20">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/login"
                        element={!user ? <LoginPage /> : <Navigate to="/" />}
                    />
                </Routes>
            </div>
            <Toaster />
        </div>
    );
}

export default App;
