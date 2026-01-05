import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center min-h-[200px]">
            <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
    );
};

export const SkeletonLoader = ({ count = 1, height = 40 }) => {
    return (
        <Skeleton count={count} height={height} baseColor="#202020" highlightColor="#444" />
    );
};

export default LoadingSpinner;