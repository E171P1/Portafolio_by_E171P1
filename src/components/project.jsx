import { Card } from 'react-bootstrap';
import '../styles/project.css'
import blanco from '../assets/images/blanco.png'
//import objetivo from '../assets/images/objetivo.gif'


function Project() {
    return (
    <div className="text-center">
        <h1 className='mt-3'>Objetivos:</h1>
        <img src={blanco} style={{width: 400, height: 300 ,padding: 20 }} alt='objetivo' />
        <p className='m-3'>Unos de mis tantos objetivos (especificos de la programacion web)
        seria crear projectos que usen distintos frameworks, librerias y lenguajes.
        Y que obviamente sean projectos interesantes.
        </p>

        

    </div>
    )
}
    export default Project;