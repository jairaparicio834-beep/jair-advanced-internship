const Sk = ({ w, h = 16, rounded = 'rounded-md' }: { w: string; h?: number; rounded?: string }) => (
    <div className={`animate-pulse bg-gray-200 ${rounded}`} style={{ width: w, height: h }} />
)

export const MovieDetailSkeleton = () => {
    return (
        <div className="flex flex-col-reverse xl:flex-row py-10 animate-pulse">
            {/* LEFT SIDE */}
            <div className="mt-3 xl:m-0 flex flex-col w-full">
                {/* Title */}
                <div className="h-10 w-80 bg-gray-200 rounded mb-2"></div>
                <div className="h-5 w-40 bg-gray-200 rounded mb-6"></div>

                {/* Stats row */}
                <div className="py-4 mb-6 border-b border-t border-[#e1e7ea]">
                    <div className="flex flex-wrap max-w-[400px] gap-y-3">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-1/2 flex items-center gap-2">
                                {/* <div className="w-4 h-4 bg-gray-200 rounded-full"></div> */}
                                <div className="h-4 w-16 bg-gray-200 rounded"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Button */}
                <div className="w-[280px] h-[48px] bg-gray-200 rounded mb-6"></div>

                {/* Favorite */}
                <div className="h-6 w-48 bg-gray-200 rounded mb-10"></div>

                {/* Section title */}
                <div className="h-6 w-40 bg-gray-200 rounded mb-4"></div>

                {/* Tags */}
                <div className="flex gap-4 mb-6">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="h-12 w-24 bg-gray-200 rounded"></div>
                    ))}
                </div>

                {/* Paragraph */}
                <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-[200px] min-w-[200px] max-h-[300px] mx-auto xl:ml-8 rounded-xl aspect-[2/3] bg-gray-200"></div>
        </div>
    )
}

export const FavoritesSkeleton = () => (
    <div className="flex flex-col py-[40px] items-start w-full">
        <Sk w="160px" h={28} />
        <div className="w-full pb-4 mb-8 mt-2 border-b-2 border-[#f1f3f4]">
            <Sk w="80px" h={18} />
        </div>
        <div className="flex flex-wrap gap-7">
            {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="flex flex-col gap-2">
                    <Sk w="170px" h={256} rounded="rounded-xl" />
                </div>
            ))}
        </div>
    </div>
)