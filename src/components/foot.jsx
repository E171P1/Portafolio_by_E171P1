import { Github, Youtube } from "react-bootstrap-icons";
import { Dropdown, Container } from "react-bootstrap";

function Foot() {
    return (
      <div>

      
      
      <Container className="text-center">
      <Youtube className="m-1" size={75}/>
      <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">Youtube</Dropdown.Toggle>
        
        <Dropdown.Menu>
          <Dropdown.ItemText>En produccion</Dropdown.ItemText>
        </Dropdown.Menu>
        </Dropdown>
        </Container>

      
      

      <Container className="text-center">
      <Github className="text-center aling-top m-3" size={76} />
      <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">GitHub</Dropdown.Toggle>
        
        <Dropdown.Menu>
          <Dropdown.ItemText>https://github.com/E171P1</Dropdown.ItemText>
        </Dropdown.Menu>
        </Dropdown>
        </Container>

      </div>
    )
}

export default Foot;