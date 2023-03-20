import escribir from '../assets/images/escribir.gif';

function About() {
    return (
        <div className="text-center">
            <h1 className='mt-3'>Mas detalles sobre mi</h1>

            <img src={escribir} className='p-3' alt='escribir' />

            <p className='m-3'>Hola mi nombre es Augusto, soy de Argentina y tengo 15 años.
            Me gusta mucho la informatica en general, soy fanatico de la historia y de los videojuegos.
            Tambien me gusta mucho leer e informarme mucho en internet y en plataformas como Youtube, Reddit o blogs.
            Desde chiquito me gusta las computadoras... hablando de eso tambien tengo conocimientos de armado y reparacion de
            computadoras, sumado que uso una distribucion ( En especifico Arco Linux ) y tengo conocimientos de otras como 
            Ubuntu, Debian, Arch, Linux Lite, Lubuntu, Arch Craft, Manjaro y finalmente Arco Linux.
            Tambien maneje servidores de Linux ( me olvide que tambien manejo Git ) y maneje software de estos como Apache y Nginx.</p>
        </div>
    )
}

export default About;