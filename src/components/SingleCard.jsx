import { Card } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom';

export default function SingleCard(props) {
    // const IMGPATH = ;
    const movies = props.movies;
    // console.log(movies);
    return (
        movies.map((movie) => {

            return (

                <div className="max-w-sm">
                    <Card
                        horizontal={true}
                        imgSrc={"https://image.tmdb.org/t/p/w1280" + movie.poster_path}
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {movie.title}
                        </h5>
                        <p className=" text-gray-700 font-bold dark:text-gray-400">
                            {movie.overview.slice(0, 50) + "..."}
                        </p>
                        <Link to={`movie/${movie.id}`} className='  inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800' ><span className=' px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'  > See More</span> </Link>
                    </Card>
                </div >
            )
        })

    )
}
