import { useState } from 'react'
import './App.css'
import SideNav from './components/SideNav'
import Main from './components/Main'

function App() {
  return (
      <div>
        <SideNav />
        <main>
          <Main />
        </main>
      </div>
  )
}

export default App
