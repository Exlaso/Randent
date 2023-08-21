"use client";
import NavBar from "@/components/NavBar";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
const page = () => {
  interface Catobj {
    fact: string; 
  }
  const [catdata, setCatdata] = useState<Catobj>();
  const [isbtnloading, setIsbtnloading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const FetchJoke = async () => {
    const res = await fetch(
      "https://catfact.ninja/fact"
    );
    const data: Catobj = await res.json();
    setCatdata(data);
    setIsbtnloading(false);
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="py-[15vh] flex justify-center flex-col items-center gap-3">
        <h1 className="text-2xl font-bold text-center">
          Random Cat Fact Generator
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
            " Generate Fact"
          )}
        </motion.button>
        <section className="w-full py-20 justify-center items-center flex flex-col">
          <div className="w-full justify-center items-center flex flex-col gap-5"> 
            <h2 className="min-h-[15vh] p-4 bg-yellow-700 w-full justify-center items-center flex text-center flex-col">
              {catdata?.fact ? catdata?.fact : "Welcome to Random Cat Fact Generator "}<br />
              {catdata?.fact ? '': "Click on button 'Generate Fact' to Get a Fact"}
            </h2>
            
            {catdata?.fact && (
              <motion.button
                initial={{ scale: 1 }}
                whileTap={{ scale: 0.85 }}
                type="button"
                disabled={copied}
                onClick={async () => {
                  await navigator?.clipboard?.writeText(
                    `${catdata.fact}`
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

export default page;
