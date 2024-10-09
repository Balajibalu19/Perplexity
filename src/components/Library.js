import React from 'react';
import { Link } from 'react-router-dom';

const Library = () => {
    // Sample library items
    const libraryItems = [
        {
            id: 1,
            title: "Understanding Quantum Computing",
            description: "A comprehensive guide to the world of quantum computing.",
            imageUrl: "https://via.placeholder.com/300x200", // Replace with actual image URL
        },
        {
            id: 2,
            title: "The Art of Machine Learning",
            description: "Insights and techniques for mastering machine learning.",
            imageUrl: "https://via.placeholder.com/300x200",
        },
        {
            id: 3,
            title: "Blockchain Basics",
            description: "Everything you need to know about blockchain technology.",
            imageUrl: "https://via.placeholder.com/300x200",
        },
        {
            id: 4,
            title: "AI Ethics and Society",
            description: "Exploring the ethical implications of artificial intelligence.",
            imageUrl: "https://via.placeholder.com/300x200",
        },
        {
            id: 5,
            title: "Future of Work",
            description: "How technology is shaping the future of the workplace.",
            imageUrl: "https://via.placeholder.com/300x200",
        },
        {
            id: 6,
            title: "Digital Marketing Strategies",
            description: "Effective strategies for marketing in the digital age.",
            imageUrl: "https://via.placeholder.com/300x200",
        },
    ];

    return (
        <div className="p-4 bg-black min-h-screen">
            {/* Library Section */}
            <h1 className="text-4xl font-bold text-white text-center mb-8">Library</h1>
            <p className="text-gray-400 text-center mb-4">Explore a wide range of articles and resources.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {libraryItems.map((item) => (
                    <div key={item.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                        <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="font-bold text-xl text-white">{item.title}</h3>
                            <p className="text-gray-400">{item.description}</p>
                            <Link to={`/article/${item.id}`} className="text-blue-500 mt-2 block">Read More</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Library;
