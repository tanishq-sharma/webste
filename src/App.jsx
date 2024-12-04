import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <div className="container">
      <section className="left-col">
        <Hero />
      </section>

      <section className="right-col">
        <About />
        <Experience />
        <Projects />
        <Footer />
      </section>
    </div>
  )
}

export default App
