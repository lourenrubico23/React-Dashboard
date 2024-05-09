import React from 'react'
import ModalWrapper from '../../../../partials/modals/ModalWrapper'
import { LiaTimesSolid } from 'react-icons/lia'
import SpinnerButton from '../../../../partials/spinners/SpinnerButton'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { InputText } from '../../../../helpers/Forminputs'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { queryData } from '../../../../helpers/queryData'

const ModalAddStaff = ({setIsAdd, setMessage, setIsSuccess, itemEdit}) => {
    const handleClose = () =>  setIsAdd(false);
    

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (values) =>
        queryData(
            itemEdit ? `/v1/staff/${itemEdit.staff_aid}` : `/v1/staff`,
            itemEdit ? "put" : "post",
            values
        ),
        // ;

        onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["staff"] });
        if (data.success) {
            setIsAdd(false);
            setIsSuccess(true);
            setMessage(`Successfuly updated.`);
        } else {
            /* setIsError(true); */
        }
      
        },
    });

    const initVal = {
        staff_name: itemEdit ? itemEdit.staff_name : "",
        staff_class: itemEdit ? itemEdit.staff_class : "",
        staff_age: itemEdit ? itemEdit.staff_age : "",
        staff_email: itemEdit ? itemEdit.staff_email : "",
        staff_gender: itemEdit ? itemEdit.staff_gender : "",
    }

    const yupSchema = Yup.object({
        staff_name: Yup.string().required("Required*"),
        staff_class: Yup.string().required("Required*"),
        staff_age: Yup.number().required("Required*"),
        staff_gender: Yup.string().required("Required*"),
        staff_email: Yup.string().required("Required*"),
    })

    


  return (
    <ModalWrapper>
        <div className="main-modal w-[300px] bg-secondary text-content h-full">
                <div className="modal-header p-4 relative">
                    <h2>New Student</h2>
                    <button className='absolute top-[25px] right-4 ' onClick={handleClose}><LiaTimesSolid/></button>
                </div>
                <div className="modal-body p-4">
                    <Formik
                    initialValues={initVal}
                    validationSchema={yupSchema}
                    onSubmit={async (values) => {
                        mutation.mutate(values)
                    }}
                    >

                        {(props) => {
                            return (
                             <Form action="" className='flex flex-col h-[calc(100vh-110px)]'>
                        <div className='grow'>
                        <div className="input-wrap">
                            <InputText
                            label = "Name"
                            type="text"
                            name="staff_name"
                            />
                        </div>
                        <div className="input-wrap">
                        <InputText
                            label = "Class"
                            type="text"
                            name="staff_class"
                            />
                        </div>
                        {/* <div className="input-wrap">
                            <label htmlFor="">Gender</label>
                           
                            <select>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                
                            </select>
                            <small className='error-msg'>Required*</small>
                        </div> */}
                        <div className="input-wrap">
                        <InputText
                            label = "Age"
                            type="number"
                            name="staff_age"
                            />
                        </div>
                        <div className="input-wrap">
                        <InputText
                            label = "Email"
                            type="email"
                            name="staff_email"
                            />
                        </div>
                        
                       
                        </div>

                        <div className="form-action">
                            <button className='btn btn-form btn--accent' type='submit'>Add {mutation.isPending ? <SpinnerButton/> : "Add"}</button>
                            <button className='btn btn-form btn--cancel ' type='button' onClick={handleClose}>Cancel</button>
                        </div>
                    </Form>
                        )}}
                   
                     </Formik>
                </div>
            </div>
            </ModalWrapper>
    
  )
}

export default ModalAddStaff
