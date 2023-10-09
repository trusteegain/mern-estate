import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, SignIn, SignUp, About, Profile, NotFound } from './pages'
import Header from './components/Header'
 

 const App = () => {
   return (
     <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
     </div>
   )
 }
 
 export default App