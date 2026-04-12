import PageContent from '@/components/PageContent';
import SideBar from '@/components/SideBar';
import React from 'react';

const Page = () => {
    return (
        <div className='flex max-w-[1400px] min-h-screen mx-auto'>
            <div className='w-[240px] shrink-0'>
                <SideBar />
            </div>
            <div className='flex-1 flex-col'>

            </div>
        </div>
    );
}

export default Page;
