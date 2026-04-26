'use client'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import SearchCardSkeleton from './skeletons/SearchCardSkeleton';
import Link from 'next/link';
import { Movie } from '@/types/movie';
import HamburderButton from './HamburderButton';

const SearchBar = () => {
    const [input, setInput] = useState('')
    const [movies, setMovies] = useState<Movie[]>([])
    const [showDropdown, setShowDropdown] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!input) {
            setShowDropdown(false)
            setMovies([])
            return
        }

        const timer = setTimeout(async () => {
            setLoading(true)
            setShowDropdown(true)
            try {
                const { data } = await axios.get(`https://advanced-internship-api-production.up.railway.app/movies?search=${input}`)
                setMovies(data.data)
            } catch (e) {
                console.error(e)
            }
            setLoading(false)
        }, 300)

        return () => clearTimeout(timer)
    }, [input])
    return (
        <>
            <div className='w-full h-[80px] border-[#f1f3f4] border-b-[1px]'>
                <div className='relative gap-5 w-full h-full max-w-[1400px] flex items-center justify-between px-8 mx-auto'>
                    <div className='relative w-full max-w-[435px] rounded-full h-[44px] flex items-center bg-[#f1f1f3]'>
                        <MagnifyingGlassIcon className='h-5 w-5 absolute left-[12px] opacity-[.75] top-1/2 -translate-y-1/2 ' />
                        <input type="text" placeholder='Search for movies'
                            value={input}
                            className='h-full w-full py-2 md:pr-4 ps-[40px] rounded-full outline-none border-none text-[13px] font-bold bg-transparent'
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                    <HamburderButton />
                    {showDropdown &&
                        <div className={`flex flex-col z-50 rounded-[20px] w-full max-h-[440px] ml-auto absolute top-[70px] translate-x[-50%] overflow-y-auto border border-[#e1e7ea] shadow-[rgba(0,0,0,.14)] max-w-[440px] bg-[#fff]`}>
                            <div className='py-3 px-6 text-[16px] font-medium sticky top-0 bg-[#fff] z-[2]'>
                                <h3 className='text-[16px] font-bold text-[#1f2328]'>Search Results</h3>
                            </div>

                            {
                                loading ?
                                    <>
                                        <SearchCardSkeleton />
                                        <SearchCardSkeleton />
                                        <SearchCardSkeleton />
                                        <SearchCardSkeleton />
                                        <SearchCardSkeleton />
                                        <SearchCardSkeleton />
                                    </>
                                    :
                                    (movies.length > 0) ?
                                        movies.map(movie => (
                                            <MovieSearchCard key={movie.id} {...movie} onClose={() => {
                                                setInput('')
                                                setShowDropdown(false)
                                            }} />
                                        )) : <div className='p-6 text-center font-medium text-[#1f2328]'>
                                            <h3 className='font-bold'>No results.</h3>
                                            <span className='opacity-[.7]'>Please try again.</span>
                                        </div>
                            }

                        </div>
                    }
                </div>
            </div >
        </>
    );
}

export default SearchBar;



function MovieSearchCard({ imageLink, id, title, director, audioLink, onClose }: Movie & { onClose: () => void }) {
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
    return (
        <>
            <audio
                ref={audioRef}
                src={`https://advanced-internship-api-production.up.railway.app/${audioLink}`}
                onLoadedMetadata={handleLoadedMetadata}
                onError={(e) => console.log('Audio error:', e)}
                preload="metadata"
            />
            <Link href={`/movie/${id}`} onClick={onClose} className='flex items-center p-6 space-x-6 h-[120px] text-[#000] border border-[#e1e7ea] hover:bg-[#f1f3f4] transition' >
                <img src={imageLink} width={59} height={88} alt='Image' className='w-auto h-[80px] min-h-[88px] rounded-[4px]' />
                <div className='flex flex-col space-y-1'>
                    <span className='text-[16px] font-medium'>{title}</span>
                    <span className='text-[14px] font-extralight text-[#6b757b]'>{director}</span>
                    <span className='text-[14px] font-extralight text-[#6b757b]'>{duration || '...'}</span>
                </div>
            </Link>
        </>
    )
}