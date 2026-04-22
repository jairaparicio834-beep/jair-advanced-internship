
import React from 'react';
import MovieDetails from './MovieDetails';
import axios from 'axios';


const fetchMovie = async (id: string) => {
    const { data } = await axios.get(`https://advanced-internship-api-production.up.railway.app/movies/${id}`)
    return data.data
}
fetchMovie('3264d6f6-94b5-4175-972d-bf24fc828e76')
interface PageProps {
    params: {
        id: string
    }
}
const Page = async ({ params }: PageProps) => {
    const { id } = params
    const movie = await fetchMovie(id)

    return (
        <MovieDetails movie={movie} />

    );
}

export default Page;
