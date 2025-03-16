import "./Magi.css"

function Dashboard() {
  return (
    <div>
    <header className="container">
        <h1>S.C. Magi System</h1>
        <p>Kernel Version: 3.16.0-30-generic</p>
      </header>

      <section className="container">
        <div id="clock">00:00:00</div>
      </section>

      <section className="container">
        <h2>Barra de Progreso</h2>
        <div className="progress-container">
          <div className="progress-bar" id="progress-bar">0%</div>
        </div>
      </section>

      <section className="container">
        <h2>Alertas</h2>
        <div id="alert-box">
          Sistema operativo en funcionamiento.
        </div>
      </section>

      <section className="container">
        <h2>Información de CPU (Casper)</h2>
        <div className="hexagon">
          <div className="hex-item">Freq: 2800 MHz</div>
          <div className="hex-item">Temp: 53°C</div>
          <div className="hex-item">Load: 46%</div>
        </div>
      </section>

      <section className="container">
        <h2>Uso de Disco</h2>
        <ul>
          <li>CASPER: 77% (4.73GiB / 27.96GiB)</li>
          <li>Música: 99% (480MiB / 299GiB)</li>
          <li>Videos: 99% (1.63GiB / 36GiB)</li>
        </ul>
      </section>

      <footer className="container">
        <p>IPv4: 192.168.50.254</p>
        <p>Down: 24.7KiB/s, Up: 56.0KiB/s</p>
      </footer>
    </div>
  );
}

export default Dashboard;