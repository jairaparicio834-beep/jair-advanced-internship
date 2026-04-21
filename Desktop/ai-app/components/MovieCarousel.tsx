'use client'
import React from 'react';
import MovieCard from './MovieCard';
import MovieCardSkeleton from './skeletons/MovieCardSkeleton';
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import { Movie } from '@/types/movie'
import 'swiper/css'
import 'swiper/css/free-mode'

interface MovieCarouselProps {
    movies: Movie[]
    loading: boolean
}

const MovieCarousel = ({ movies, loading }: MovieCarouselProps) => {
    return (
        <div className='flex w-full max-w-full'>
            <div className=' w-full overflow-hidden mt-5'>
                {loading ? (
                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3'>
                        {new Array(6).fill(0).map((_, i) => (
                            <MovieCardSkeleton key={i} />
                        ))}
                    </div>
                ) : (
                    <Swiper
                        modules={[FreeMode]}
                        freeMode={true}
                        loop={true}
                        observer={true}
                        observeParents={true}
                        spaceBetween={0}
                        slidesPerView='auto'
                    >
                        {movies.map((movie) => (
                            <SwiperSlide key={movie.id} >
                                <MovieCard {...movie} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </div>
    )
}

export default MovieCarousel