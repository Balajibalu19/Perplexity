import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faMicrochip, faMoneyBillWave, faPalette, faFutbol, faFilm, faCompass } from '@fortawesome/free-solid-svg-icons';

// Sample data for cards in each category
const categoryData = {
    Top: [
        {
            id: 1,
            title: "Global Trends in 2024",
            description: "Explore the latest trends shaping the world in 2024.",
            imageUrl: "https://img.freepik.com/free-photo/3d-earth-planet-shape_23-2151133990.jpg?t=st=1728492021~exp=1728495621~hmac=433c564c66e8a360f3a40bfbe02d8e9ed47d0dfda5a2e4a0a0505e4efd51aada&w=1380",
        },
        {
            id: 2,
            title: "Sustainable Living",
            description: "Discover how to live sustainably in the modern world.",
            imageUrl: "https://img.freepik.com/free-photo/view-city-with-apartment-buildings-green-vegetation_23-2150439351.jpg?t=st=1728492062~exp=1728495662~hmac=7a926a7b99bda0ce2d25e87e302833b64aaef76b52f00a4a60f56cffef8bd59c&w=1060",
        },
        {
            id: 3,
            title: "Health and Wellness",
            description: "Explore tips for maintaining health and wellness.",
            imageUrl: "https://img.freepik.com/free-photo/wellness-exercise-health-lifestyle-nutrition-concept_53876-124996.jpg?t=st=1728492105~exp=1728495705~hmac=458910a20f28c9655038ea669b7c9f27981c645b84ffc2614d3748fef44dd9b3&w=900",
        },
        {
            id: 4,
            title: "The Future of Work",
            description: "How remote work is shaping our future.",
            imageUrl: "https://img.freepik.com/free-photo/cheerful-young-girl-wearing-vr-device-squeeze-her-fists_144627-77126.jpg?t=st=1728492153~exp=1728495753~hmac=06d98b9ee1b4ec3212ca13887f2c2134f4848e4be1c6583818f3c9fe6c71bbcc&w=1060",
        },
        {
            id: 5,
            title: "Mental Health Awareness",
            description: "Understanding the importance of mental health.",
            imageUrl: "https://img.freepik.com/free-psd/world-mental-health-day-facebook-template_23-2149633653.jpg?t=st=1728492191~exp=1728495791~hmac=a3fd0bc0a32fee66b3d0abdc6e0d3922ffef8bc7668d1ab97e62fee8161c5f90&w=1380",
        },
    ],
    "Tech & Science": [
        {
            id: 6,
            title: "Advancements in AI",
            description: "Discover the groundbreaking advancements in artificial intelligence.",
            imageUrl: "https://img.freepik.com/premium-photo/school-student-with-vr-headset-using-ai-machine-learning-technology-hologram-education_730845-4795.jpg?w=740",
        },
        {
            id: 7,
            title: "Quantum Computing Basics",
            description: "An introduction to quantum computing and its applications.",
            imageUrl: "https://img.freepik.com/premium-photo/school-student-with-vr-headset-using-ai-machine-learning-technology-hologram-education_730845-4795.jpg?w=740",
        },
        {
            id: 8,
            title: "Space Exploration",
            description: "The latest missions and discoveries in space exploration.",
            imageUrl: "https://img.freepik.com/free-photo/technological-exploration-settlement_23-2151768583.jpg?t=st=1728492545~exp=1728496145~hmac=c61c193f443356fe8d3c8fa6325caf452f746032fdbd39a9dc867849e33781b6&w=1060",
        },
    ],
    Finance: [
        {
            id: 11,
            title: "Cryptocurrency Market Trends",
            description: "Analyze the trends in the cryptocurrency market.",
            imageUrl: "https://img.freepik.com/premium-photo/ed-illustration-cryptocurrency-with-monitor-graph_968529-274650.jpg?w=740",
        },
        {
            id: 12,
            title: "Investment Strategies",
            description: "Effective investment strategies for 2024.",
            imageUrl: "https://img.freepik.com/free-photo/business-people-working-with-ipad-high-angle_23-2150103567.jpg?t=st=1728492631~exp=1728496231~hmac=b24aaefd870cde0f453aebcad8d82a27799deb6b3eaa4345a1790d67ab9bc422&w=1060",
        },
        {
            id: 13,
            title: "Financial Independence",
            description: "Steps to achieve financial independence early.",
            imageUrl: "https://img.freepik.com/premium-photo/rupee-symbol-held-hand-financial-concept_29977-9765.jpg?w=1380",
        },
    ],
    "Art & Culture": [
        {
            id: 16,
            title: "The Evolution of Modern Art",
            description: "A look at how modern art has evolved over the decades.",
            imageUrl: "https://img.freepik.com/free-photo/portrait-indigenous-person-integrated-into-modern-life_23-2151102523.jpg?t=st=1728492727~exp=1728496327~hmac=1e989a7ec6812a0aa562c6810c1a1982c947e8b89dadd74447f74c381d3cb7d2&w=1380",
        },
        {
            id: 17,
            title: "Cultural Festivals Around the World",
            description: "Discover vibrant cultural festivals celebrated globally.",
            imageUrl: "https://img.freepik.com/premium-photo/global-festival-honoring-diversity_194498-29764.jpg?w=1060",
        },
        {
            id: 18,
            title: "Influential Artists",
            description: "A look at artists who shaped the art world.",
            imageUrl: "https://img.freepik.com/free-photo/creative-artist-painting-studio_155003-1109.jpg?t=st=1728492824~exp=1728496424~hmac=c78d4f1a7da5aeb722129070e9bb9833e9b3b86922fb102c243c76f8191ee787&w=1060",
        },
    ],
    Sports: [
        {
            id: 21,
            title: "Olympic Games 2024 Preview",
            description: "Get ready for the upcoming Olympic Games in Paris.",
            imageUrl: "https://img.freepik.com/premium-photo/close-up-rings-front-tower_499455-239.jpg?w=1380",
        },
        {
            id: 22,
            title: "The Rise of Esports",
            description: "Exploring the growth of competitive gaming.",
            imageUrl: "https://img.freepik.com/free-photo/side-view-happy-woman-winning-videogame_23-2149349981.jpg?t=st=1728492920~exp=1728496520~hmac=9ca169748831f97943e4c4e2e36874c06404b5dd4ba59060ac7572431f7c3d77&w=1060",
        },
        {
            id: 23,
            title: "Health Benefits of Sports",
            description: "The importance of sports for physical and mental health.",
            imageUrl: "https://img.freepik.com/premium-photo/sports-drink-portrait-woman-with-protein-shake-bottle-health-wellness-energy-benefits-exercise-outdoor-hiking-person-with-smoothie-nutrition-diet-after-workout_590464-267724.jpg?w=1060",
        },
    ],
    Entertainment: [
        {
            id: 26,
            title: "Top Movies to Watch in 2024",
            description: "A preview of the most anticipated movies releasing in 2024.",
            imageUrl: "https://img.freepik.com/premium-photo/movie-poster-movie-starring-actors-movie-is-starring-actors_1086266-13997.jpg?w=1380",
        },
        {
            id: 27,
            title: "Music Festivals 2024",
            description: "The biggest music festivals happening this year.",
            imageUrl: "https://img.freepik.com/premium-photo/large-crowd-celebrates-new-years-eve-with-2024-display_1057859-9053.jpg?w=900",
        },
        {
            id: 28,
            title: "TV Shows to Binge-Watch",
            description: "Must-see TV shows for the year.",
            imageUrl: "https://img.freepik.com/premium-photo/multiethnic-friends-having-online-videocall-conference-greeting-virtual-collegue_482257-6378.jpg?w=1380",
        },
        {
            id: 29,
            title: "The Best Video Games of 2024",
            description: "A roundup of the most exciting video games releasing this year.",
            imageUrl: "https://via.placeholder.com/150",
        },
        {
            id: 30,
            title: "Celebrity Interviews",
            description: "In-depth interviews with today's biggest stars.",
            imageUrl: "https://via.placeholder.com/150",
        },
    ],
};

const categoryIcons = {
    Top: faChartLine,
    "Tech & Science": faMicrochip,
    Finance: faMoneyBillWave,
    "Art & Culture": faPalette,
    Sports: faFutbol,
    Entertainment: faFilm,
};

const Discover = () => {
    const [selectedCategory, setSelectedCategory] = useState('Top');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="p-4 bg-black min-h-screen">
            <h1 className="text-3xl font-bold mb-4 text-left text-white flex items-center">
                <FontAwesomeIcon icon={faCompass} className="mr-2" />
                Discover
            </h1>
            <div className="flex justify-start space-x-4 mb-4">
                {Object.keys(categoryData).map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className={`flex items-center space-x-2 py-3 px-5 rounded-lg transition duration-300 
                                    ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white'}`}
                    >
                        <FontAwesomeIcon icon={categoryIcons[category]} className="text-lg" />
                        <span className="font-semibold text-lg">{category}</span>
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-6 mt-4">
                {categoryData[selectedCategory].map((card) => (
                    <div key={card.id} className="border rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105">
                        <img 
                            src={card.imageUrl} 
                            alt={card.title} 
                            className="w-full h-48 object-cover mb-2" 
                        />
                        <div className="p-4 bg-white">
                            <h2 className="font-bold text-lg text-gray-800">{card.title}</h2>
                            <p className="text-gray-600 mb-4">{card.description}</p>
                            <Link 
                                to={`/article/${card.id}`} 
                                className="text-blue-500 font-semibold hover:underline"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Discover;

