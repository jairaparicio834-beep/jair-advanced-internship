import SearchBar from "@/components/SearchBar";
import SideBar from "@/components/SideBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen w-full">
            <SideBar />
            <div className="flex-1 flex flex-col md:ml-[240px]">
                <div className="w-full flex items-center relative gap-4">
                    <SearchBar />
                </div>
                <div className="w-full px-6">
                    {children}
                </div>
            </div>
        </div>
    )
}