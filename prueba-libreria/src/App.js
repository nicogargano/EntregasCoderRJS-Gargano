import logo from './logo.webp';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer saludos={'Buenas!'}/>
    </div>
  );
}

export default App;
