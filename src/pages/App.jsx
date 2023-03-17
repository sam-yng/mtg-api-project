import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from '../components/Nav'
import Cards from '../components/Cards'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Battle = React.lazy(() => import('./Battle'))
const Collection = React.lazy(() => import('./Collection'))

function App() {
  return (
   <Router>
      <div className='p-10'>
        <Nav />
        <Routes>
            <Route path='/' element={<Cards />} />
            <Route path='/Battle' element={<Battle />} />
            <Route path='/Collection' element={<Collection />} />
        </Routes>
      </div>
   </Router>
  );
}

export default App;
