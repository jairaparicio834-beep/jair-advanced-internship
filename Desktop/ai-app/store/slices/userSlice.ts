
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface Movie {
        id: string;
        director: string;
        title: string;
        tagLine: string;
        imageLink: string
        audioLink: string;
        rating: string;
        releaseYear: string;
        type: string;
        subscriptionRequired: boolean;
        summary: string;
        tags: string[];
        movieDescription: string;
}
interface UserState {
  email: string | null;
  password: string;
  subscriptionStatus: 'Basic' | 'Premium' | 'VIP';
  isSubscribed: boolean;
  favoriteMovies: Movie[];
  isLoading: boolean;
}

const initialState: UserState = {
email: '',
password:'',
subscriptionStatus: 'Basic',
isSubscribed: false,
favoriteMovies: [],
isLoading: true
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInUser: (state, action: PayloadAction<{email: string; password: string}>) => {
        state.email = action.payload.email
        state.password = action.payload.password
    },
    signOutUser: (state) => {
    state.email = ''
    state.password = ''
    state.subscriptionStatus = 'Basic'
    state.isSubscribed = false
    state.favoriteMovies = []
},
    addToFavorites: (state, action: PayloadAction<Movie>) => {
      state.favoriteMovies.push(action.payload)
    }, 
    removeFromFavorites: (state, action: PayloadAction<{id: string}>) => {
      state.favoriteMovies = state.favoriteMovies.filter((movie) => movie.id !== action.payload.id )
    },
    userSubscribed: (state) => {
      state.isSubscribed = true
    },
    userUnsubscribed: (state) => {
      state.isSubscribed = false
    },
    changeSubscriptionStatus: (state, action: PayloadAction<'Basic' | 'Premium' | 'VIP'>) => {
      state.subscriptionStatus = action.payload
    },
   setLoading: (state, action: PayloadAction<boolean>) => {
  state.isLoading = action.payload
}

  }
});

export const {signInUser, signOutUser, userSubscribed, userUnsubscribed, addToFavorites, removeFromFavorites,
  changeSubscriptionStatus, setLoading
} = userSlice.actions

export default userSlice.reducer