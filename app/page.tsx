import MiniProjectContainers from "@/components/MiniProjectContainers";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="py-[15vh] px-[10vw]">
        <div className="flex gap-10 flex-col">
          <h1 className="text-center text-2xl font-bold">
            These little apps for fun were made with APIs.
          </h1>
          <MiniProjectContainers />
        </div>
      </main>
    </>
  );
}
