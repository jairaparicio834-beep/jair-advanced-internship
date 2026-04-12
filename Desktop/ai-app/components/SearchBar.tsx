'use client'
import { ClockIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchCardSkeleton from './skeletons/SearchCardSkeleton';
import Link from 'next/link';

interface SearchMovies {
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

const SearchBar = () => {
    const [input, setInput] = useState('')
    const [movies, setMovies] = useState<SearchMovies[]>([])
    const [loading, setLoading] = useState(true)
    const [debouncedQuery, setDebouncedQuery] = useState('')
    async function fetchMovies() {
        if (!debouncedQuery) return
        const { data } = await axios.get(`https://advanced-internship-api-production.up.railway.app/movies?search=${debouncedQuery}`)
        const allMovies = data.data
        console.log(allMovies)
        setMovies(allMovies)
        setLoading(false)
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(input)
        }, 600)

        return () => clearTimeout(timer)
    }, [input])


    useEffect(() => {
        setLoading(true)
        fetchMovies()
    }, [debouncedQuery])
    return (
        <>
            <div className='w-full h-[80px] border-[#f1f3f4] border-b-[1px] mt-4'>
                <div className='relative space-y-[20px]'>
                    <div className='relative w-full max-w-[435px] rounded-full h-[44px] flex items-center bg-[#f1f1f3]'>
                        <MagnifyingGlassIcon className='h-5 w-5 absolute left-[12px] opacity-[.75] top-1/2 -translate-y-1/2 ' />
                        <input type="text" placeholder='Search for movies'
                            className='h-full w-full py-2 pr-4 ps-[40px] rounded-full outline-none border-none text-[13px] font-bold bg-transparent'
                            onChange={(e) => setInput(e.target.value)}
                        />

                    </div>
                    <div className={` ${input ? 'flex' : 'hidden'} flex-col z-50 rounded-[20px] w-full max-h-[440px] ml-auto absolute top-[50px] left-0 overflow-y-auto border border-[#e1e7ea] shadow-[rgba(0,0,0,.14)] max-w-[440px] bg-[#fff]`}>
                        <div className='py-3 px-6 text-[16px] font-medium sticky top-0 bg-[#fff] z-[2]'>
                            <h3 className='text-[16px] font-bold text-[#1f2328]'>Search Results</h3>
                        </div>
                        {
                            loading ? movies.map(movie => (
                                <SearchCardSkeleton key={movie.id} />
                            )) :
                                movies.length > 0 ?
                                    movies.map(movie => (
                                        <MovieSearchCard key={movie.id} {...movie} />
                                    )) : <div className='p-6 text-center font-medium text-[#1f2328]'>
                                        <h3>No results.</h3>
                                        <span className='opacity-[.7]'>Please try again.</span>


                                    </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchBar;

interface MovieSearchCardProps {
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
function MovieSearchCard({ imageLink, id, title, director }: MovieSearchCardProps) {
    return (
        <Link href={`/movie/${id}`} className='flex items-center p-6 space-x-6 h-[120px] text-[#000] border border-[#e1e7ea] hover:bg-[#f1f3f4] transition' >
            <img src={imageLink} width={59} height={88} alt='Image' className='w-auto h-[80px] min-h-[88px] rounded-[4px]' />
            <div className='flex flex-col space-y-1'>
                <span className='text-[16px] font-medium'>{title}</span>
                <span className='text-[14px] font-extralight text-[#6b757b]'>{director}</span>
            </div>
        </Link>
    )
}