const SearchCardSkeleton = () => {
    return (
        <div className='flex items-center p-6 space-x-6 h-[120px] border border-[#e1e7ea] hover:bg-[#f1f3f4] transition'>
            <div className='w-[88px] min-w-[59px] h-[88px] rounded-[4px] bg-gray-200 animate-pulse' />
            <div className='flex flex-col space-y-3 w-full'>
                <div className='h-[16px] w-1/2 bg-gray-200 animate-pulse rounded' />
                <div className='h-[14px] w-1/3 bg-gray-200 animate-pulse rounded' />
            </div>
        </div>
    )
}

export default SearchCardSkeleton