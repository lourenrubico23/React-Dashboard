import React from 'react'
import Navigation from '../../../../partials/Navigation'
import Header from '../../../../partials/header/Header'
import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { LiaEdit, LiaEnvelope, LiaHistorySolid, LiaKeySolid, LiaTrashAltSolid } from 'react-icons/lia'
import { PiArchive } from 'react-icons/pi'
import ModalAddStudent from './ModalAddStudent'
import StudentTable from './StudentTable'
import DatabaseInformation from '../DatabaseInformation'
import ModalError from '../../../../partials/modals/ModalError'
import ModalValidate from '../../../../partials/modals/ModalValidate'
import ModalConfirm from '../../../../partials/modals/ModalConfirm'
import ModalDelete from '../../../../partials/modals/ModalDelete'
import SpinnerWindow from '../../../../partials/spinners/SpinnerWindow'
import useQueryData from '../../../../custom-hook/useQueryData'
import Toast from '../../../../partials/Toast'

const Students = () => {
    const [showInfo, setShowInfo] = React.useState(false);
    const [isAdd, setIsAdd] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [itemEdit, setItemEdit ] = React.useState(null);

    const {
        isLoading,
        isFetching,
        error,
        data: student,
      } = useQueryData(
        "/v1/student", // endpoint
        "get", // method
        "student" // key
      );


      const handleAdd = () => {
        setIsAdd(true)
        setItemEdit(null)//for reset of modal from update to add
      }

    

  return (
    <>
    <section className='flex overflow-x-hidden'>
        <Navigation/>
        <main className='w-[calc(100%-250px)]'>
            <Header/>
            <div className='flex relative'>
                <div className={`main-wrapper transition-all px-4 py-3 ${showInfo ? "w-3/4" : "w-full"}`}>
                    <div className='flex justify-between items-center'>
                        <h1>Database</h1>
                        <form action="" className='relative'>
                            <input type="text" placeholder='Search Student' className='p-1 px-3 pl-10 outline-none bg-secondary border border-stone-800 rounded-md text-white placeholder:opacity-20 placeholder:text-bg-stone-400'/>
                            <CiSearch className='absolute top-1 left-2 text-white opacity-20 text-2xl'/>
                        </form>
                    </div>    
                
                    <div className='tab flex justify-between items-center mt-8 border-b border-line mb-8'>
                        <ul className='flex space-x-10 '>
                            <li className='tab-link active'><Link to="/database/student">Student</Link></li>
                            <li className='tab-link'><Link to="/database/teacher">Teacher</Link></li>
                            <li className='tab-link'><Link to="/database/staff">Staff</Link></li>
                        </ul>
                        <button className='btn btn--accent ' onClick={handleAdd}><FiPlus/>New</button>
                    </div>

                    <StudentTable setShowInfo={setShowInfo} showInfo={showInfo} isLoading={isLoading} student={student} setItemEdit={setItemEdit} setIsAdd={setIsAdd} setIsSuccess={setIsSuccess} setMessage={setMessage}/>
                </div>
                
                <DatabaseInformation showInfo={showInfo}/>
            </div>
        </main>

    </section>
    {isAdd && <ModalAddStudent setIsAdd={setIsAdd} setIsSuccess={setIsSuccess} setMessage={setMessage} itemEdit={itemEdit}/>}

    {isSuccess && <Toast setIsSuccess={setIsSuccess} message={message}/>}

    {/* <ModalError position="center"/> */}
    {/* <ModalValidate position="center"/> */}
   
    {/* <ModalDelete position="center"/> */}
    {/* <SpinnerWindow/> */}
    </>
  )
}

export default Students
