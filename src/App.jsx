import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Projects from './pages/Projects'
// import IPhoneProj from '/src/projectPages/iPhone/IPhoneProj'





function App() {
  
  return(
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />   
                  {/* <Route path='/iphoneProject' element={<IPhoneProj />} /> */}
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>

      </Router>
    </main>
  )

}

export default App
