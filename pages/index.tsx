import type { NextPage } from "next";
import Head from "next/head";

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
        <header className="flex justify-between border border-b-neutral-50  items-center px-2 py-3">
          <h2 className="text-emerald-500 text-3xl font-bold">Polycity</h2>
          <a
            href="#"
            className="py-1 px-3 rounded-full font-semibold text-emerald-500 border border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all ease-in"
          >
            Enter app
          </a>
        </header>
      </main>
    </div>
  );
};

export default Home;
