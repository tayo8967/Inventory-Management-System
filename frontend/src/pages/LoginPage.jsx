import { React, useState } from "react";
import { Link } from "react-router-dom";
import { LogIn, Mail, Lock, ArrowRight, Loader } from "lucide-react";
import { motion } from "framer-motion";
import { useUserStore } from "../stores/useUserStore";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login, loading } = useUserStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <motion.div
                className="sm:mx-auto sm:w-full sm:max-w-md"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="mt-6 text-center text-3xl font-bold text-gray-800">
                    Login to PaxStox
                </h2>
            </motion.div>

            <motion.div
                className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h2 className="bg-white py-8 px-4 shadow-md rounded-2xl sm:px-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-800"
                            >
                                Email address
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail
                                        className="h-5 w-5 text-gray-800"
                                        aria-hidden="true"
                                    />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className=" block w-full px-3 py-2 pl-10 bg-gray-50 border border-gray-200 rounded-md shadow-sm text-gray-800
                                        placeholder-gray-400 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                                    placeholder="Email"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-800"
                            >
                                Password
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock
                                        className="h-5 w-5 text-gray-800"
                                        aria-hidden="true"
                                    />
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className=" block w-full px-3 py-2 pl-10 bg-gray-50 border border-gray-200 rounded-md shadow-sm 
                                    placeholder-gray-400 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent 
                                rounded-md shadow-sm text-sm font-medium text-white bg-blue-600
                                hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                                focus:ring-blue-500 transition duration-150 ease-in-out disabled:opacity-50"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader
                                        className="mr-2 h-5 w-5 animate-spin"
                                        aria-hidden="true"
                                    />
                                    Loading...
                                </>
                            ) : (
                                <>
                                    <LogIn
                                        className="mr-2 h-5 w-5"
                                        aria-hidden="true"
                                    />
                                    Login
                                </>
                            )}
                        </button>

                        <p className="mt-8 text-center text-sm text-gray-400">
                            Not a member?{" "}
                            <Link
                                to="/request-account"
                                className="font-medium text-blue-400 hover:text-blue-300"
                            >
                                Request for an account{" "}
                                <ArrowRight className="inline h-4 w-4" />
                            </Link>
                        </p>
                    </form>
                </h2>
            </motion.div>
        </div>
    );
};

export default LoginPage;
