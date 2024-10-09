import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBook, faSignInAlt, faUserPlus, faChevronDown, faChevronRight, faUser } from '@fortawesome/free-solid-svg-icons'; // Import user icon
import Modal from 'react-modal';

// Define the Perplexity Icon with size and color props
const PerplexityIcon = ({ size = 24, color = "black" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M101.008 42L190.99 124.905V124.886V42.1913H208.506V125.276L298.891 42V136.524H336V272.866H299.005V357.035L208.506 277.525V357.948H190.99V278.836L101.11 358V272.866H64V136.524H101.008V42ZM177.785 153.826H81.5159V255.564H101.088V223.472L177.785 153.826ZM118.625 231.149V319.392L190.99 255.655V165.421L118.625 231.149ZM209.01 254.812V165.336L281.396 231.068V272.866H281.489V318.491L209.01 254.812ZM299.005 255.564H318.484V153.826H222.932L299.005 222.751V255.564ZM281.375 136.524V81.7983L221.977 136.524H281.375ZM177.921 136.524H118.524V81.7983L177.921 136.524Z"
            fill={color} // Use the color prop
        />
    </svg>
);

const Navbar = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [askAnything, setAskAnything] = useState('');
    const [isCollapsed, setIsCollapsed] = useState(false); // State for collapsing navbar

    const handleNewThreadClick = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleAskAnythingChange = (e) => {
        setAskAnything(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Search query:", askAnything);
        closeModal();
        setAskAnything('');
    };

    // Function to toggle navbar collapse
    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`fixed h-full transition-width duration-300 ${isCollapsed ? 'w-16' : 'w-64'} bg-gray-900 shadow-lg p-6`}>
            <h1 className="text-3xl font-bold text-white mb-6 flex items-center">
                <PerplexityIcon size={36} color="green" /> {/* Increased size and set color to green */}
                {!isCollapsed && 'Perplexity'}
            </h1>

            {/* Collapse Button */}
            <button onClick={toggleNavbar} className="absolute top-4 right-4 p-2 text-white hover:bg-gray-700 rounded-full">
                <FontAwesomeIcon icon={isCollapsed ? faChevronRight : faChevronDown} />
            </button>

            {!isCollapsed && (
                <>
                    <input
                        type="text"
                        placeholder="New Thread"
                        onClick={handleNewThreadClick}
                        className="mb-4 w-full p-3 bg-gray-800 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 hover:bg-gray-700"
                    />
                </>
            )}

            <ul className="space-y-4">
                <li>
                    <Link 
                        to="/" 
                        className="text-gray-300 hover:text-blue-400 transition duration-300 flex items-center p-2 rounded-lg hover:bg-gray-700">
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        {!isCollapsed && 'Home'}
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/discover" 
                        className="text-gray-300 hover:text-blue-400 transition duration-300 flex items-center p-2 rounded-lg hover:bg-gray-700">
                        <FontAwesomeIcon icon={faSearch} className="mr-2" />
                        {!isCollapsed && 'Discover'}
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/library" 
                        className="text-gray-300 hover:text-blue-400 transition duration-300 flex items-center p-2 rounded-lg hover:bg-gray-700">
                        <FontAwesomeIcon icon={faBook} className="mr-2" />
                        {!isCollapsed && 'Library'}
                    </Link>
                </li>
            </ul>

            {/* Sign In and Sign Up Section */}
            <div className="mt-8 border-t border-gray-700 pt-4">
                <ul className="space-y-4">
                    <li className="flex items-center">
                        <FontAwesomeIcon icon={faUser} className="mr-2 text-gray-300" /> {/* User icon */}
                        {!isCollapsed && <span className="text-gray-300">Account</span>} {/* Optional text for expanded view */}
                    </li>
                    <li>
                        <Link 
                            to="/signin" 
                            className="text-gray-300 hover:text-blue-400 transition duration-300 flex items-center p-2 rounded-lg hover:bg-gray-700">
                            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                            {!isCollapsed && 'Sign In'}
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/signup" 
                            className="text-gray-300 hover:text-blue-400 transition duration-300 flex items-center p-2 rounded-lg hover:bg-gray-700">
                            <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                            {!isCollapsed && 'Sign Up'}
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Modal for Ask Anything */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Ask Anything"
                className="fixed inset-0 flex items-center justify-center z-50"
                overlayClassName="fixed inset-0 bg-black bg-opacity-70"
            >
                <div className="bg-black text-white rounded-lg p-6 w-96 shadow-xl transition-transform transform scale-100 animate-fadeIn">
                    <h2 className="text-xl font-bold mb-4 text-blue-600">Ask Anything</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={askAnything}
                            onChange={handleAskAnythingChange}
                            placeholder="Type your question..."
                            className="mb-4 w-full p-3 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 hover:bg-gray-700"
                            required
                        />
                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={closeModal}
                                className="mr-2 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-500 transition duration-300 shadow-md"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 shadow-md"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>

            {/* Expand Button */}
            {isCollapsed && (
                <button onClick={toggleNavbar} className="absolute bottom-4 left-4 p-2 text-white hover:bg-gray-700 rounded-full">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            )}
        </div>
    );
};

export default Navbar;
