export type SignInFormData = {
    email: string;
    password: string;
};

export type SignUpFormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export interface User {
    name: string;
    email: string;
}

export interface AuthState {
    user: User | null;
    isLoading: boolean;
    error: string | null;
}
