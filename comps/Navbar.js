import Styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <>
        <nav className="nav">
            <div className="logo">
                <Image width={200} height={70} src="/logo.svg" alt="logo"/>
            </div>
           <Link href='/'><a>Home</a></Link> 
           <Link href='/about'><a>About</a></Link>
           <Link href='/lister'><a>Lists</a></Link>
        </nav>
        </>
     );
}
 
export default Navbar;
