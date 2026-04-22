import axios from 'axios';
import React from 'react';
import MovieAudio from './MovieAudio';

const fetchMovie = async (id: string) => {
    const { data } = await axios.get(`https://advanced-internship-api-production.up.railway.app/movies/${id}`)
    return data.data
}
interface PageProps {
    params: {
        id: string
    }
}
const PlayerId = async ({ params }: PageProps) => {
    const { id } = params
    const movie = await fetchMovie(id)

    return (
        <div className='py-10 w-full relative h-[calc(100vh-160px)] overflow-y-auto'>
            <div className='flex flex-col w-full h-full max-w-[1400px] items-center justify-between px-8 mx-auto'>
                <h1 className='w-full text-[24px] pb-4 mb-8 font-bold border-b border-[#e1e7ea]'>{movie?.title}</h1>
                <p className='pb-10 whitespace-pre-line leading-[1.4]'>{movie?.summary}</p>
            </div>
            <div className='w-full h-[80px] mt-auto flex items-center justify-between text-[#fff] bg-[#042330] border-t px-10 fixed bottom-0 left-0 z-[9999]'>
                <MovieAudio movie={movie} />
            </div>
        </div>
    );
}

export default PlayerId;
