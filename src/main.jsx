import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UseContextProvider from './components/context/UseContextProvider.jsx'
createRoot(document.getElementById('root')).render(
  <UseContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </UseContextProvider>

)
