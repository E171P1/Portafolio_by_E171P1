import saludo from '../assets/images/saludo.gif'
import 'typeface-roboto'
import '../assets/fonts/Electrolize/Electrolize-Regular.ttf'

function Home() {
    return (
        <div className="text-center div-principal">
        <h1 className="mt-3">Saludos programadores & frikis de la informatica</h1>

        <p>
            Mi nombre es Augusto, soy fanaticos de varias cosas como:
            la programacion (abarca todo tipo ella), los videjuegos y la historia por su puesto.
            Todo eso sumado a las ganas de aprender, de invobar y mejorar son lo que me conforman 
            para ser un programador.
        </p>

        <img src={saludo} className='p-3' alt='saludo' />

        </div>
    )
}

export default Home;