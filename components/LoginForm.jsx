"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { assets } from "@/Assets/assets";
import { IoCloseCircleOutline } from "react-icons/io5";
import { toast } from "react-toastify";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        toast.error("Invalid Credentials");
        return;
      }
      toast.success("Successfully Login. Please wait ...");

      // Introduce a slight delay before redirecting
      setTimeout(() => {
        router.replace("dashboard");
      }, 2000); // 2-second delay
    } catch (error) {
      console.log(error);
      toast.error("An error occurred during login.");
    }
  };

  return (
    <section className="bg-gradient-to-r from-violet-200 to-pink-200">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image
            className="w-16 h-16 mr-2"
            src={assets.profile_icon}
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
        <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>

            {error && (
              <div className="bg-red-500 text-white w-full text-sm px-5 py-2.5 rounded-md mt-2 flex items-center">
                <IoCloseCircleOutline className="text-[20px] mr-2" />
                {error}
              </div>
            )}

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="youremail@email.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  autoComplete="current-password"
                />
              </div>
              <div className="group transition-all ease-in duration-75">
                <button
                  type="submit"
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-gray-900 to-black group-hover:from-gray-700 group-hover:to-black hover:text-white dark:text-white focus:outline-none w-full transform group-hover:scale-105 transition-all ease-in duration-75"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md w-full text-white">
                    Sign In
                  </span>
                </button>
              </div>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?
                <Link
                  href="/register"
                  className="font-medium text-primary-600 hover:underline hover:text-black"
                >
                  <span className="ml-1"> Sign up</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
