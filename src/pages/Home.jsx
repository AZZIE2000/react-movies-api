import { Card } from 'flowbite-react'
import React from 'react'
import NavBar from '../components/NavBar'
import SingleCard from '../components/SingleCard'




export default function Home(props) {



    return (
        <>
            <div className='container my-12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-20'>

                <SingleCard movies={props.movies} />

            </div>
        </>
    )
}
