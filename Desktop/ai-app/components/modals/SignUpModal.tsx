'use client'
import { auth, db, provider } from '@/firebase';
import { RootState } from '@/store';
import { closeModal } from '@/store/slices/modalSlice';
import { faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from '@mui/material';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { ModalType } from '@/types/modal'
import { signInUser } from '@/store/slices/userSlice';
import { doc, getDoc, setDoc } from 'firebase/firestore';
interface SignUpModalProps {
    setModal: (value: ModalType) => void
}
const SignUpModal = ({ setModal }: SignUpModalProps) => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [loadingGoogle, setLoadingGoogle] = useState(false)
    const [loadingGuest, setLoadingGuest] = useState(false)
    const [password, setPassword] = useState('')
    const router = useRouter()
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()
    const isOpen = useSelector((state: RootState) => state.modal.isOpen)

    const handleGoogleSignIn = async () => {
        setLoadingGoogle(true)
        const result = await signInWithPopup(auth, provider)
        const user = result.user

        if (user) {
            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)
            if (!docSnap.exists()) {
                await setDoc(docRef, {
                    email: user.email,
                    subscriptionStatus: 'Basic',
                    isSubscribed: false,
                })
            }
            dispatch(signInUser({ email: user.email ?? '', password }))
            router.push('/dashboard')
        }
        setLoadingGoogle(false)
        dispatch(closeModal())

    }
    const handleSignUp = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        try {
            e.preventDefault()
            setLoading(true)
            setError('')
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredentials.user
            if (user) {
                await setDoc(doc(db, 'users', user.uid), {
                    email: user.email,
                    subscriptionStatus: 'Basic',
                    isSubscribed: false,
                })
                dispatch(signInUser({ email: user.email ?? '', password }))
                router.push('/dashboard')
                setEmail('')
                setPassword('')
            }
            setLoading(false)
            dispatch(closeModal())
        } catch (error: any) {
            switch (error.code) {
                case 'auth/invalid-email':
                    setError('Invalid email address.')
                    break
                case 'auth/user-not-found':
                    setError('No account found with this email.')
                    break
                case 'auth/wrong-password':
                    setError('Incorrect password.')
                    break
                case 'auth/too-many-requests':
                    setError('Too many attempts. Try again later.')
                    break
                default:
                    setError('Something went wrong. Please try again.')
            }
            setLoading(false)
        }
    }
    const handleGuestSignUp = async () => {
        setLoadingGuest(true)
        const userCredentials = await signInWithEmailAndPassword(auth, 'guest123@gmail.com', '12345678')
        const user = userCredentials.user
        if (user) {
            dispatch(signInUser({ email: user.email ?? '', password }))
            router.push('/dashboard')
        }
        setLoadingGuest(false)
        dispatch(closeModal())
    }
    return (
        <>
            <Modal open={isOpen} onClose={() => { dispatch(closeModal()); setModal('login') }}
                className='flex items-center justify-center m-10 ' >
                <div className='bg-white w-full max-w-[400px] outline-none h-[640px] p-[32px] relative rounded-md flex flex-col '>
                    <button className='absolute top-[16px] right-[16px] w-[14px] text-[18px] cursor-pointer text-[#1f2328] h-[14px]'
                        onClick={() => { dispatch(closeModal()); setModal('login') }}>
                        <FontAwesomeIcon icon={faTimes} /></button>
                    <h3 className='font-bold text-[32px] text-[#1f2328] mb-[20px] font-weight-800 text-center'>Sign Up </h3>
                    {error &&
                        <span className="hidden text-[#f56c6c] mb-4 text-[14px]">{error}</span>}
                    <div className='flex flex-col space-y-[12px]'>
                        <button className='flex justify-start items-center space-x-3 rounded-md text-[14px] font-weight-500 py-[12px] px-[20px]
                                text-[#404654] border-[#ebebeb] border-[3px] transition'
                            onClick={() => handleGoogleSignIn()}
                        ><FcGoogle size={16} className='mr-4' />{loadingGoogle ? (
                            <div className='w-5 h-5  border-2 border-[#4f46e5] border-t-transparent rounded-full animate-spin' />
                        ) : 'Log with Google '
                            }</button>
                        <button className='flex justify-start items-center space-x-3 rounded-md text-[14px] font-weight-500 py-[12px] px-[20px]
                                text-[#404654] border-[#ebebeb] border-[3px] transition
                                '
                            onClick={() => handleGuestSignUp()}
                        ><FontAwesomeIcon icon={faUser} className='mr-4'
                            /> {loadingGuest ? (
                                <div className='w-5 h-5  border-2 border-[#4f46e5] border-t-transparent rounded-full animate-spin' />
                            ) : 'Login as Guest'
                            }</button>
                    </div>
                    <div className='flex items-center space-x-[32px] my-[24px] text-[rgba(0,0,0,0.6)]'>
                        <div className='h-[1px] w-full bg-[rgba(64,70,84,0.1)]'></div>
                        <div className='text-[13px]'>or</div>
                        <div className='h-[1px] w-full bg-[rgba(64,70,84,0.1)]'></div>
                    </div>
                    <form className="flex flex-col space-y-3">
                        <div className='flex w-full flex-col space-y-[12px]'>
                            <label className='text-[13px] font-weight-500 text-[#667085]'>
                                Email Address
                            </label>
                            <input type="email" placeholder='your@email.com'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                className='py-2 px-4 h-[44px] outline-none rounded-lg border-[#ebebeb] border-[1px] w-full' />
                        </div>
                        <div className='flex w-full flex-col space-y-[12px]'>
                            <label className='text-[13px] font-weight-500 text-[#667085]'>
                                Password
                            </label>
                            <input type="password" placeholder='Your Password'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                className='py-2 px-4 h-[44px] outline-none rounded-lg border-[#ebebeb] border-[1px] w-full' />
                        </div>
                        <div className='mt-[20px] '>
                            <button className='w-full h-[44px] px-[20px] text-[15px] font-weight-500 rounded-full bg-[#320580] disabled:opacity-50  text-white border-none flex justify-center items-center'
                                onClick={(e) => handleSignUp(e)} disabled={!password || !email}
                            >{loading ? (
                                <div className='w-5 h-5  border-2 border-white border-t-transparent rounded-full animate-spin' />
                            ) : 'Sign Up'
                                }</button>
                        </div>
                    </form>
                    <div className='flex justify-center text-[13px] text-center mt-[20px] space-x-1'>
                        <span>Already have an account?</span>
                        <span className='text-[#4f46e5] cursor-pointer underline'
                            onClick={() => setModal('login')}
                        >Log In</span>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default SignUpModal;
