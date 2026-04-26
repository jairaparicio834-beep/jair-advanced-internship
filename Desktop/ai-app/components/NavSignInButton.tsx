'use client'
import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '@/store/slices/modalSlice';
const NavSignInButton = () => {
    const dispatch = useDispatch()
    return (
        <>
            <button
                className="h-[40px] text-[15px] font-semibold py-[10px] px-[16px] flex items-center justify-center rounded-lg transition-all duration-200 ease-in-out bg-black/10 border-none hover:text-white hover:bg-black hover:scale-110"
                onClick={() => dispatch(openModal())}
            >
                Sign In
            </button>
        </>
    );
}

export default NavSignInButton;
