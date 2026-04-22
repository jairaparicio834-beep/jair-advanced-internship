'use client'
import { SettingsSkeleton } from '@/components/skeletons/SettingsSkeleton';
import { BoltIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';


const Settings = () => {
    const { isLoggedIn, subscriptionStatus, isLoading, requireLogin, email } = useAuth()


    return (
        <>
            <div className='flex flex-col py-[40px] max-w-[1400px] mx-auto'>
                <h1 className='text-[32px] font-bold pb-4 mb-8 w-full border-b border-[#e1e7ea]'>Settings</h1>
                {
                    isLoading ? <SettingsSkeleton /> :
                        !isLoggedIn ?
                            <div className='flex flex-col items-center w-full m-auto max-w-[460px]'>
                                <Image src='/assets/summary.png' width={460} height={278} alt='Sign In Image' />
                                <p className='text-center mb-4 text-[24px] font-semibold'>Sign In to see your account settings</p>
                                <button className='text-[#fff] w-[180px] h-[56px] flex items-center justify-center text-[16px] rounded-[8px] bg-[#320580] border-none transition duration-200'
                                    onClick={() => requireLogin()}
                                >Login</button>
                            </div>
                            :
                            <div className='flex flex-col pb-6 gap-2 items-start'>
                                <div className='flex flex-col pb-6 gap-2 w-full items-start border-b border-[#e1e7ea]'>
                                    <h2 className='text-[18px] font-semibold'>Your Subscription Plan</h2>
                                    <span className=''>
                                        {subscriptionStatus}</span>
                                    {subscriptionStatus === 'Basic' &&
                                        <Link href="/plans" className='text-[#fff] cursor-pointer bg-[#320580] py-3 px-4 flex justify-center items-center gap-1.5 text-[14px] font-medium rounded-lg'>
                                            <span>Upgrade</span>
                                            <BoltIcon className='w-4 font-extrabold text-[#fff]' />
                                        </Link>}
                                </div>
                                <div className='flex flex-col py-6 gap-2 w-full items-start border-b border-[#e1e7ea]'>
                                    <h2 className='text-[18px] font-semibold'>Email</h2>
                                    <span className=''>{email}</span>
                                </div>
                            </div>}
            </div>


        </>
    );
}

export default Settings;
