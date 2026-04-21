'use client'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useDispatch } from 'react-redux'
import { openSidebar } from '@/store/slices/sidebarSlice'

export default function HamburderButton() {
    const dispatch = useDispatch()
    return (
        <button
            className="md:hidden text-gray-600  ml-5 hover:text-gray-900"
            onClick={() => dispatch(openSidebar())}
        >
            <Bars3Icon className="h-6 w-6" />
        </button>
    )
}