import { useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import AuthPage from './pages/AuthUser';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? <Chat /> : <AuthPage setUser={setUser}/>}
    </div>
  );
}

export default App;
