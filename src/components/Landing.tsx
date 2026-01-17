import { Link } from 'react-router-dom'

function Landing() {
  return (
    <main className="landing">
      <header className="landing__header">
        <h1>Focus Timer</h1>
        <p className="landing__subtitle">A clean, simple timer to stay on track.</p>
      </header>

      <section className="landing__content">
        <p>
          Set your countdown, start the timer, and stay focused. Minimal UI,
          keyboard-friendly controls, and responsive design.
        </p>

        <div className="landing__actions">
          <Link className="btn btn-primary" to="/timer">Start Timer</Link>
        </div>
      </section>

      <footer className="landing__footer">
        <small>Built with Vite + React</small>
      </footer>
    </main>
  )
}

export default Landing
