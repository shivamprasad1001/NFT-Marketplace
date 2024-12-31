import Image from "next/image";
import Header from "./components/header/Header";
import styles from "./page.module.css";
import Footer from "./components/footer/Footer";
import Link from "next/link";
export default function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.hero}>
        <div>
          <h1 className={styles.heading}>
          Discover, Collect, and Sell Extraordinary NFTs
          </h1>
          <p className={styles.description}>
          Your gateway to the world of digital art and unique assets. Join the revolution where creators and collectors come together
          </p>
          <div className={styles.btns}>
            <Link
              href="/marketplace"
              className={`${styles.btn} ${styles.buyBtn}`}
            >
              Buy Now!
            </Link>
            <Link href="/sellNFT" className={styles.btn}>
              List Now!
            </Link>
          </div>
        </div>
        <Image src="/pic1.jpg" alt="NFTs" width={1075} height={650} />
      </div>
      <Footer />
    </div>
  );
}
