import './App.css';
import Sidebar from './components/sidebar';
import Header from './components/header';

function App() {
  return (
    <main className='bg-slate-950 min-h-screen text-gray-200'>
      <Header />
      <Sidebar />
    </main>
  );
}

export default App;
