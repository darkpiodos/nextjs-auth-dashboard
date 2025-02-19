"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

const UserInfo = () => {
  const { data: session } = useSession();
  return (
    <section className="bg-gradient-to-r from-violet-200 to-pink-200">
      <div className="flex flex-col items-center justify-center  mx-auto md:h-screen lg:py-0 ">
        <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          {" "}
          <div className="flex flex-col items-center px-6 py-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-5">
              Welcome to Dashboard!
            </h1>
            <FaUserCircle className="w-24 h-24 mb-3 rounded-full shadow-lg text-gray-400 dark:text-gray-500" />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {session?.user?.name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {session?.user?.email}{" "}
            </span>
            <div className="flex mt-4 md:mt-6 space-x-3 w-full">
              <div className="group transition-all ease-in duration-75 w-full">
                <button
                  onClick={() => signOut()}
                  type="submit"
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-gray-900 to-black group-hover:from-gray-700 group-hover:to-black hover:text-white dark:text-white focus:outline-none w-full transform group-hover:scale-105 transition-all ease-in duration-75"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md w-full text-white">
                    Logout{" "}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
