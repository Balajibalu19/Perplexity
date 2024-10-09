import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Sample data for articles (you can import this from a separate file or API)
const articleData = {
    1: {
        title: "Quantum Computer Doom Challenge",
        content: `
            ## Overview
            Quantum computing holds the potential to revolutionize technology, but it also comes with significant risks. 
            As we stand on the brink of this technological leap, it is crucial to address the challenges and ethical concerns it presents.
            
            ### Potential Risks
            1. **Security Threats**: Quantum computers can break current encryption methods.
            2. **Job Displacement**: Automation may lead to job losses across various sectors.
            3. **Ethical Concerns**: Misuse of technology could lead to unforeseen consequences.
        `,
        imageUrl: "https://img.freepik.com/free-photo/concept-person-suffering-from-cybersickness-technology-addiction_23-2151552546.jpg?t=st=1728492243~exp=1728495843~hmac=cb6a6d75a49f56ce5b9fd63313760dfd8e8fbf6090d03e9a74b7ab298ecb05e6&w=1380",
        relatedArticles: [
            { id: 2, title: "The Rise of Quantum Computing" },
            { id: 3, title: "How Quantum Computers Work" },
        ],
    },
    2: {
        title: "The Rise of Quantum Computing",
        content: "### Introduction to Quantum Computing...\nThe field of quantum computing is rapidly evolving...",
        imageUrl: "https://img.freepik.com/premium-photo/digital-art-selected_1287512-45744.jpg?w=1380",
        relatedArticles: [
            { id: 1, title: "Quantum Computer Doom Challenge" },
            { id: 3, title: "How Quantum Computers Work" },
        ],
    },
    3: {
        title: "How Quantum Computers Work",
        content: "### The Mechanics Behind Quantum Computing...\nUnderstanding qubits and quantum gates...",
        imageUrl: "https://img.freepik.com/free-photo/engineer-with-eeg-headset-inserting-cartridge-into-pc_482257-90916.jpg?t=st=1728492370~exp=1728495970~hmac=bb581e44e9e9d41ea4d1cd0ca5c67d438a3b521ac14f96a835017f5c363dddd5&w=1060",
        relatedArticles: [
            { id: 1, title: "Quantum Computer Doom Challenge" },
            { id: 2, title: "The Rise of Quantum Computing" },
        ],
    },
};

const ArticleDetail = () => {
    const { id } = useParams();
    const article = articleData[id];

    if (!article) {
        return <div className="p-4 text-white">Article not found!</div>;
    }

    return (
        <div className="p-4 bg-black min-h-screen">
            <h1 className="font-bold text-3xl mb-4 text-white">{article.title}</h1>
            <img src={article.imageUrl} alt={article.title} className="w-full h-60 object-cover rounded mb-4" />
            <div className="mt-4 prose max-w-none text-white">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
            <div className="mt-4 border-t pt-4">
                <input 
                    type="text" 
                    placeholder="Ask follow-up" 
                    className="border p-2 w-full bg-gray-800 text-white" 
                />
            </div>

            <h2 className="text-2xl mt-6 text-white">Related Articles</h2>
            <ul className="list-disc ml-6 mt-2 text-white">
                {article.relatedArticles.map((related) => (
                    <li key={related.id}>
                        <Link to={`/article/${related.id}`} className="text-blue-400 hover:underline">
                            {related.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticleDetail;
