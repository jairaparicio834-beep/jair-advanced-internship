'use client'
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import MovieCard from './MovieCard';
import MovieCardSkeleton from './skeletons/MovieCardSkeleton';
import { Movie } from '@/types/movie';

interface MovieCarouselProps {
    movies: Movie[]
    loading: boolean
}

const MovieCarousel = ({ movies, loading }: MovieCarouselProps) => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        slides: {
            perView: 2,
            spacing: 16,
        },
        breakpoints: {
            '(min-width: 640px)': { slides: { perView: 3, spacing: 16 } },
            '(min-width: 768px)': { slides: { perView: 4, spacing: 16 } },
            '(min-width: 1024px)': { slides: { perView: 5, spacing: 16 } },
            '(min-width: 1280px)': { slides: { perView: 6, spacing: 16 } },
        },
    })

    if (loading) return (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-5'>
            {new Array(6).fill(0).map((_, i) => (
                <MovieCardSkeleton key={i} />
            ))}
        </div>
    )

    return (
        <div ref={sliderRef} className='keen-slider mt-5'>
            {[...movies, ...movies].map((movie, index) => (
                <div key={`${movie.id}-${index}`} className='keen-slider__slide outline-none'>
                    <MovieCard {...movie} />
                </div>
            ))}
        </div>
    )
}

export default MovieCarousel