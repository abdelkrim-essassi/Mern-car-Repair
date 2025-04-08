import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { Header,Footer } from './section/index';
import { Container } from './components/index';
import {Login,SignUp} from'./page/Index'
function App() {
  return (
    <>
    <Router>
      
      {/* <Header/> */}
      <Container>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </Container>
      
      {/* <Footer/> */}
      
      </Router>
      </>
  );
}

export default App;
