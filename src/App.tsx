import { XRDisplay } from "./components/XRDisplay";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h1>XR App</h1>
      <section className="container">
        <Router>
          <Routes>
            <Route path="/" element={<XRDisplay />} />
            <Route path="/LearningPractice" element={<XRDisplay />} />
          </Routes>
        </Router>
      </section>
    </>
  )
}

export default App