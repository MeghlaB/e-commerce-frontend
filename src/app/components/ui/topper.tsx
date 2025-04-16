import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { LogOut, Settings } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/context/AuthProvider";
import { useUserRole } from "@/hooks/useUserRole";

export default function Topbar() {
  const {user}=useAuth()
  console.log(user?.displayName)
  const { role } = useUserRole(user?.email);
  return (
    <section className=" flex items-center justify-between  border px-6 py-4 lg:px-10">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link href="/" className="text-2xl font-bold">
          KinboBD
        </Link>
      </div>
      {/* right side */}
      <div>
        <Popover>
          <PopoverTrigger asChild>
            <div className="flex items-center gap-2 cursor-pointer outline rounded-2xl px-2 w-[150px]">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt={user?.displayName||"user"}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              {/* admin or user or seller */}
              <div className="">
                <h4 className="text-[20px] font-bold"> {user?.displayName?.split(" ")[0] || "Guest"}</h4>
                <h6 className="text-green-400">{`${role?'null' :"user"}`}</h6>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 cursor-pointer px-2">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    {/* <AvatarFallback>CN</AvatarFallback> */}
                  </Avatar>
                  {/* admin or user or seller */}
                  <div>
                    <h4 className="font-medium">Guest {`${role?'null':'user'}`}</h4>
                    <h6 className="text-green-400 font-semibold">Guest</h6>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="pb-2.5 text-[16px] font-semibold">
                  Welcome back {`${role?'null':'user'}`}
                </h1>
                <div className="space-y-2.5">
                  {/* settings */}
                  <Link
                    href="/about"
                    className="flex items-center btn btn-sm gap-2 bg-gray-200 w-[250px] rounded-xl px-4 py-1"
                  >
                    <Settings className="size-5" />
                    <span className="hidden sm:inline">Settings</span>
                  </Link>
                  {/* SignOut */}
                  <Link
                    href="/about"
                    className="flex items-center btn btn-sm gap-2 bg-red-200 w-[250px] rounded-xl px-4 py-1"
                  >
                    <LogOut className="size-5" />
                    <span className="hidden sm:inline">Sign Out</span>
                  </Link>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </section>
  );
}
