import './Footer.scss';
export default function Footer() {

    const anio = new Date().getFullYear();
    return(
    <>
        <hr />
            <footer className="piedePagina">
                <div className="logo">
                    <h1>AIRWAY</h1>
                    <h2>LINES</h2>
                </div>
                <div className="derecha">
                    <h1>Parcial Final</h1>
                    <h2>René Alexander Rivera Hernández</h2>
                    <h2>Derechos reservados {anio}</h2>
                </div>
            </footer>
        </>
    )
}