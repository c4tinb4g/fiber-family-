import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import MiddleSection from "./components/MiddleSection"
import DecisionTool from "./components/DecisionTool"
import Footer from "./components/Footer"
import "./index.css"

function App() {
  return (
    <main className="page">
      <section className="trace-page">

        <div className="trace-flow">
          <svg className="flow-lines" viewBox="0 0 1440 2600" preserveAspectRatio="none">
            <line x1="180" y1="-100" x2="720" y2="2600" className="flow-line muted" />
            <line x1="320" y1="-100" x2="720" y2="2600" className="flow-line grey" />
            <line x1="470" y1="-100" x2="720" y2="2600" className="flow-line white" />
            <line x1="910" y1="-100" x2="720" y2="2600" className="flow-line gold" />
            <line x1="1080" y1="-100" x2="720" y2="2600" className="flow-line green" />
            <line x1="1260" y1="-100" x2="720" y2="2600" className="flow-line white strong" />
          </svg>

          <div className="hero-frame">
            <Navbar />
            <Hero />
          </div>

          <MiddleSection />
          <DecisionTool />
          <Footer />
        </div>
      </section>
    </main>
  )
}

export default App