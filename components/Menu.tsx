import { GetMiniProjects } from "@/lib/Data";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Menu = ({
  isvisible,
  CloseMenu,
}: {
  isvisible: boolean;
  CloseMenu: any;
}) => {
  const MiniProjects: { title: string; href: string }[] = GetMiniProjects();
  return (
    <AnimatePresence>
      {isvisible && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "100%" }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="fixed right-0 text-xl w-1/2 max-md:w-full h-full bg-zinc-950 z-30 text-gray-500 flex justify-evenly items-start list-none flex-col  p-[5vh]"
        >
          <li className="hover:text-gray-300 duration-100 cursor-pointer underline underline-offset-8">
            <Link
              href={"/"}
              onClick={() => {
                CloseMenu(false);
              }}
            >
              Home
            </Link>
          </li>

          {MiniProjects.map((MP) => (
            <li className="hover:text-gray-300 duration-100 cursor-pointer underline underline-offset-8">
              <Link href={MP.href}>{MP.title}</Link>
            </li>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
