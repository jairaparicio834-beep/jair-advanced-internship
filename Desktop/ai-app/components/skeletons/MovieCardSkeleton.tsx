import React from 'react';

const MovieCardSkeleton = () => {
    return (
        <div className='w-full pt-2.5'>
            <div className='mb-1 rounded-xl aspect-[2/3] w-full bg-gray-200 animate-pulse' />
            <div className='flex flex-col mt-2 space-y-2'>
                <div className='bg-gray-200 animate-pulse rounded h-[14px] w-3/4' />
                <div className='bg-gray-200 animate-pulse rounded h-[12px] w-1/2' />
                <div className='bg-gray-200 animate-pulse rounded h-[12px] w-8' />
            </div>
        </div>
    );
}

export default MovieCardSkeleton;