const SkeletonBlock = ({ width, height = 16 }: { width: number; height?: number }) => (
    <div
        className="animate-pulse rounded-md bg-gray-200"
        style={{ width, height }}
    />
);

export function SettingsSkeleton() {
    return (
        <div className="max-w-sm py-6 space-y-0">
            {/* Subscription section */}
            <div className="pb-6 border-b border-gray-200 space-y-3">
                <SkeletonBlock width={180} height={30} />
                <SkeletonBlock width={60} />
            </div>

            {/* Email section */}
            <div className="py-6 border-b border-gray-200 space-y-3">
                <SkeletonBlock width={180} height={30} />
                <SkeletonBlock width={60} />
            </div>
        </div>
    );
}