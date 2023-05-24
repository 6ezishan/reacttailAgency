import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>  
      
      <Route path="/about">
        <About />
      </Route>  

      <Route path="/services">
        <Services />
      </Route>  

      <Route path="/testimonial">
        <Testimonial />
      </Route>  

      <Route path="/contact">
        <Contact />
      </Route> 

      </Switch>
      
      <Footer />
    </div>
    </Router>
  );
}

export default App;
