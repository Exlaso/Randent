"use client";
import { GetMiniProjects } from "@/lib/Data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const MiniProjectContainers = () => {
  const MiniProjects: {
    title: string;
    href: string;
    desc: string;
    imgurl: string;
  }[] = GetMiniProjects();

  return MiniProjects.map((MP, i) => (
    <Link
      key={i}
      className="w-full h-full flex justify-center items-center"
      href={MP.href}
    >
      <motion.div
        initial={{ y: 0 }}
        whileHover={{ y: -5 }}
        className="min-h-[12vh] w-full bg-slate-500 gap-5 rounded-lg flex flex-col p-10 justify-center items-center"
      >
        <Image
          alt={MP.title}
          width={100}
          className="rounded-3xl"
          height={100}
          src={MP.imgurl}
        />
        <h1 className="text-center text-xl font-bold">{MP.title}</h1>
        <p className="text-center">{MP.desc}</p>

        <p></p>
      </motion.div>
    </Link>
  ));
};

export default MiniProjectContainers;
