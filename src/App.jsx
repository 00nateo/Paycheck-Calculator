import { useState } from 'react'
import './App.scss'
import {Routes, Route} from 'react-router-dom'
import  Main  from './components/Main'
import  Desired  from './components/Desired'
import  Default  from './components/Default'


function App() {
  return (
    <>
      <Routes>
        <Route index element = {<Main />}/>
        <Route path = '/' element = {<Main />} />
        <Route path = '/desired' element = {<Desired />} />
        <Route path = '/default' element = {<Default />} />

      </Routes>
    </>
  )
}

export default App
