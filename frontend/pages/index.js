import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

function Home() {
  return (
    <div>
      <Head>
        <title>P2P Money Transfer</title>
      </Head>
      <div className="text-center">
        <h1>Most conversion user name is <b>dddd</b></h1>
        <Image
          src="https://img.freepik.com/free-vector/mobile-bank-users-transferring-money-currency-conversion-tiny-people-online-payment-cartoon-illustration_74855-14454.jpg?t=st=1664550935~exp=1664551535~hmac=62f9d35e823200d058b6116961465a59348f3afbe50bd07ef62056fe2b1a9166"
          width={800}
          height={500}
        />
      </div>
    </div>
  );
}

export default Home;
