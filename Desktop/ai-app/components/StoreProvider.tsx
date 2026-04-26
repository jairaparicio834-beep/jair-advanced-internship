'use client'
import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from '@/store';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '@/firebase';
import { changeSubscriptionStatus, signInUser, setLoading, signOutUser, userSubscribed } from '@/store/slices/userSlice';
import { doc, onSnapshot } from 'firebase/firestore';

interface StoreProviderProps {
    children: React.ReactNode
}

const StoreProvider = ({ children }: StoreProviderProps) => {
    return (
        <Provider store={store}>
            <AuthListener />
            {children}
        </Provider>
    );
}

const AuthListener = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        let unsubscribeFirestore: (() => void) | null = null

        const unsubscribeAuth = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                dispatch(signInUser({ email: currentUser.email ?? '', password: '' }))

                const docRef = doc(db, 'users', currentUser.uid)
                unsubscribeFirestore = onSnapshot(docRef, (docSnap) => {
                    if (docSnap.exists()) {
                        const data = docSnap.data()
                        dispatch(changeSubscriptionStatus(data.subscriptionStatus ?? 'Basic'))
                        if (data.isSubscribed) {
                            dispatch(userSubscribed())
                        }
                    } else {
                        dispatch(changeSubscriptionStatus('Basic'))
                    }
                    dispatch(setLoading(false))
                })
            } else {
                if (unsubscribeFirestore) unsubscribeFirestore()
                dispatch(signOutUser())
                dispatch(setLoading(false))
            }
        })

        return () => {
            unsubscribeAuth()
            if (unsubscribeFirestore) unsubscribeFirestore()
        }
    }, [])

    return null
}

export default StoreProvider;