"use client";
import Image from "next/image";
import React, { FC, useState } from "react";
import Menu from "./Menu";
import Link from "next/link";

const NavBar: FC = () => {
  const [menuopen, setMenuopen] = useState(false);
  return (
    <>
      <Menu
        isvisible={menuopen}
        CloseMenu={setMenuopen}
      />
      <nav className="fixed top-0 list-none z-40  w-full  bg-zinc-950 h-[8vh] flex justify-between  items-center px-4">
        <li className="md:hidden"></li>
        <li className="text-xl  rounded-full p-1 ">
          <Link href={"/"}>
            <h2>RANDENT</h2>
          </Link>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              setMenuopen((e) => !e);
            }}
          >
            <Image
              src={`/icons/${!menuopen ? "3lines" : "close"}.png`}
              className="invert "
              alt="Menus"
              width={30}
              height={30}
            />
          </button>
        </li>
      </nav>
    </>
  );
};

export default NavBar;
