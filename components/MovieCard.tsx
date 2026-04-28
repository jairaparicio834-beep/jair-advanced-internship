'use client'
import { ClockIcon, StarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { Movie } from '@/types/movie';
import { useAuth } from '@/hooks/useAuth';


const MovieCard = ({ id, director, title, subscriptionRequired, imageLink, audioLink, rating }: Movie) => {
    const { isLoggedIn, subscriptionStatus } = useAuth()
    const showPremiumBadge = subscriptionRequired && (!isLoggedIn || subscriptionStatus === 'Basic')
    const audioRef = useRef<HTMLAudioElement>(null)
    const [duration, setDuration] = useState<string>('')
    function handleLoadedMetadata() {
        const audio = audioRef.current
        if (audio) {
            const minutes = Math.floor(audio.duration / 60)
            const seconds = Math.floor(audio.duration % 60)
            setDuration(`${minutes}:${seconds.toString().padStart(2, '0')}`)
        }
    }
    return (
        <>
            <audio
                ref={audioRef}
                src={`https://advanced-internship-api-production.up.railway.app/${audioLink}`}
                onLoadedMetadata={handleLoadedMetadata}
                onError={(e) => console.log('Audio error:', e)}
                preload="metadata"
            />
            <div className='w-full pt-2.5 relative'>
                {(showPremiumBadge) && (
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
                        <div className='flex items-center text-[12px] gap-2 font-[300] text-[rgba(64,70,84,.7)]'>
                            <div className='flex space-x-1'>
                                <StarIcon className='w-3' />
                                <span>{rating}</span>
                            </div>
                            {
                                duration &&
                                <div className='flex space-x-1'>
                                    <ClockIcon className='w-3' />
                                    <span>{duration || ''}</span>
                                </div>
                            }
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default MovieCard;