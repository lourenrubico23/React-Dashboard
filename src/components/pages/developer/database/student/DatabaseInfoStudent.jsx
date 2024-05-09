import React from 'react'
import { LiaEnvelope, LiaKeySolid } from 'react-icons/lia'
import StudentTable from './StudentTable'
import { FaTimes } from 'react-icons/fa'
import { StoreContext } from '../../../../../store/StoreContext'
import { setIsShow } from '../../../../../store/StoreAction'

const DatabaseInfoStudent = ({showInfo, studentInfo, setShowInfo}) => {
    const {store, dispatch} = React.useContext(StoreContext)
    const handleClose = () => dispatch(setIsShow(false))

  return (
    <div className={`information absolute bg-primary z-50 transition-all border-l border-line min-h-[calc(100vh-65px)] overflow-hidden w-1/4 ${store.isShow ? "right-0" : "-right-1/4"}`}>
                    <button className='absolute top-0 right-0 size-10 grid place-content-center bg-secondary text-content' onClick={handleClose}><FaTimes/></button>
                    <div className='p-10'>
                        <div className="text-center mb-8">
                            <img src="https://via.placeholder.com/100x100" alt="" className=' size-[100px] mx-auto object-cover mb-4 rounded-full'/>

                            <h3 className='mb-1'>{studentInfo.student_name}</h3>
                            <small className='opacity-60'>{studentInfo.student_class}</small>
                            <ul className='flex gap-5 mt-5 justify-center '>
                                <li><button className='tooltip text-2xl' data-tooltip="Account"><LiaKeySolid/></button></li>
                                <li><button className='tooltip text-2xl' data-tooltip="Email"><LiaEnvelope/></button></li>
                            </ul>
                        </div>

                        <h4 className='mb-3'>About</h4>
                        <p  className='text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta nihil neque ipsum rerum ullam deleniti.</p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="info-box">
                                <h4>Age</h4>
                                <p className='text-xs'>{studentInfo.student_age}</p>
                            </div>
                            <div className="info-box">
                                <h4>Gender</h4>
                                <p className='text-xs'>{studentInfo.student_gender}</p>
                            </div>
                            <div className="info-box">
                                <h4>Birthday</h4>
                                <p className='text-xs'>Feb. 23, 2016</p>
                            </div>
                            <div className="info-box">
                                <h4>Address</h4>
                                <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                            </div>
                        </div>

                    </div>
                </div>
  )
}

export default DatabaseInfoStudent
