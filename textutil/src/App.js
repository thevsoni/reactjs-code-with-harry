import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


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

      {/* previously in version 5 ,we were using switch
      </Router>
      <Navbar />
      <Switch>
        <Route path=''></Route>
        <Route path=''></Route>
        <Route path=''></Route>
      </Switch>
      and also we had to use <Router></Router> then need to write everything inside this and we had return
      actually this 
      </Router>*/}


      <BrowserRouter>
        <Navbar h1="h1111" h2="h2222222" h3="h3333333" />
        <Routes>
          <Route path="/" element={<TextForm />}></Route>
          {/* <Route exact path="/" element={<TextForm />}></Route> */}
          {/* <Route path='/'>
            <TextForm /> // we cant write like this
          </Route> */}
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<TextForm />}></Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
