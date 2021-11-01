import React from "react"
import { BrowserRouter as Router} from 'react-router-dom';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";


const App = () => {
  return (
    <Router>
      <Header/>
      <Main/>
      <Footer/>
    </Router>
  );
};

export default App;


