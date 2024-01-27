import Header from './components/Header';
import Section from './components/Section';
import Body from './components/Body';
import Footer from './components/Footer';
import Page404 from './components/Page404';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<><Header /><Body /><Footer /></>} />
        <Route path="/section" element={<><Header /><Section /><Body /><Footer /></>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
