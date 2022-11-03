import { Card } from 'flowbite-react';
import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export default function SingleMovie(props) {
    const id = useParams().id
    const theMovie = props.movies.filter((movie) => {
        return movie.id == id;
    })
    console.log(theMovie);

    return (
        <>
            <div className=' h-screen   ' style={{ backgroundImage: `url( https://image.tmdb.org/t/p/w1280${theMovie[0].backdrop_path} )` }}  >
                <div className='grid h-screen place-items-center  ' >
                    <div className=''>
                        <div className="max-w-screen-2xl ">
                            <Card
                                className='backdrop-blur-sm bg-white/50'
                                horizontal={true}
                                imgSrc={"https://image.tmdb.org/t/p/w1280" + theMovie[0].poster_path}
                            >
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900  dark:text-white">
                                    {theMovie[0].title}
                                </h1>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    {theMovie[0].overview}
                                </p>
                                <hr />
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <span>Language: {theMovie[0].original_language} | Release Date: {theMovie[0].release_date} </span>
                                </p>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    <span>Adult: {theMovie[0].adult ? "+18" : "NO"} | Rating: {theMovie[0].vote_average} </span>
                                </p>

                            </Card>
                        </div>
                    </div>


                </div>
            </div>


        </>
    )
}
