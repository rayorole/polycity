import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { MenuIcon } from "@heroicons/react/outline";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Polycity</title>
        <meta
          name="description"
          content="NFT based app for buying real estate"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className="flex justify-between bg-gray-900 text-sky-300 text-3xl font-black items-center px-3 py-4">
          <h2>Polycity</h2>
          <MenuIcon className="w-6 h-6 text-white" />
        </header>
      </main>
    </div>
  );
};

export default Home;
