import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, SignIn, SignUp, About, Profile, NotFound, Contact } from './pages'
import Header from './components/Header'
import Blogs from './pages/Blogs'
import NewBlog from './pages/NewBlog'
 

 const App = () => {
   return (
     <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home  Firstname="Prince" lastname="Dimkpa"/>} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/new-blog' element={<NewBlog />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
     </div>
   )
 }
 
 export default App