import logo from './logo.svg';
import pepe from './pepe.png'
import './App.css';
import {useEffect} from "react";
import {db} from "./Firebase";
import {doc,setDoc} from 'firebase/firestore'

function App() {

  useEffect(()=>{
    console.log("firebase added (y)")

    // Firebase add Test

    // const cityRef = doc(db, 'cities', 'BJ');
    // setDoc(cityRef, {capital: true}, {merge: true}).then(r =>{
    //   console.log(r)
    // });

   },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={pepe} className="App-logo" alt="logo" />
        <p>
          <code>UI</code> er kaj choltese vai wait koren
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React to help us :")
        </a>
      </header>
    </div>
  );
}

export default App;
