import { Link } from 'react-router-dom'
import './nav.css'
export default function  Nav(props) {
        
    return(
        <>
                <nav>
                    <div className="ancres">
                        <Link className='link' to={'/'}>Home</Link>
                        <Link className='link' to={'/produits'}>Produits</Link>
                    </div>
                </nav>
        </>
    )
}