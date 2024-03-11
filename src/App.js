import { Card } from "./components/Card";
import { Estilos } from "./components/EstilosGlobais/Estilos";
import ProvedorTema from "./components/ProvedorTema";
import Tipografia from "./components/Tipografia";


function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Card>
        <Tipografia variante='h1' componente='h1'>
          freelando
        </Tipografia>
        <Tipografia variante='body' component='body'>
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
        </Tipografia>
      </Card>
    </ProvedorTema >
  );
}

export default App;
