
import React from 'react';

const Card = ({ name, lastName, status, score }) => {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
                <h2 className="text-xl font-bold">{name} {lastName}</h2>
                <p className="text-gray-600">Status: {status}</p>
                <div className="mt-2">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-600">Score</span>
                        <span className="font-bold">{score}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${score}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
