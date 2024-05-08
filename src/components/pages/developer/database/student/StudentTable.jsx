import React from 'react'
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from 'react-icons/lia'
import { PiArchive } from 'react-icons/pi'
import TableLoader from '../../../../partials/TableLoader'
import NoData from '../../../../partials/NoData'
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching'
import ModalConfirm from '../../../../partials/modals/ModalConfirm'
import ModalDelete from '../../../../partials/modals/ModalDelete'

const StudentTable = ({setShowInfo, showInfo, student, isLoading, setItemEdit, setIsAdd, setIsSuccess, setMessage}) => {
    const handleShowInfo = () =>  setShowInfo(!showInfo) //to show table
    const [isActive, setIsActive] = React.useState(false) //for archive
    const [isArchiving, setIsArchiving] = React.useState(0)
    const [isDelete, setIsDelete] = React.useState(false)
    const [id, setId] = React.useState('')

    let counter = 1;

    const handleEdit = (item) => {
        setIsAdd(true)
        setItemEdit(item)  
    }

    const handleActive = (item) => { // for Archive button
        setIsActive(true)
        setId(item.student_aid)
        setIsArchiving(0)
    }

    const handleRestore = (item) => { //for Restore button
        setIsActive(true)
        setId(item.student_aid)
        setIsArchiving(1)
    
    }
    const handleDelete = (item) => { //for Delete button
        setIsDelete(true)
        setId(item.student_aid)
       
    }
    

  return (
    <>
    <div className="table-wrapper relative">
        {/* <SpinnerFetching/> */}
                        <table>
                            <thead>
                                <tr>
                                    <th className='w-[20px]'>#</th>
                                    <th className='w-[150px]'>Name</th>
                                    <th className='w-[80px]'>Class</th>
                                    <th className='w-[80px]'>Age</th>
                                    <th className='w-[80px]'>Gender</th>
                                    <th className='w-[80px]'>Email</th>
                                    <th className='w-[100px]'>Action</th>
                                </tr>
                            </thead>
                            <tbody >
                            {isLoading && ( 
                                <tr >
                                    <td colSpan={9}>
                                        <TableLoader count="20" cols="4"/>
                                    </td>
                                </tr>)
                                }

                                {<student className="data length"></student> === 0 && (
                                    <tr>
                                        <td colSpan={9}>
                                            <NoData/>
                                        </td>
                                    </tr>
                                )}
                            
                                {student?.data.map((item, key) => (
                                        <tr onDoubleClick={handleShowInfo} className='hover:bg-accent/90' key={key}>
                                            <td>{counter++}</td>
                                            <td>{item.student_name}</td>
                                            <td>{item.student_class}</td>
                                            <td>{item.student_age}</td>
                                            <td>{item.student_gender}</td>
                                            <td>{item.student_email}</td>
                                            <td className='table-action'>
                                            <ul>
                                                {item.student_is_active ? (
                                                    <>
                                                        <li><button className="tooltip" data-tooltip="Edit" onClick={() => handleEdit(item)}><LiaEdit/></button></li>
                                                        <li><button className="tooltip" data-tooltip="Archive" onClick={() => handleActive(item)}><PiArchive /></button></li>
                                                    </>
                                                ) : (
                                                    <>
                                                    <li><button className="tooltip" data-tooltip="Restore" onClick={() => handleRestore(item)}><LiaHistorySolid/></button></li>
                                                    <li><button className="tooltip" data-tooltip="Delete" onClick={() => handleDelete(item)}><LiaTrashAltSolid/></button></li></>
                                                )}
                                            </ul>
                                            </td>
                                        </tr>
                                    ))              
                                }
                            </tbody>
                        </table>
                    </div>


         {isActive && <ModalConfirm position="center" setIsActive={setIsActive} queryKey="student" endpoint={`/v1/student/active/${id}`} isArchiving={isArchiving} setIsSuccess={setIsSuccess} setMessage={setMessage}/>}

        {isDelete && <ModalDelete position="center" setIsDelete={setIsDelete} queryKey="student" endpoint={`/v1/student/${id}`} setIsSuccess={setIsSuccess} setMessage={setMessage}/>}
</>
  )
}

export default StudentTable
