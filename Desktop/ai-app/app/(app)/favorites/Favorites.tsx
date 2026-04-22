'use client'
import MovieCard from '@/components/MovieCard';
import { FavoritesSkeleton } from '@/components/skeletons/Skeletons';
import { useAuth } from '@/hooks/useAuth';
import Image from 'next/image';
import React from 'react';


const Favorites = () => {
    const { isLoggedIn, isSubscribed, favoriteMovies, isLoading, requireLogin } = useAuth()
    if (isLoading) return <FavoritesSkeleton />
    return (
        <div className='flex flex-col py-[40px] mx-auto max-w-[1400px] items-start'>
            <h1 className='text-[24px] font-bold mb-2 '>Saved Movies </h1>
            <h2 className='w-full text-[18px] font-light pb-4 mb-8 text-[rgba(64,70,84,.7)] border-b-2 border-[#f1f3f4]'>{isLoggedIn && isSubscribed ? favoriteMovies.length : 0} Movie(s)</h2>
            <div className='flex w-full justify-start flex-wrap gap-8'>
                {!isLoggedIn ?
                    <div className='flex flex-col items-center w-full m-auto max-w-[460px]'>
                        <Image src='/assets/summary.png' width={460} height={278} alt='Sign In Image' />
                        <p className='text-center mb-4 text-[24px] font-semibold'>Sign In to see your favorite movies</p>
                        <button className='text-[#fff] w-[180px] h-[56px] flex items-center justify-center text-[16px] rounded-[8px] bg-[#320580] border-none transition duration-200'
                            onClick={() => requireLogin()}
                        >Login</button>
                    </div>
                    :
                    (favoriteMovies.length > 0 && isSubscribed) ?
                        favoriteMovies.map(movie => (
                            <div className='max-w-[170px] w-full'>
                                <MovieCard {...movie} />
                            </div>
                        ))
                        :
                        <div className='max-w-fit bg-[#f1f6f4] flex flex-col items-center gap-2 p-8 rounded-xl text-center mx-auto mb-14'>
                            <h3 className='font-extrabold'>Save your favorite movies</h3>
                            <p>When you save a movie, it will appear here.</p>
                        </div>
                }
            </div>
        </div>
    );
}

export default Favorites;
