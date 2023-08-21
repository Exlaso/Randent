"use client";
import NavBar from "@/components/NavBar";
import { motion } from "framer-motion";
import { useState } from "react";
const Page = () => {
  interface Probobj {
    name: string;
    probability: number;
    gender: string;
    count: number;
  }
  const [name, setname] = useState<string>();
  const [GenderProb, setGenderProb] = useState<Probobj>();
  const [isbtnloading, setIsbtnloading] = useState<boolean>(false);
  const FetchJoke = async () => {
    const res = await fetch(`https://api.genderize.io?name=${name}`);
    const data: Probobj = await res.json();
    if (data.gender === null) {
      
      setGenderProb({ name: `${name}`,gender: "Can't Predict the Gender for this Name",probability:0,count: 0});
    }else{

      setGenderProb(data);
    }
    setIsbtnloading(false);
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="py-[15vh] flex justify-center flex-col items-center gap-3">
        <h1 className="text-2xl font-bold text-center">Gender Predictor</h1>
        <input
          type="text"
          name="Name"
          id="Name"
          value={name}
          placeholder="Enter Your Name"
          onInput={(e: any) => {
            setname(e.target.value);
          }}
          className="p-3 bg-transparent underline-offset-8 underline focus:border-0 focus:border-b focus:border-black focus:outline-none border-b border-black"
        />
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
              {GenderProb?.gender ? (
                <>
                  <h1>Name : {GenderProb?.name}</h1>
                  <h1>Gender :  {GenderProb?.gender}</h1>
                  <h1>Probability : {GenderProb?.probability}/1</h1>
                  <h1>Count :  {GenderProb?.count}</h1>
                </>
              ) : (
                "Welcome to Random Cat Fact Generator "
              )}
              <br />
              {GenderProb?.gender
                ? ""
                : "Click on button 'Generate Fact' to Get a Fact"}
            </h2>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
