import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="container">
      <header>
        <img src="/logo.png" alt="People & Data Logo" className="logo" />
      </header>

      <main>
        <section className="what-we-do">
          <h1>What We Do</h1>
          <p>
            At People & Data, we empower organisations through data-driven insights and strategic human-centred solutions.
            From systems integration to analytics, we bridge the gap between people and technology.
          </p>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} People & Data. All rights reserved.</p>
        <p>123 Innovation Road, Sydney, NSW, Australia</p>
        <p>ABN: 12 345 678 901</p>
      </footer>
    </div>
  );
}

export default App;