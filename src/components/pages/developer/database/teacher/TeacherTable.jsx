import React from 'react'
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from 'react-icons/lia'
import { PiArchive } from 'react-icons/pi'
import NoData from '../../../../partials/NoData'
import TableLoader from '../../../../partials/TableLoader'

const TeacherTable = ({setShowInfo, showInfo,teacher,isLoading}) => {
    const handleShowInfo = () =>  setShowInfo(!showInfo)
    let counter = 1;

  return (
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
                            <tbody>
                            {isLoading && ( 
                                <tr>
                                    <td colSpan={9}>
                                        <TableLoader count="20" cols="4"/>
                                    </td>
                                </tr>)
                                }

                                {<teacher className="data length"></teacher> === 0 && (
                                    <tr>
                                        <td colSpan={9}>
                                            <NoData/>
                                        </td>
                                    </tr>
                                )}
                            
                                {teacher?.data.map((item, key) => (
                                        <tr onDoubleClick={handleShowInfo} className='hover:bg-accent/90'>
                                            <td>{counter++}</td>
                                            <td>{item.teacher_name}</td>
                                            <td>{item.teacher_class}</td>
                                            <td>{item.teacher_age}</td>
                                            <td>{item.teacher_gender}</td>
                                            <td>{item.teacher_email}</td>
                                            <td className='table-action'>
                                            <ul>
                                                {item.teacher_is_active ? (
                                                    <>
                                                        <li><button className="tooltip" data-tooltip="Edit"><LiaEdit/></button></li>
                                                        <li><button className="tooltip" data-tooltip="Archive"><PiArchive /></button></li>
                                                    </>
                                                ) : (
                                                    <>
                                                    <li><button className="tooltip" data-tooltip="Restore"><LiaHistorySolid/></button></li>
                                                    <li><button className="tooltip" data-tooltip="Delete"><LiaTrashAltSolid/></button></li></>
                                                )}
                                            </ul>
                                            </td>
                                        </tr>
                                    ))              
                                }
                            </tbody>
                        </table>
                    </div>
  )
}

export default TeacherTable
