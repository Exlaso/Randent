"use client";
import NavBar from "@/components/NavBar";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
const Page = () => {
  interface jokeobj {
    type: string;
    setup: string;
    punchline: string;
  }
  const [joke, setJoke] = useState<jokeobj>();
  const [isbtnloading, setIsbtnloading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const FetchJoke = async () => {
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data: jokeobj = await res.json();
    setJoke(data);
    setIsbtnloading(false);
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="py-[15vh] flex justify-center flex-col items-center gap-3">
        
        <h1 className="text-2xl font-bold text-center">
          Random Joke Generator
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
            " Generate joke"
          )}
        </motion.button>
        <section className="w-full py-20 justify-center items-center flex flex-col">
          <div className="w-full justify-center items-center flex flex-col gap-5">
            <h2 className="min-h-[15vh] text-center p-4 bg-yellow-700 w-full justify-center items-center flex flex-col">
              {joke?.setup ? joke?.setup : "Welcome to Random Joke Generator"}
            </h2>
            <h2 className="min-h-[15vh] text-center p-4 bg-slate-700 w-full justify-center items-center flex flex-col">
              {joke?.punchline
                ? joke?.punchline
                : "Click on button 'Generate Joke' to Make a joke "}
            </h2>
            {joke?.setup && (
              <motion.button
                initial={{ scale: 1 }}
                whileTap={{ scale: 0.85 }}
                type="button"
                disabled={copied}
                onClick={async () => {
                  await navigator?.clipboard?.writeText(
                    `${joke.setup} ${joke.punchline}`
                  );
                  setCopied(true);
                  setTimeout(() => {
                    setCopied(false);
                  }, 5000);
                }}
              >
                <Image
                  src={copied ? "/icons/check.png" : "/icons/copy.png"}
                  height={40}
                  width={40}
                  alt="Copy Joke"
                />
              </motion.button>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
