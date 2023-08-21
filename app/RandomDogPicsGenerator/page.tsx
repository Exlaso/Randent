"use client";
import NavBar from "@/components/NavBar";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
const page = () => {
  interface dogimageobj {
    message: string;
  }
  const [dogimage, setDogimage] = useState<dogimageobj>({message: 'https://images.dog.ceo/breeds/pinscher-miniature/n02107312_6680.jpg'});
  const [isbtnloading, setIsbtnloading] = useState<boolean>(false);
  const FetchJoke = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data: dogimageobj = await res.json();
    setDogimage(data);
    setIsbtnloading(false);
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="py-[15vh] flex justify-center flex-col items-center gap-3">
        <h1 className="text-2xl font-bold text-center">
          Random Dog Image Generator
        </h1>
        <motion.button
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          type="button"
          onClick={() => {
            FetchJoke();
            setIsbtnloading(true);
          }}
          disabled={isbtnloading}
          className="border w-60 capitalize border-gray-800 p-6 tracking-wider rounded-md bg-orange-400 text-neutral-950 font-bold"
        >
          {isbtnloading ? (
            <div className="custom-loader"></div>
          ) : (
            " Generate Dog Image"
          )}
        </motion.button>
        <section className="w-full py-20 justify-center items-center flex flex-col">
          <div className="w-full justify-center items-center flex flex-col gap-5">
            <Image
            className="shadow-2xl"
              src={`${dogimage?.message?.replace("\/","/")}`}
              height={800}
              width={800}
              alt="Copy Joke"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
