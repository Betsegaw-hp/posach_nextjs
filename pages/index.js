import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Home</title>
      <meta name="keyword" content="next app"></meta>
    </Head> 
    <div>
        <h1 className={styles.title}>Homepage </h1>
    </div>
      <p className={styles.text}>lorem epsoim lorem epsoim lorem epsoim lorem epsoim lorem epsoim</p>
      <p className={styles.text}>lorem epsoim lorem epsoim lorem epsoim lorem epsoim lorem epsoim</p>
      <p className={styles.text}>lorem epsoim lorem epsoim lorem epsoim lorem epsoim lorem epsoim</p>
    </>
  )
}
