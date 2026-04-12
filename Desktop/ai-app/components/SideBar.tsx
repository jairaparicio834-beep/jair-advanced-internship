'use client'
import Image from 'next/image';
import React from 'react';
import { ArrowRightEndOnRectangleIcon, ArrowLeftEndOnRectangleIcon, ArrowTrendingUpIcon, BookmarkIcon, Cog6ToothIcon, MagnifyingGlassIcon, QuestionMarkCircleIcon, Squares2X2Icon, } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { signOut } from 'firebase/auth';
import { signOutUser } from '@/store/slices/userSlice';
import { auth } from '@/firebase';
import { openModal } from '@/store/slices/modalSlice';
import Link from 'next/link';
const SideBar = () => {
    const user = useSelector((state: RootState) => state.user.email)
    const dispatch = useDispatch()
    async function logOut() {
        if (!user) {
            dispatch(openModal())
            console.log(user + ' is signed out')
        } else {
            await signOut(auth)
            dispatch(signOutUser({
                email: ''
            }))
        }
    }
    return (
        <nav className=' hidden fixed top-0 left-0 z-[1000] py-[24px] space-y-[32px] w-[230px] h-full bg-[#fff] border-[1px] border-[#f1f3f4] sm:flex flex-col transition-all duration-300'>
            <div className='mx-6'>
                <Image src={'/assets/logo-dark.png'} width={140} height={40} alt='Logo' />
            </div>

            <div className='flex flex-col'>
                <span className='text-[10px] font-weight-500  text-[#565b67] mt-0 mb-4 mx-6'>LINKS</span>
                <SidebarLink text='Dashboard' Icon={Squares2X2Icon} page='/dashboard' isDisabled={false} />
                <SidebarLink text='Favorites' Icon={BookmarkIcon} page='/favorites' isDisabled={false} />
                <SidebarLink text='Search' Icon={MagnifyingGlassIcon} isDisabled={true} />
                <SidebarLink text='Trending' Icon={ArrowTrendingUpIcon} isDisabled={true} />
            </div>
            <div className='flex flex-col'>
                <span className='text-[10px] font-weight-500 text-[#565b67] mt-0 mb-4 mx-6'>EXTRAS</span>
                <SidebarLink text='Help & Support' Icon={QuestionMarkCircleIcon} isDisabled={true} />
                <SidebarLink text='Settings' Icon={Cog6ToothIcon} page='/settings' isDisabled={false} />
                <SidebarLink text={user ? 'Log Out' : 'Log In'} Icon={user ? ArrowLeftEndOnRectangleIcon : ArrowRightEndOnRectangleIcon} isDisabled={false} logOut={logOut} page='#' />
            </div>
        </nav>
    );
}

export default SideBar;

interface SidebarLinkProps {
    text: string
    Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
    } & React.RefAttributes<SVGSVGElement>>
    logOut?: () => Promise<void>
    page?: string
    isDisabled: boolean
}

function SidebarLink({ text, Icon, logOut, page, isDisabled }: SidebarLinkProps) {
    return (
        <Link href={`${page}`} onClick={logOut} className={`flex items-center text-[15px] p-[12px] cursor-not-allowed text-[#565b67] rounded-[12px]
         my-[2px] mx-3 ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'} font-md
         hover:bg-gray-100 hover:text-[#28247b] transition`}>
            <Icon className='h-[15px] w-[15px] font-md mr-2' /> {text}
        </Link>
    )
}