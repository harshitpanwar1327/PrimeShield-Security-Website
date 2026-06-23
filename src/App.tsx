import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import SocialLinks from './components/SocialLinks'
import Home from './pages/Home'  //never lazy load home page, as it is the most visited page and we want it to load as fast as possible

const Header = lazy(() => import('./components/Header'))
const Footer = lazy(() => import('./components/Footer'))
const About  = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Industries = lazy(() => import('./pages/Industries'))
const Training = lazy(() => import('./pages/Training'))
const Contact = lazy(() => import('./pages/Contact'))
const ScrollToTop = lazy(() => import('./components/ScrollToTop'))
const BackToTopButton = lazy(() => import('./components/BackToTopButton'))

function App() {
  return (
    <main id='main-content'>
      <Suspense fallback={<div className='flex justify-center items-center w-screen h-screen'>Loading...</div>}>
        <Header />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contact" element={< Contact />} />

          {/* ANY UNKNOWN ROUTE */}
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>

        <SocialLinks />
        <BackToTopButton />
        <Footer />
      </Suspense>
    </main>

  )
}

export default App