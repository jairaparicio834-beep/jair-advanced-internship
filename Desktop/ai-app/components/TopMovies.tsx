'use client'
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';
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

const TopMovies = () => {
    const [sliderRef] = useKeenSlider({ slides: { perView: 6, spacing: 10 }, loop: true })
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState<Movie[]>([])

    const fetchTopMovies = async () => {
        const { data } = await axios.get('https://advanced-internship-api-production.up.railway.app/topMovies')
        const results = data.data
        setMovies(results)
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        fetchTopMovies()
    }, [])


    return (
        <>

            <div className='pt-[40px] mt-2'>
                <h2 className='font-bold text-[22px]'>Top Movies</h2>
                <span className='text-[14px] mt-2 text-[rgba(64,70,84,.7)]'>Enjoy our highest rated films</span>
                <div className='overflow-hidden w-full mt-5'>

                    {loading ?
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

        </>
    );
}

export default TopMovies;
