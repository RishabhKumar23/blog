import React from 'react'
import Feed from './Feed'
import Jobs from './Jobs'
import Events from './Events'
import Navbar from './Navbar'

const Dashbord = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
                <Feed />
                <Events />
                <Jobs />
            </div>
        </>
    )
}

export default Dashbord