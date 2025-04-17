import React from "react";
import { UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";

const Navbar = () => {
    const { user, logout } = useUserStore();
    const isAdmin = user?.role === "admin";
    console.log("isAdmin:" + isAdmin);

    return (
        <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md shadow-sm z-40 transition-all duration-300">
            <div className="container mx-auto px-4 py-3">
                <div className="flex flex-wrap justify-between items-center">
                    <Link
                        to="/"
                        className="text-xl font-bold text-blue-600 items-center space-x-2 flex"
                    >
                        PaxStox
                    </Link>

                    <nav className="flex flex-wrap items-center gap-4">
                        {isAdmin && (
                            <Link
                                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
                                to={"/admin-dashboard"}
                            >
                                <Lock size={18} />
                                <span className="hidden sm:inline ml-2">
                                    Admin Dashboard
                                </span>
                            </Link>
                        )}

                        {user ? (
                            <Link
                                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
                                onClick={logout}
                            >
                                <LogOut size={18} />
                                <span className="hidden sm:inline ml-2">
                                    Log Out
                                </span>
                            </Link>
                        ) : (
                            <>
                                <Link
                                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
                                    to={"/login"}
                                >
                                    <LogIn className="mr-2" size={18} />
                                    Login
                                </Link>
                            </>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
