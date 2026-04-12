import React from 'react';
import SearchBar from './SearchBar';
import MovieSelector from './MovieSelector';
import TopMovies from './TopMovies';



const PageContent = () => {


    return (
        <>
            <div className='max-2xl flex-grow h-full w-full'>
                <SearchBar />
                <div>
                    <h1 className='text-[33px] font-bold'>AI Movie Summariser</h1>
                    <span className='text-[14px] mt-2 text-[rgba(64,70,84,.7)]'>Enjoy high-quality summaries of your favourite movies instantly without breaking a sweat.
                    </span>
                </div>
                <MovieSelector />
                <TopMovies />
            </div>
        </>
    );
}

export default PageContent;
