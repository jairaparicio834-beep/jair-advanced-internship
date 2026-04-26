
import React from 'react';
import MovieDetails from './MovieDetails';
import axios from 'axios';


const fetchMovie = async (id: string) => {
    const { data } = await axios.get(`https://advanced-internship-api-production.up.railway.app/movies/${id}`)
    return data.data
}
interface PageProps {
    params: {
        id: string
    }
}
const Page = async ({ params }: PageProps) => {
    const { id } = params
    const movie = await fetchMovie(id)
    console.log(movie)

    return (
        <MovieDetails movie={movie} />

    );
}

export default Page;
