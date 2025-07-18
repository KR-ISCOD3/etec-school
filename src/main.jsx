import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './page/MainPage.jsx'
import { CourseProvider } from './store/CoursesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <CourseProvider>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>

          <Route index element={<MainPage/>}/>

          <Route path='/login' element={<h1>Login</h1>}/>
          <Route path='/register' element={<h1>Login</h1>}/>
        </Route>
        <Route path='/*' element={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
   </CourseProvider>
  </StrictMode>,
)
