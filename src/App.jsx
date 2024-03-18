import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Layout from './component/Layout'
import Invoices from './component/Invoices'


function App() {
  const [count, setCount] = useState(0)

  return (

    <>
        <Layout>
        <Invoices />
      </Layout> 
    </>
  )
}

export default App
