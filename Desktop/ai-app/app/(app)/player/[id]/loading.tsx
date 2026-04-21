import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center w-full h-screen'>
            <div className='w-8 h-8 border-4 border-gray-200 border-t-[#320580] rounded-full animate-spin' />
        </div>
    );
}

export default Loading;
