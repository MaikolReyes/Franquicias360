import swal from 'sweetalert'

export const Form = () => {
    const sendForm = () => {
        swal({
            title: 'Tu consulta fue enviada',
            text: "Gracias por Contactarte",
            icon: "success"
        })
    }

    return (

        // Form for contact whit company
        <div className="backgroundForm" id='contacto' >
            <div>
                <h3 className="textSectionForm1">Impulsa el alcance de tu <span className="textResaltForm">Franquicia</span></h3>
                <h3 className="textSectionForm2">¿Trabajamos juntos?</h3>
            </div>

            <form className="formularioConsultas" onSubmit={sendForm} action="https://formsubmit.co/sofia@vilkas.com.ar" method="POST">
                <label htmlFor="nombre" className="textForm">Nombre</label>
                <input type="text" name="Nombre" required className="labelForm rounded" />

                <label htmlFor="correo" className="textForm">Correo Electronico</label>
                <input type="email" name="Correo Electronico" required className="labelForm rounded" />

                <label htmlFor="mensajes" className="textForm">Cuéntanos un poco sobre tu proyecto</label>
                <textarea name="Mensajes" required id="" cols="30" rows="10" className="labelFormTextarea rounded"></textarea>


                <button type="submit" className="buttonForm mb-5 mx-auto">ENVIAR FORMULARIO</button>
                <input type="hidden" name="_next" value="http://127.0.0.1:5173" />
                <input type="hidden" name="_captcha" value='false' />

            </form>
        </div >
    )
}
