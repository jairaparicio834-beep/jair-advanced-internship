'use client'
import { RootState } from '@/store';
import { StarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

interface MovieCardProp {
    id: string;
    director: string;
    title: string;
    tagLine: string;
    imageLink: string
    audioLink: string;
    rating: string;
    releaseYear: string;
    type: string;
    subscriptionRequired: boolean;
    summary: string;
    tags: string[];
    movieDescription: string;
}
const MovieCard = ({ id, director, title, subscriptionRequired, imageLink, audioLink, rating }: MovieCardProp) => {
    const user = useSelector((state: RootState) => state.user.email)
    return (
        <div className='h-min pt-2.5 pl-5 min-h-0 flex-shrink-0 relative  flex-grow-0'>
            {!user && subscriptionRequired && (
                <div className='absolute top-0 z-50 left-1/2 -translate-x-1/2 bg-opacity-80 bg-[#5b1994] transition hover:bg-opacity-100 text-white text-[10px] font-bold px-2 py-1 rounded-full'>
                    Premium
                </div>
            )}
            <Link href={`/movie/${id}`} className='text-[#000]'>
                <div className='mb-1 h-auto rounded-xl relative aspect-[2/3]'>
                    <Image src={imageLink} width={170} height={256} alt={title} className='rounded-xl' />
                </div>
                <audio src={`https://advanced-internship-api-production.up.railway.app/${audioLink}`}></audio>
                <div className='flex flex-col w-full'>
                    <span className='text-[14px] font-[700] mb-1'>{title}</span>
                    <span className='font-[300] text-[12px] mb-1 text-[rgba(64,70,84,.7)]'>{director}</span>
                    <div className='flex space-x-2'>
                        <div className='flex items-center text-[12px] space-x-1 font-[300] text-[rgba(64,70,84,.7)]'>
                            <StarIcon className='w-3' />
                            <span>{rating}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default MovieCard;
