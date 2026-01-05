import React from 'react';

const StatCard = ({ title, value, icon, color }) => {
    return (
        <div className={`card bg-base-100 shadow-xl border-l-4 ${color}`}>
            <div className="card-body">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="card-title text-gray-500">{title}</h2>
                        <h3 className="text-3xl font-bold">{value}</h3>
                    </div>
                    <div className={`text-4xl ${color.replace('border-', 'text-')}`}>
                        {icon}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatCard;
