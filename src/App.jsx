import { useState } from 'react'
import QrCode from './components/QrCode'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <QrCode />
    </div>
  )
}

export default App
