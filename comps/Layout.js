import Navbar from './Navbar'
import Footer from './footer'

const Layout = ({ children }) => {
    return ( 
        <section className="layout-container">
            <Navbar />
            { children } 
            <Footer />
        </section>
     );
}
 
export default Layout;