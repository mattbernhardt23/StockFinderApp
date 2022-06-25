import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './components/pages/About';
import Home from './components/pages/Home';
import Notfound from './components/pages/Notfound';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Company from './components/pages/Company';
import {CompanyProvider} from './context/CompanyContext'

function App() {
  return (
    <CompanyProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/company/:symbol' element={<Company/>} />
            <Route path='/notfound' element={<Notfound/>} />
            <Route path='/*' element={<Notfound/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </CompanyProvider>
  );
}

export default App;
