import './App.css';
import Sidebar from './components/sidebar';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

function App() {
  return (
    <main className='min-h-screen text-sm w-full'>
      <Header />
      <div className='flex items-start justify-start bg-gray-50'>
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </main>
  );
}

export default App;
