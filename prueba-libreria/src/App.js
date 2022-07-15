import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer saludos={'Productos'}/>
    </div>
  );
}

export default App;
