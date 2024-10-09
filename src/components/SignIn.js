import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';

const SignIn = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-black">
            <div className="bg-white rounded-lg shadow-lg p-10 w-96">
                <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">Welcome Back</h1>
                <h2 className="text-lg text-center mb-6 text-gray-600">Sign In Options</h2>

                {/* Sign In with Google */}
                <button className="w-full mb-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300 flex items-center justify-center">
                    <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                    Sign In with Google
                </button>

                {/* Sign In with GitHub */}
                <button className="w-full mb-4 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-300 flex items-center justify-center">
                    <FontAwesomeIcon icon={faGithub} className="mr-2" />
                    Sign In with GitHub
                </button>

                {/* Sign In with Email */}
                <form className="space-y-4">
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        required
                    />
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                        Sign In
                    </button>
                </form>

                <p className="mt-6 text-center text-gray-600">
                    Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline font-semibold">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
