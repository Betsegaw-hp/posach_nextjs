import Styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <>
        <nav className="nav">
            <div className="logo">
                <Image width={70} height={65} src="/Git-Icon.png" alt="logo"/>
            </div>
           <Link href='/'><a>Home</a></Link> 
           <Link href='/about'><a>About</a></Link>
           <Link href='/lister'><a>Lists</a></Link>
        </nav>
        </>
     );
}
 
export default Navbar;
