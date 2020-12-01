import { useState } from 'react';
import Menu from './Menu';
import UserViewer from './UserViewer';
import './App.css';

function App() {
  const [id, setId] = useState(1)

  return (
    <div className="App">
      <Menu />
      <main>
        <UserViewer id={id} />
        <button onClick={() => setId(id + 1)}>Siguiente</button>
        <button onClick={() => setId(id - 1)}>Anterior</button>
      </main>
    </div>
  );
}

export default App;
