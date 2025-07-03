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
          <p>email: info@peopleanddata.com.au</p>        
        </section>

      </main>

      <footer>
        <p>© {new Date().getFullYear()} People & Data. All rights reserved.</p>
        <p>Katoomba, NSW, Australia</p>
      </footer>
    </div>
  );
}

export default App;