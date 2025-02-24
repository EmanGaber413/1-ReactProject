import { Helmet } from "react-helmet"
import { CounterContextProvider } from "./componants/contexts/CounterContext"
import Home from "./componants/landingpage/Home"
import Footer from "./componants/layout/Footer"
import Navbar from "./componants/layout/Navbar"



function App() {
  
  return(<>
  <CounterContextProvider>
  <Navbar />
  <Home/>
  <Footer />
  </CounterContextProvider>
  <Helmet>
  <title>NEWS by Eman 1st React project</title>
</Helmet>

  </>
  )
}

export default App
