import Head from "next/Head"
import styles from '../styles/Home.module.css'
import { Button } from '@material-ui/core'
import Link from 'next/link'

const Bible = () => {
    return ( 
    <>
    <Head>
        <title> Next | About</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
    </Head>
    <div>
        <h1 className={styles.title}>About </h1>
    </div>
    <div>
        <p className={styles.text}>Lorem epsom lorem epsoim lorem epsoim lorem epsoim lorem epsoim</p>
        <p className={styles.text}>Lorem epsom lorem epsoim lorem epsoim lorem epsoim lorem epsoim</p>
        <p className={styles.text}>Lorem epsom lorem epsoim lorem epsoim lorem epsoim lorem epsoim</p>

    </div>
    <Link href='/' passHref={true}>
        <Button  color="primary"
                 size="small"
                 variant="outlined">
            Go back To Home
        </Button>
        </Link>
    </>
        
     );
}
 
export default Bible;
