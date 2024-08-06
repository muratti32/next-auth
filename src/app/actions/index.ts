"use server";
import { signIn, signOut } from "@/auth";

export const doSocialLogin = async (formData: any) => {
    const action = formData.get('action');
    return signIn(action, { redirectTo: '/home' });
    if (action === 'google') {
    }
}

export const doLogout = async () => {
    return signOut({ redirectTo: '/' });
}