'use client'
import { StarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Movie } from '@/types/movie';
import { useAuth } from '@/hooks/useAuth';


const MovieCard = ({ id, director, title, subscriptionRequired, imageLink, audioLink, rating }: Movie) => {
    const { isLoggedIn, subscriptionStatus } = useAuth()
    const showPremiumBadge = !isLoggedIn || (subscriptionStatus === 'Basic' && subscriptionRequired)
    return (
        <div className='w-full pt-2.5 relative'>
            {(subscriptionRequired && subscriptionStatus == 'Basic') && (
                <div className='absolute top-0 z-50 left-1/2 -translate-x-1/2 bg-opacity-80 bg-[#5b1994] transition hover:bg-opacity-100 text-white text-[10px] font-bold px-2 py-1 rounded-full'>
                    Premium
                </div>
            )}
            <Link href={`/movie/${id}`} className='text-[#000]'>
                <div className='mb-1 rounded-xl relative aspect-[2/3] w-full overflow-hidden'>
                    <Image src={imageLink} fill alt={title} className='rounded-xl object-cover' />
                </div>
                <audio src={`https://advanced-internship-api-production.up.railway.app/${audioLink}`} />
                <div className='flex flex-col w-full mt-2'>
                    <span className='text-[14px] font-[700] mb-1'>{title}</span>
                    <span className='font-[300] text-[12px] mb-1 text-[rgba(64,70,84,.7)]'>{director}</span>
                    <div className='flex items-center text-[12px] space-x-1 font-[300] text-[rgba(64,70,84,.7)]'>
                        <StarIcon className='w-3' />
                        <span>{rating}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default MovieCard;