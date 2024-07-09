import Image from "next/image";
import Link from "next/link";
import React from "react";
import dpwhLogo from '../../public/dpwhLogo.png'
export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-5 bg-zinc-200">
      <div className="flex-1">
        <Link href={"/"} className={`text-md font-[600] text-zinc-600 flex gap-5`}>
          <Image src={dpwhLogo} alt="DPWH Logo.png"  width={40} height={40}/>
          <b className="text-orange-500 my-auto"></b>
        </Link>
      </div>
      {/* <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-xs">
          <li>
            <details>
              <summary className="border hover:border-zinc-700">Menu</summary>
              <ul className="p-2 bg-base-100 rounded-t-none w-40 primary-text text-xs border border-zinc-300">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/documentation"}>Documentation</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div> */}
    </div>
  );
};
