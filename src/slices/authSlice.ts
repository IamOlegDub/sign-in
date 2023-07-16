import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { auth as firebaseAuth } from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import { AppThunk, RootState } from '../store';
import { AuthState, SignInFormData, SignUpFormData, User } from '../types';

const initialState: AuthState = {
    user: null,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        signInSuccess(state, action: PayloadAction<User>) {
            state.isLoading = false;
            state.user = action.payload;
        },
        signInFailure(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isLoading = false;
        },
        signUpStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        signUpSuccess(state, action: PayloadAction<User>) {
            state.isLoading = false;
            state.user = action.payload;
        },
        signUpFailure(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isLoading = false;
        },
        logOut(state) {
            state.user = null;
            state.isLoading = false;
            state.error = null;
        },
    },
});

export const {
    signInStart,
    signInSuccess,
    signInFailure,
    signUpStart,
    signUpSuccess,
    signUpFailure,
    logOut,
} = authSlice.actions;

export default authSlice.reducer;

export const signIn =
    (data: SignInFormData): AppThunk =>
    async (dispatch) => {
        try {
            dispatch(signInStart());
            const { email, password } = data;
            const userCredential = await signInWithEmailAndPassword(
                firebaseAuth,
                email,
                password
            );
            const user: User = {
                name: userCredential.user.displayName || '',
                email: userCredential.user.email || '',
            };

            dispatch(signInSuccess(user));
        } catch (error) {
            dispatch(signInFailure((error as Error).message));
        }
    };

export const signUp =
    (data: SignUpFormData): AppThunk =>
    async (dispatch) => {
        try {
            dispatch(signUpStart());
            const { name, email, password } = data;
            const userCredential = await createUserWithEmailAndPassword(
                firebaseAuth,
                email,
                password
            );
            await updateProfile(userCredential.user, { displayName: name });
            const user: User = {
                name,
                email,
            };
            dispatch(signUpSuccess(user));
        } catch (error) {
            dispatch(signUpFailure((error as Error).message));
        }
    };

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsLoading = (state: RootState) => state.auth.isLoading;
