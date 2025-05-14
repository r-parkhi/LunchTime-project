import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import './index.css'
import AppLayout from "./layouts/AppLayout.jsx"
import About from "./pages/about/About.jsx"
import Calendar from "./pages/calendar/Calendar.jsx"
import Help from './pages/help/Help.jsx'
import Home from './pages/home/Home.jsx'
import Info from "./pages/info/Info.jsx"
import Feedback from "./pages/feedback/feedback.jsx"

const client = new ApolloClient({
  uri: "https://api.isitesoftware.com/graphql",
  cache: new InMemoryCache()
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />} >
            <Route index element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Help />} />
            <Route path="/info/:id" element={<Info />} />
            <Route path="/feedback" element={<Feedback />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>,
)
