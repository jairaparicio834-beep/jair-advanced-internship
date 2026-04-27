const SearchCardSkeleton = () => {
    return (
        <div className='flex items-center p-6 space-x-6 h-[120px] border border-[#e1e7ea]'>
            <div className='w-[59px] min-w-[59px] h-[88px] rounded-[4px] bg-gray-200 animate-pulse' />
            <div className='flex flex-col space-y-2 w-full'>
                <div className='h-[16px] w-2/3 bg-gray-200 animate-pulse rounded' />
                <div className='h-[14px] w-1/3 bg-gray-200 animate-pulse rounded' />
                <div className='h-[14px] w-1/5 bg-gray-200 animate-pulse rounded' />
            </div>
        </div>
    )
}

export default SearchCardSkeleton