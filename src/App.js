import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from './Components/index';
import { Footer, Header } from './sections/index';
import { Home, Profile, Browse } from './Pages/index';
import './index.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Browse' element={<Browse/>}/>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
