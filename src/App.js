// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Navbar from './components/Navbar';
import Home from './components/Home';
import Discover from './components/Discover';
import Library from './components/Library';
import SignIn from './components/SignIn'; // Ensure this file exists
import SignUp from './components/SignUp'; // Ensure this file exists
import ArticleDetail from './components/ArticleDetail'; // Import the ArticleDetail component

const App = () => {
    return (
        <Router>
            <div className="flex">
                <Navbar />
                <div className="flex-grow ml-64 p-4 bg-black min-h-screen">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/discover" element={<Discover />} />
                        <Route path="/library" element={<Library />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/article/:id" element={<ArticleDetail />} /> {/* Route for Article Detail */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
