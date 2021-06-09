import{Link} from 'react-router-dom';
import './Menu.scss'

export default function Menu() {
    return(
        <nav className="menu">
                <div className="logo">
                    <h1>AIRWAY</h1>
                    <h2>LINES</h2>
                </div>
            <div className="enlaces">
                <Link to="/" className="cadena">Home</Link>
                <Link to="/About" className="cadena">Acerca de</Link>
                <Link to="/contact" className="cadena">Contacto</Link>
            </div>
        </nav>
    )
}