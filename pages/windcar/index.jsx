
import * as React from 'react';
import MyCarousel from '../../components/Carousel';


const Example = () => {
    return (
        <div>
            <MyCarousel />
            <div style={{ textAlign: 'center' }}>
                <h3>Windcar / Carrovelismo</h3>
                <h4>INSTRUCCIÓN BLOKART</h4>
                <p>Sentí la libertad y la adrenalina navegando un blokart vos mismo !!!!</p>
                <h4>ACTIVIDAD</h4>
                <p>Instrucción personalizada para iniciarse en la navegación en tierra (land Sailing). Conduciendo un blokart, carros de última generación, diseñados específicamente para rentals e instrucciones.</p>
                <h4>SEGURIDAD</h4>
                <p>Casco / Cinturón de Seguridad / Antiparras
                    Blokart cumple con todas las normas de seguridad homologadas,
                    necesarias para la practica de la actividad.
                </p>
                <h4>LUGAR</h4>
                <p>PAMPA EL LEONCITO (18 kms. de Barreal)
                    Única por su extensión (48 kms 2), condiciones de viento (30 nudos)
                    y un paisaje increíble! (Al pie de Los Andes)</p>
                <h4>Asistencia permanente del Instructor</h4>
                <p>HORARIO DE LA ACTIVIDAD
                    18hs. hasta las 20hs.
                    Está incluído el registro fotografico durante la actividad.</p>
            </div>

        </div>
    )
}

export default Example;