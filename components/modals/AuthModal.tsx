'use client'
import React, { useState } from 'react';
import LogInModal from './LogInModal';
import SignUpModal from './SignUpModal';
import ForgotPassword from './ForgotPassword';
import { ModalType } from '@/types/modal'

const AuthModal = () => {
    const [modal, setModal] = useState<ModalType>('login');
    return (
        <>


            {modal === 'login' && <LogInModal setModal={setModal} />}
            {modal === 'signup' && < SignUpModal setModal={setModal} />}
            {modal === 'forgot' && < ForgotPassword setModal={setModal} />}


        </>
    );
}

export default AuthModal;
