'use client'
import { RootState } from '@/store';
import { closeModal } from '@/store/slices/modalSlice';
import { Modal } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/firebase';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalType } from '@/types/modal'
interface ForgotPasswordProps {
    setModal: (value: ModalType) => void
}
const ForgotPassword = ({ setModal }: ForgotPasswordProps) => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const isOpen = useSelector((state: RootState) => state.modal.isOpen)
    const dispatch = useDispatch()

    const resetPassword = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setLoading(true)
        await sendPasswordResetEmail(auth, email)
        alert('A Password Reset Link has been sent to ' + email)
        dispatch(closeModal())
        setModal('login')
        setLoading(false)
    }
    return (
        <Modal open={isOpen} onClose={() => {
            dispatch(closeModal()); setModal('login')
        }}
            className='flex items-center justify-center' >
            <div className='bg-white w-full max-w-[400px] outline-none h-[640px] p-[32px] relative rounded-md flex flex-col '>
                <button className='absolute top-[16px] right-[16px] w-[14px] text-[18px] cursor-pointer text-[#1f2328] h-[14px]'
                    onClick={() => { dispatch(closeModal()); setModal('login') }}>
                    <FontAwesomeIcon icon={faTimes} /></button>
                <h3 className='font-bold text-[32px] text-[#1f2328] mb-[20px] font-weight-800 text-center'>Forgot Password </h3>
                <form className="flex flex-col">
                    <div className='flex w-full flex-col space-y-[12px]'>
                        <label className='text-[13px] font-weight-500 text-[#667085]'>
                            Email Address
                        </label>
                        <input type="email" placeholder='your@email.com'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className='py-2 px-4 h-[44px] outline-none rounded-lg border-[#ebebeb] border-[1px] w-full' />
                    </div>
                    <div className='mt-10'>
                        <button className='w-full h-[44px] px-[20px] text-[15px] font-weight-500 rounded-full bg-[#320580] disabled:opacity-50 text-white border-none flex justify-center items-center'
                            onClick={(e) => { resetPassword(e) }}
                            disabled={!email}
                        >{loading ? (
                            <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin' />
                        ) : 'Send Instructions'
                            }</button>

                    </div>
                </form>

            </div>

        </Modal >
    );
}

export default ForgotPassword;
