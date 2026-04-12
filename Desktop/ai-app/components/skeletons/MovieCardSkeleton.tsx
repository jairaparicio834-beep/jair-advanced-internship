import React from 'react';

const MovieCardSkeleton = () => {
    return (

        <div className='h-min pt-2.5 pl-5 min-h-0 w-full flex-shrink-0 basis-[calc(100%/6)] flex-grow-0'>
            {/* Image */}
            <div className='mb-1 rounded-xl relative aspect-[2/3] w-[170px] h-[251px] bg-gray-200 animate-pulse' />
            {/* Text */}
            <div className='flex flex-col w-full mt-2.5 space-y-2'>
                <div className='bg-gray-200 animate-pulse rounded h-[14px] w-3/4' />
                <div className='bg-gray-200 animate-pulse rounded h-[12px] w-1/2' />
                <div className='flex space-x-2'>
                    <div className='bg-gray-200 animate-pulse rounded h-[12px] w-8' />
                </div>
            </div>
        </div>
    );
}

export default MovieCardSkeleton;
