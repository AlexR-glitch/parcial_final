import {isEmpty, isEmail} from 'validator';
import {useState} from 'react';
import './Formulario.scss';

export default function Formulario(){

    const[error , setError]= useState({
        estado: false,
        mensaje:''
    });
    const[formulario, setFormulario]=useState({
        nombre: '',
        apellido:'',
        correo:'',
        texto: ""
    })

    function validaDatos(e){
        const{nombre, apellido, correo, texto}= formulario
        e.preventDefault();
        
        if (isEmpty(nombre) || isEmpty(apellido) || isEmpty(correo) || isEmpty(texto)){
            setError({
                estado: true,
                mensaje: 'Rellene los campos'
            })
        } else{
            if (!isEmail(correo)){
                setError({
                    estado: true,
                    mensaje: 'Escriba un correo valido'
                })
            } else{
                setError({
                    estado: false,
                    mensaje: ''
                })
                setFormulario({
                    ...formulario,
                    nombre: '',
                    apellido:'',
                    correo:'',
                    texto: ''
                })
            }
        }
    }

    function capturaDatos(e){
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }

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
                <form onSubmit={validaDatos}>
                <input type="text" name="nombre" placeholder="Nombre" value={formulario.nombre} onChange={capturaDatos}/>

                <input type="text" name="apellido" placeholder="Apellidos" value={formulario.apellido} onChange={capturaDatos}/>

                <input type="email" name="correo" placeholder="Email" value={formulario.correo} onChange={capturaDatos}/>

                <textarea name="texto" id="" cols="2" rows="9" placeholder="Escriba algo..." value={formulario.texto} onChange={capturaDatos}></textarea>

                <button type="submit" className="send">Enviar</button>

                </form>
                {error.estado &&
                    <div className="error">
                        <span>Error:</span>{error.mensaje}
                    </div>
                }
                
            </div>
        </section>
    )
}