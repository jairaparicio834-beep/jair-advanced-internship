'use client'
import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid'
import { PlusIcon } from '@heroicons/react/24/outline';
import { loadCheckout } from '@/app/api/stripe/stripePayment';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
type toggleType = '1' | '2' | '3';
const PlansContent = () => {
    const { requireLogin } = useAuth()
    const router = useRouter()
    const [loadingPremium, setLoadingPremium] = useState(false)
    const [loadingVIP, setLoadingVIP] = useState(false)
    const [showDescription, setShowDescription] = useState<toggleType | null>(null)

    const premiumSubscription = async () => {
        try {
            setLoadingPremium(true)
            const priceId = 'price_1TMVW0DdkEXoq0YWHJnZQj3A'
            await loadCheckout(priceId, 'Premium')
            setLoadingPremium(false)
        }
        catch (e) {
            console.error(e)
            setLoadingPremium(false)
        }
    }
    const vipSubscription = async () => {
        try {
            setLoadingVIP(true)
            const priceId = 'price_1TMVX4DdkEXoq0YWMU48rTR9'
            await loadCheckout(priceId, 'VIP')
            setLoadingVIP(false)
        }
        catch (e) {
            console.error(e)
            setLoadingVIP(false)
        }
    }
    return (
        <>
            <div className='w-full py-6 border-b border-[#f1f3f4]'>
                <div className='w-full h-full max-w-[1400px] flex items-center justify-between px-8 mx-auto'>
                    <div>
                        <h1 className='text-[33px] font-bold'>Plans</h1>
                        <span>Get unlimited access to our extensive library of movie summaries.</span>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-col items-start pt-6 w-full h-full px-9 mx-auto max-w-[1400px] justify-between'>
                    <h2 className='mb-6 font-bold text-[26px]'>Subscription Plans</h2>
                    <div className='flex w-full gap-3'>
                        <div className='w-1/2 flex flex-col p-7 rounded-3xl border-b border-[#f1f3f4] shadow-[0_7px_20px_rgba(0,0,0,0.04)]'>
                            <div className='flex items-start mb-2 font-bold gap-1 text-[50px] leading-[1]'>
                                <span className='text-[18px] font-normal'>$</span>
                                <h3>19</h3>
                                <span className='text-[15px] font-medium ml-1 mt-2'>Monthly</span>
                            </div>
                            <div className='mb-2 leading-[1] font-medium text-[15px] opacity-[.5]'>Premium</div>
                            <div className='my-6'>
                                <div className='flex gap-2 mb-3'>
                                    <div className='w-[20px] h-[20px] rounded-full text-[#320580] flex items-center justify-center bg-[rgba(50,5,128,.1)]'>
                                        <CheckIcon />
                                    </div>
                                    <span className='text-[#1f2328]'>Premium Support</span>
                                </div>
                                <div className='flex gap-2 mb-3'>
                                    <div className='w-[20px] h-[20px] rounded-full text-[#320580] flex items-center justify-center bg-[rgba(50,5,128,.1)]'>
                                        <CheckIcon />
                                    </div>
                                    <span className='text-[#1f2328]'>Access 100+ Summaries</span>
                                </div>
                                <div className='flex gap-2 mb-3'>
                                    <div className='w-[20px] h-[20px] rounded-full text-[#320580] flex items-center justify-center bg-[rgba(50,5,128,.1)]'>
                                        <CheckIcon />
                                    </div>
                                    <span className='text-[#1f2328]'>Higher Quality Audio</span>
                                </div>
                                <div className='flex gap-2 mb-3'>
                                    <div className='w-[20px] h-[20px] rounded-full text-[#320580] flex items-center justify-center bg-[rgba(50,5,128,.1)]'>
                                        <CheckIcon />
                                    </div>
                                    <span className='text-[#1f2328]'>License For Commercial Use</span>
                                </div>
                                <div className='flex gap-2 mb-3'>
                                    <div className='w-[20px] h-[20px] rounded-full text-[#320580] flex items-center justify-center bg-[rgba(50,5,128,.1)]'>
                                        <CheckIcon />
                                    </div>
                                    <span className='text-[#1f2328]'>2 Supported Devices</span>
                                </div>
                            </div>
                            <button className='mt-15 text-[14px] font-medium py-2 px-4 rounded-full text-[#fff] flex items-center justify-center w-full h-[44px] border-none bg-[#320580] shadow-[0,2px,6px,rgba(0,0,0,.1)]'
                                onClick={() => requireLogin() && premiumSubscription()}
                            >{loadingPremium ? <div className='w-5 h-5 mr-4 border-2 border-[#fff] border-t-transparent rounded-full animate-spin'></div> : 'Choose Plan'}</button>
                        </div>
                        <div className='w-1/2 flex flex-col p-7 rounded-3xl border-b border-[#f1f3f4] shadow-[0_7px_20px_rgba(0,0,0,0.04)]'>
                            <div className='flex items-start mb-2 font-bold gap-1 text-[50px] leading-[1]'>
                                <span className='text-[18px] font-normal'>$</span>
                                <h3>190</h3>
                                <span className='text-[15px] font-medium ml-1 mt-2'>Yearly</span>
                            </div>
                            <div className='mb-2 leading-[1] font-medium text-[15px] opacity-[.5]'>VIP+</div>
                            <div className='my-6'>
                                <div className='flex gap-2 mb-3'>
                                    <div className='w-[20px] h-[20px] rounded-full text-[#320580] flex items-center justify-center bg-[rgba(50,5,128,.1)]'>
                                        <CheckIcon />
                                    </div>
                                    <span className='text-[#1f2328]'>2 Months Free</span>
                                </div>
                                <div className='flex gap-2 mb-3'>
                                    <div className='w-[20px] h-[20px] rounded-full text-[#320580] flex items-center justify-center bg-[rgba(50,5,128,.1)]'>
                                        <CheckIcon />
                                    </div>
                                    <span className='text-[#1f2328]'>Access 100+ Summaries</span>
                                </div>
                                <div className='flex gap-2 mb-3'>
                                    <div className='w-[20px] h-[20px] rounded-full text-[#320580] flex items-center justify-center bg-[rgba(50,5,128,.1)]'>
                                        <CheckIcon />
                                    </div>
                                    <span className='text-[#1f2328]'>Highest Quality Audio</span>
                                </div>
                                <div className='flex gap-2 mb-3'>
                                    <div className='w-[20px] h-[20px] rounded-full text-[#320580] flex items-center justify-center bg-[rgba(50,5,128,.1)]'>
                                        <CheckIcon />
                                    </div>
                                    <span className='text-[#1f2328]'>License For Commercial Use</span>
                                </div>
                                <div className='flex gap-2 mb-3'>
                                    <div className='w-[20px] h-[20px] rounded-full text-[#320580] flex items-center justify-center bg-[rgba(50,5,128,.1)]'>
                                        <CheckIcon />
                                    </div>
                                    <span className='text-[#1f2328]'>3 Supported Devices</span>
                                </div>
                            </div>
                            <button className='mt-15 text-[14px] font-medium py-2 px-4 rounded-full text-[#fff] flex items-center 
                            justify-center w-full h-[44px] border-none bg-[#320580] shadow-[0,2px,6px,rgba(0,0,0,.1)]'
                                onClick={() => requireLogin() && vipSubscription()}
                            >{loadingVIP ? <div className='w-5 h-5 mr-4 border-2 border-[#fff] border-t-transparent rounded-full animate-spin'>
                            </div> : 'Choose Plan'}</button>
                        </div>
                    </div>
                </div>
            </div >
            <div>
                <div className='flex items-center w-full h-full max-w-[1400px] mt-8 px-8 mx-auto pb-10 gap-2 flex-col'>
                    <div className='flex flex-col w-full rounded-3xl border border-[#f2f3f4] px-6 pt-6 pb-4'>
                        <div className='flex items-start cursor-pointer py-4 gap-2 justify-between'>
                            <h4 className='font-semibold text-[18px] mb-0'>
                                What is Hollywood AI?
                            </h4>
                            <div className='w-5 font-extrabold'>
                                <PlusIcon onClick={() => showDescription === '1' ? setShowDescription(null) : setShowDescription('1')}
                                    className={`w-5 transition-transform duration-500 ${showDescription === '1' ? ' rotate-45' : 'rotate-0'}`} />
                            </div>
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 ${showDescription === '1' ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            {<p className='font-normal text-[16px] text-[#6b7280]'>HollywoodAI is designed to help you get high-quality summaries of your favourite movies instantly, without breaking a sweat. With our intuitive interface and powerful features, you can easily digest any movie in just minutes instead of hours.

                            </p>}
                        </div>
                    </div>
                    <div className='flex flex-col w-full rounded-3xl border border-[#f2f3f4] px-6 pt-6 pb-4'>
                        <div className='flex items-start cursor-pointer py-4 gap-2 justify-between'>
                            <h4 className='font-semibold text-[18px] mb-0'>
                                How much does Hollywood AI cost?
                            </h4>
                            <div className='w-5 font-bold'>
                                <PlusIcon onClick={() => showDescription === '2' ? setShowDescription(null) : setShowDescription('2')}
                                    className={`w-5 transition-transform ${showDescription === '2' ? 'rotate-45' : 'rotate-0'}`}
                                />
                            </div>
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 ${showDescription === '2' ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            {<p className=' font-normal text-[16px] text-[#6b7280]'>
                                Get summaries of your favourite movies on your smartphone, tablet or laptop, all for one fixed monthly or yearly fee. Plans range from $19 per month to $190 per year. No extra costs, no contracts..
                            </p>}
                        </div>
                    </div>
                    <div className='flex flex-col w-full rounded-3xl border border-[#f2f3f4] px-6 pt-6 pb-4'>
                        <div className='flex items-center cursor-pointer py-4 gap-2 justify-between'>
                            <h4 className='font-semibold text-[18px] mb-0'>
                                What can I watch on Hollywood AI?
                            </h4>
                            <div className='w-5 font-bold'>
                                <PlusIcon onClick={() => showDescription === '3' ? setShowDescription(null) : setShowDescription('3')}
                                    className={`w - 5 transition-transform duration-300 ${showDescription === '3' ? 'rotate-45' : 'rotate-0'}`}
                                />
                            </div>
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 ${showDescription === '3' ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            {<p className=' font-normal text-[16px] text-[#6b7280]' >
                                Hollywood AI has an extensive library of feature films. Watch as much as you want, at any time that you want.
                            </p>}
                        </div>
                    </div>

                </div>
            </div >
        </>
    );
}

export default PlansContent;
