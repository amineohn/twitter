import type { NextPage } from "next";
import React from "react";
import Sidebar from "../components/sidebar";
const Home: NextPage = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-3">
          <Sidebar />

          <div className="w-[600px] h-screen">
            <div className="text-white h-44">
              <div className="flex justify-between px-3.5 py-2.5">
                <h1 className="font-bold text-xl">Home</h1>
                <button className="px-2 py-2 rounded-full hover:bg-white/10 transition">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                    className="h-5 w-5 fill-current text-white"
                  >
                    <g>
                      <path
                        fill="currentColor"
                        d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"
                      ></path>
                    </g>
                  </svg>
                </button>
              </div>
              <div className="px-4 py-2">
                <div className="inline-flex space-x-3">
                  <img
                    src="https://avatars.githubusercontent.com/u/38817327?v=4"
                    alt="logo"
                    className="h-12 w-12 rounded-full"
                  />
                  <input
                    type="text"
                    className="w-full bg-black focus:outline-none text-white placeholder-gray-600 text-xl"
                    placeholder="What's happening"
                  />
                </div>
              </div>
            </div>
            <div className="border-t border-t-neutral-700 h-full"></div>
          </div>

          <div className="w-full h-screen">
            <div className="border-l border-l-neutral-700 h-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
