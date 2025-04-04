import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe("pk_test_51R9nLcFaMyrA7bWd1lJd2wYFcI6sJPhEO2BJ78QLb4H9Qk5tYhHzvXOK1YsUpApgUd3CyuJTVz7iAcTMm9b5qeRe00p7v4P5GM");

createRoot(document.getElementById('root')).render(
  

<Elements  stripe={stripePromise}>
<BrowserRouter>
  <App />
  </BrowserRouter>
</Elements>


)
