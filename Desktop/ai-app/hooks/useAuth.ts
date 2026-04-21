import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import { openModal } from '@/store/slices/modalSlice'

export const useAuth = () => {
    const dispatch = useDispatch()
    const email = useSelector((state: RootState) => state.user.email)
    const isSubscribed = useSelector((state: RootState) => state.user.isSubscribed)
    const subscriptionStatus = useSelector((state: RootState) => state.user.subscriptionStatus)
    const favoriteMovies = useSelector((state: RootState) => state.user.favoriteMovies)
    const isLoading = useSelector((state: RootState) => state.user.isLoading)
    const isLoggedIn = !!email
    const isPremium = subscriptionStatus === 'Premium' || subscriptionStatus === 'VIP'

    const requireLogin = () => {
        if (!isLoggedIn) {
            dispatch(openModal())
            return false
        }
        return true
    }

    return {
        email,
        isLoggedIn,
        isSubscribed,
        isPremium,
        subscriptionStatus,
        favoriteMovies,
        isLoading,
        requireLogin,
    }
}