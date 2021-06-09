import './HeaderMayor.scss';
import{Link} from 'react-router-dom';

export default function HeaderM(){
    return(
        <header>
            <div className="container">
                <div className="inner">
                    <div className="lema">
                        <h1>HAY DEMACIADAS AVENTURAS AHÍ FUERA ESPERANDO SER VIVIDAS</h1>
                        <button><Link to="/contact" className="target">REGISTRARSE</Link></button>
                    </div>
                </div>
            </div>
        </header>
    )
}