import { useState } from 'react'
import './App.css'
import Hedaer from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
      <div>
        <Header />
        <main>
          <Hero />
        </main>
      </div>
  )
}

export default App
