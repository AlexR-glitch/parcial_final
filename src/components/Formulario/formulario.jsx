import {isEmpty, isEmail} from 'validator';

export default function Formulario(){
    return(
        <section className="contactado">
            <div className="redes">
                <h1>Puedes contactarnos por nuestras redes sociales</h1>
                <div className="social">
                    <i className="fab fa-instagram-square"></i>
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-instagram-square"></i>
                    <i className="fab fa-twitter-square"></i>
                </div>
            </div>
            <div className="forma">
                <input type="text" name="" placeholder="Nombre" id="" />
                <input type="text" name="" placeholder="Apellidos" id="" />
                <input type="email" name="" placeholder="Email" id="" />
                <textarea name="texto" id="" cols="2" rows="9" placeholder="Escriba algo..."></textarea>
                <input type="submit" value="Enviar" className="send" />
                <div className="error">
                    <span>Error:</span>Mensaje de ejemplo*
                </div>
            </div>
        </section>
    )
}