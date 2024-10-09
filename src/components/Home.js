// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const featuredArticles = [
        {
            id: 1,
            title: "The Future of AI",
            description: "An in-depth look at how AI is transforming industries.",
            imageUrl: "https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524399.jpg?t=st=1728491791~exp=1728495391~hmac=42d0c9487e420305b1b1d01ed00ede5c24c5cd0585299302e10917f728565848&w=996",
        },
        {
            id: 2,
            title: "Sustainable Technology",
            description: "Exploring innovations that promote sustainability.",
            imageUrl: "https://img.freepik.com/free-photo/global-environmental-sustainability-background-green-technology_53876-124628.jpg?t=st=1728491670~exp=1728495270~hmac=5a2ea560b1e7d5a39cf55e308a083fe3375885967e8097cda8e967d135a2c689&w=1380",
        },
        {
            id: 3,
            title: "Health Trends in 2024",
            description: "What to expect in health and wellness this year.",
            imageUrl: "https://img.freepik.com/free-photo/physical-activity-stats-around-person_23-2150163404.jpg?t=st=1728491882~exp=1728495482~hmac=b7538e01888c32dd1eeefdc13a6f7d52ccf9b5197382bdeba4600a970cf86a13&w=1060",
        },
    ];

    return (
        <div className="p-4">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white">Welcome to Perplexity</h1>
                <p className="text-gray-400 mt-2">Your gateway to knowledge and insights.</p>
                <Link to="/discover" className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700">
                    Discover More
                </Link>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {featuredArticles.map((article) => (
                    <div key={article.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                        <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="font-bold text-xl text-white">{article.title}</h3>
                            <p className="text-gray-400">{article.description}</p>
                            <Link to={`/article/${article.id}`} className="text-blue-500 mt-2 block">Read More</Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <h2 className="text-2xl font-bold text-white">Join Our Community</h2>
                <p className="text-gray-400 mt-2">Stay updated with the latest insights and discussions.</p>
                <Link to="/discover" className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700">
                    Join Now
                </Link>
            </div>
        </div>
    );
};

export default Home;
