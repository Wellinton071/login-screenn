import './App.css';
import Header from './components/Header';
import Welcome from './components/welcome/welcome';

function App() {
  return (
    <body>
      <Header></Header>
      <main className="mainContent">
        <Welcome></Welcome>
      </main>
    </body>
  );
}

export default App;
