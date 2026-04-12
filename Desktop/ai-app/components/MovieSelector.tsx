'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import MovieCard from './MovieCard';
import MovieCardSkeleton from './skeletons/MovieCardSkeleton';
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
interface Movie {
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
const MovieSelector = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState(true)
    const [sliderRef] = useKeenSlider({ slides: { perView: 6, spacing: 10 }, loop: true })
    const fetchSelectedMovies = async () => {
        try {
            const { data } = await axios.get('https://advanced-internship-api-production.up.railway.app/selectedMovies');
            const movies = data.data
            setMovies(movies)
            setLoading(false)
        }
        catch (e) {
            console.error(e)
        }
    }
    useEffect(() => {
        setLoading(true)
        fetchSelectedMovies()
    }, [])
    return (
        <>


            <div className='pt-[40px] pb-[80px] flex flex-col'>
                <h2 className='font-[700] text-[22px]'>Selected just for you</h2>
                <span className='text-[14px] mb-4 mt-2 text-[rgba(64,70,84,.7)]'>We think you’ll like these.</span>
                <div className='flex max-w-full w-full'>
                    <div className='overflow-hidden w-full'>
                        {
                            loading ?
                                <div className='flex w-full -ml-[19px]'>
                                    {new Array(6).fill(0).map((_, i) => <MovieCardSkeleton key={i} />)}
                                </div> :
                                <div ref={sliderRef} className='keen-slider'>
                                    {movies.map((movie) => (
                                        <div key={movie.id} className='keen-slider__slide'>
                                            <MovieCard {...movie} />
                                        </div>
                                    ))}
                                </div>
                        }

                    </div>
                </div>
            </div >


        </>
    );
}

export default MovieSelector;
