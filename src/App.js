import './App.css';
import Todo from './Todo/Todo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Todo />
      <ToastContainer className="foast-Container" />
    </div>
  );
}

export default App;
