"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {auth} from "@/lib/firebase";

const Register = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  // Handle registration via email and password.
  const registerForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      // Create user with email and password.
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update the user's profile with the display name.
      await updateProfile(userCredential.user, { displayName: name });

      console.log("User registered:", userCredential.user);
      // Optionally, redirect the user after successful registration.
      router.push("/");
    } catch (err: any) {
      console.error("Registration error:", err);
      setError(err.message);
    }
  };

  // Handle registration via Google.
  const registerWithGoogle = async () => {
    setError(null);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google registration successful:", result.user);
      router.push("/");
    } catch (err: any) {
      console.error("Google registration error:", err);
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={registerForm}
        className="w-full max-w-md bg-white shadow-md rounded-2xl p-8 space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Register
        </h2>

        {error && <div className="text-red-500 text-center">{error}</div>}

        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="example@email.com"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="********"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-xl transition-all"
        >
          Register
        </button>

        <div className="flex items-center justify-center">
          <span className="text-gray-500 text-sm">or</span>
        </div>

        <button
          type="button"
          onClick={registerWithGoogle}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-xl transition-all flex items-center justify-center space-x-2"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.4 0 6.4 1.2 8.7 3.2l6.5-6.5C35.1 2.4 29.9 0 24 0 14.8 0 6.8 5.3 2.7 13.2l7.6 5.9C12.3 13.2 17.4 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.8 24.5c0-1.7-.1-3.3-.4-4.8H24v9.1h12.8c-.6 3.4-2.5 6.3-5.4 8.3l8.3 6.5c4.8-4.4 7.6-10.8 7.6-18.1z"
            />
            <path
              fill="#FBBC05"
              d="M9.4 28.1c-1.1-3.2-1.1-6.7 0-9.9V12.3l-7.6-5.9C.4 11.9-.3 17.4 0 22.7c.3 5.3 2 10.8 5.4 15.3l7.6-5.9z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.5 0 12.1-2.1 16.1-5.8l-8.3-6.5c-2.3 1.5-5.3 2.4-7.8 2.4-5.9 0-10.9-4-12.7-9.4l-7.6 5.9C6.8 42.7 14.8 48 24 48z"
            />
            <path fill="none" d="M0 0h48v48H0z" />
          </svg>
          <span>Sign up with Google</span>
        </button>
      </form>
    </div>
  );
};

export default Register;
