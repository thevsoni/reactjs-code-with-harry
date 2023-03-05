import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


let name = "vishal soni";
function App() {
  return (

    //by default given code
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with vishal soni
    //     </a>
    //   </header>
    // </div>

    //my code
    <>
      <Navbar />
      <TextForm />
    </>
  );
}

export default App;
