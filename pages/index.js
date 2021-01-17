import tw from 'twin.macro'
import Head from "next/head";
import Game from "../src/components/Game";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main tw='container mx-auto p-4'>
        <h1 tw='font-thin text-4xl'>Dino Party Solver</h1>
        <Game />
      </main>
    </div>
  );
}
