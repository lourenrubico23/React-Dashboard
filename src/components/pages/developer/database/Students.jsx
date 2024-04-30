import React from 'react'
import Navigation from '../../../partials/Navigation'
import Header from '../../../partials/header/Header'
import { CiSearch } from 'react-icons/ci'

const Students = () => {
  return (
    <section className='flex'>
        <Navigation/>
        <main className='w-[calc(100%-250px)]'>
            <Header/>
            <div className='main-wrapper px-4 py-3'>
                <div className='flex justify-between items-center'>
                    <h1>Database</h1>
                    <form action="" className='relative'>
                        <input type="text" placeholder='Search Student' className='p-1 px-3 pl-10 outline-none bg-stone-300 border border-stone-800 rounded-md placeholder:text-bg-stone-400'/>
                        <CiSearch className='absolute top-1 left-2 text-gray-700 text-xl'/>
                    </form>
                </div>
                
            </div>
        </main>

    </section>
  )
}

export default Students
