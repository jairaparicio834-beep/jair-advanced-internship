'use client'
import { CalendarIcon, ClockIcon, MicrophoneIcon, StarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { BookmarkIcon } from '@heroicons/react/24/solid'
import { BookmarkIcon as OutLineBookmark } from '@heroicons/react/24/outline'
import { BoltIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { addToFavorites, removeFromFavorites } from '@/store/slices/userSlice';
import { MovieDetailSkeleton } from '@/components/skeletons/Skeletons';
import { useAuth } from '@/hooks/useAuth';
import { useRef, useState } from 'react';
import { openModal } from '@/store/slices/modalSlice';

interface MovieDetailsProps {
    movie: {
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
}

const MovieDetails = ({ movie }: MovieDetailsProps) => {
    const router = useRouter()
    const { isSubscribed, favoriteMovies, isLoading, requireLogin } = useAuth()
    const dispatch = useDispatch()
    const audioRef = useRef<HTMLAudioElement>(null)
    const [duration, setDuration] = useState<string>('N/A')

    function handleLoadedMetadata() {
        const audio = audioRef.current
        if (audio) {
            const minutes = Math.floor(audio.duration / 60)
            const seconds = Math.floor(audio.duration % 60)
            setDuration(`${minutes}:${seconds.toString().padStart(2, '0')}`)
        }
    }
    function sendUserToNewRoute() {
        if (!isSubscribed && movie.subscriptionRequired) {
            router.push('/plans')
        } else {
            router.push(`/player/${movie.id}`)
        }
    }

    function updateFavoritesList() {
        if (!favoriteMovies.includes(movie)) {
            dispatch(addToFavorites(movie))
        } else {
            dispatch(removeFromFavorites(movie))
        }
    }

    if (isLoading) return <MovieDetailSkeleton />
    return (
        <>
            <audio
                ref={audioRef}
                src={`https://advanced-internship-api-production.up.railway.app/${movie?.audioLink}`}
                onLoadedMetadata={handleLoadedMetadata}
                onError={(e) => console.log('Audio error:', e)}
                preload="metadata"
            />
            <div className='flex flex-col-reverse xl:flex-row mx-auto max-w-[1400px] items-start py-4'>
                <div className='flex flex-col w-full'>
                    <h1 className='text-[36px] mb-1 font-semibold'>{movie?.title}</h1>
                    <span className='mb-2 font-normal text-[rgba(64,70,84,.7)]'>{movie?.director}</span>
                    <span className='text-[18px] mb-4 font-light'></span>
                    <div className='py-4 mb-6 border-b border-t border-[#e1e7ea]'>
                        <div className='flex flex-wrap max-w-[400px] gap-y-3'>
                            <div className='flex items-center w-1/2 font-normal text-[14px] gap-1.5'>
                                <StarIcon className='w-4 h-4' />
                                <span>{movie?.rating}/10</span>
                            </div>
                            {duration && <div className='flex items-center w-1/2 font-normal text-[14px] gap-1.5'>
                                <ClockIcon className='w-4 h-4' />
                                <span>{duration}</span>
                            </div>}
                            <div className='flex items-center w-1/2 font-normal text-[14px] gap-1.5'>
                                <MicrophoneIcon className='w-4 h-4' />
                                <span>{movie?.type}</span>
                            </div>
                            <div className='flex items-center w-1/2 font-normal text-[14px] gap-1.5'>
                                <CalendarIcon className='w-4 h-4' />
                                <span>{movie?.releaseYear}</span>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => { (requireLogin()) ? sendUserToNewRoute() : dispatch(openModal()) }}
                        className='flex items-center justify-center cursor-pointer gap-2 w-[280px] h-[48px] bg-[#320580] text-[#fff] text-[16px] rounded border-none mb-6 transition '>
                        Summarise
                        <BoltIcon className='w-4 font-extrabold' />
                    </button>
                    <div className='text-[#0365f2] flex items-center cursor-pointer gap-2 font-medium mb-10 text-[18px] transition'>
                        {(favoriteMovies.includes(movie)) ? <BookmarkIcon className='w-6 h-fit' /> : <OutLineBookmark className='w-6 h-fit' />}
                        <span
                            onClick={() => requireLogin() && updateFavoritesList()}
                        >{(favoriteMovies.includes(movie)) ? 'Remove from Favorites' : 'Add to Favorites'}</span>
                    </div>
                    <h2 className='mb-4 font-semibold text-[18px]'>What's it about?</h2>
                    <div className='flex flex-wrap gap-4 mb-4'>
                        {
                            movie?.tags?.map((tag: string) => (
                                <div className='flex items-center px-4 h-[48px] font-medium rounded bg-[#f1f6f4]'>
                                    {tag}
                                </div>
                            ))

                        }

                    </div>
                    <p>{movie.movieDescription}</p>
                </div>
                <div className='overflow-hidden mb-5 mx-auto w-[200px] min-w-[200px] xl:ml-8 rounded-xl aspect-[2/3]'>
                    <Image className='w-full h-full' src={movie?.imageLink} width={200} height={300} alt={movie?.title} />
                </div>
            </div >
        </>
    );
}

export default MovieDetails;
