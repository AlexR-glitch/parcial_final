import{useState, useEffect} from 'react';
import{Link} from 'react-router-dom';
import './MenuMovil.scss'

export default function MenuMovil() {

    const[menu, setMenu] = useState(false);

    useEffect(()=>{
    document.addEventListener('keydown', filtrarTecla)
    // eslint-disable-next-line 
    },[])

    function aMenu(){
        setMenu(!menu);
    }
    function filtrarTecla(e) {
        if(e.code=='Escape' && menu){
            aMenu();
        }
    }

    return(
        <>
            <nav className="menumovil">
                <div className="contenedor">
                    <div className="logo">
                        <h1>AIRWAY</h1>
                        <h2>LINES</h2>
                    </div>
                    <div className="btn" onClick= {aMenu}>
                        {menu ?
                        <i className="fas fa-times"></i>
                        :
                        <i className="fas fa-bars"></i>}
                    </div>
                </div>
            </nav>
            <div className= {`blur ${menu ? 'activo':''}`} onClick={aMenu}></div>
            <div className= {`enlacesmoviles ${menu ? 'activo':''}`} >
                <Link to="/" className="cadena" onClick={aMenu}>Home</Link>
                <Link to="/About" className="cadena" onClick={aMenu}>Acerca de</Link>
                <Link to="/contact" className="cadena" onClick={aMenu}>Contacto</Link>
            </div>
        </>
    )
}