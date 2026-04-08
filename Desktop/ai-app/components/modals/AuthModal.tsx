'use client'
import React, { useState } from 'react';
import LogInModal from './LogInModal';
import SignUpModal from './SignUpModal';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '@/store/slices/modalSlice';
import ForgotPassword from './ForgotPassword';
import { ModalType } from '@/types/modal'

const AuthModal = () => {
    const [modal, setModal] = useState<ModalType>('login');
    const dispatch = useDispatch()
    return (
        <>
            <button
                className="h-[40px] text-[15px] font-semibold py-[10px] px-[16px] flex items-center justify-center rounded-lg transition-all duration-200 ease-in-out bg-black/10 border-none hover:text-white hover:bg-black hover:scale-110"
                onClick={() => dispatch(openModal())}
            >
                Sign In
            </button>

            {modal === 'login' && <LogInModal setModal={setModal} />}
            {modal === 'signup' && < SignUpModal setModal={setModal} />}
            {modal === 'forgot' && < ForgotPassword setModal={setModal} />}


        </>
    );
}

export default AuthModal;
