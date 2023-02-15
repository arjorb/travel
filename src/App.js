import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  return (
    <div className='flex justify-center mt-10'>
      <div className='w-[550px] rounded-md overflow-hidden shadow-xl'>
        <Navbar />
        <main className='w-[470px] mx-auto my-10'>
          <Card />
        </main>
      </div>
    </div>
  );
}

export default App;
