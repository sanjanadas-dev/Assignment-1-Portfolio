import "./App.css";

function Header() {
  return (
    <header>
      <h1>My Portfolio</h1>

      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <section id="home">
      <img className="profile-photo" src="/profile.jpg" alt="Sanjana Das" />
      <h2>Hello, I'm Sanjana Das</h2>
      <p>Welcome to my personal portfolio.</p>
      <p>I am a BCA student interested in technology and programming.</p>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        I am a BCA student who is learning programming and web development.
        I enjoy learning new technologies and improving my technical skills.
      </p>
    </section>
  );
}

function Education() {
  return (
    <section id="education">
      <h2>Education</h2>

      <div className="card">
        <h3>Bachelor of Computer Applications (BCA)</h3>
        <p>Currently pursuing BCA</p>
      </div>

      <div className="card">
        <h3>Higher Secondary</h3>
        <p>Completed Higher Secondary Education</p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills">
        <span>Python</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React</span>
        <span>MS Office</span>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <p>Email: dassanjana184@gmail.com</p>
      <p>Phone: 9883450273</p>
      <p>Location: Kolkata, West Bengal, India</p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2026 Sanjana Das. All Rights Reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />

      <main>
        <Home />
        <About />
        <Education />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;