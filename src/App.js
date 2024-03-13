import { Col, Container, Row } from "react-grid-system";
import Cabecalho from "./components/Cabecalho";
import CampoTexto from "./components/CampoTexto";
import Card from "./components/Card";
import { Estilos } from "./components/EstilosGlobais/Estilos";
import ProvedorTema from "./components/ProvedorTema";
import Rodape from "./components/Rodape";
import Tipografia from "./components/Tipografia";


function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Cabecalho />
      <Container>
        <Row justify="center">
          <Col lg={6}>
            <Card >
              <Tipografia variante='h1' componente='h1'>
                freelando
              </Tipografia>
              <Tipografia variante='body' componente='body'>
                Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
              </Tipografia>
              <CampoTexto titulo='Nome Completo' />
            </Card>
          </Col>
        </Row>
        <Rodape />
      </Container>
    </ProvedorTema >
  );
}

export default App;
