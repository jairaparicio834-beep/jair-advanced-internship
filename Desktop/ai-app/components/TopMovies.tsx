'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCarousel from './MovieCarousel';
import { Movie } from '@/types/movie'

const TopMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        axios.get('https://advanced-internship-api-production.up.railway.app/topMovies')
            .then(({ data }) => { setMovies(data.data); setLoading(false) })
            .catch(console.error)
    }, [])

    return (
        <div className='pt-[40px] mt-1'>
            <h2 className='font-bold text-[22px]'>Top Movies</h2>
            <span className='text-[14px] mt-2 text-[rgba(64,70,84,.7)]'>Enjoy our highest rated films</span>
            <MovieCarousel movies={movies} loading={loading} />
        </div>
    );
}

export default TopMovies;