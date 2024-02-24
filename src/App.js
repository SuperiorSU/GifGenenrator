// import logo from './logo.svg';
import './App.css';
import Random from './Components/Random';
import InputGif from './Components/InputGif';

function App() {
  return (
    <div className="App ">
      <h1 className='text-center p-4 text-yellow-400 font-bold text-[32px] te'>Welcome to GIF Generator</h1>
      <div className='h-[1px] w-[90%] m-auto bg-slate-600 opacity-50'></div>  
      <div className='flex flex-wrap'>
        <Random/>
        <InputGif/>
      </div> 
    </div>
  );
}

export default App;
