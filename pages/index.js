const App = () => (
  <div style={styles.container}>
    {/* Header */}
    <header style={styles.header}>
      <h1 style={styles.logo}>MinhaLandingPage</h1>
      <nav>
        <a href="#features" style={styles.navLink}>Recursos</a>
        <a href="#about" style={styles.navLink}>Sobre</a>
        <a href="#contact" style={styles.navLink}>Contato</a>
      </nav>
    </header>

    {/* Hero Section */}
    <main style={styles.hero}>
      <h2 style={styles.heroTitle}>Bem-vindo à MinhaLandingPage</h2>
      <p style={styles.heroSubtitle}>Explore serviços e produtos incríveis feitos para você.</p>
      <button style={styles.button}>Comece Agora</button>
    </main>

    {/* Footer */}
    <footer style={styles.footer}>
      <p>&copy; 2024 MinhaLandingPage. Todos os direitos reservados.</p>
    </footer>
  </div>
);

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    textAlign: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navLink: {
    color: '#fff',
    margin: '0 10px',
    textDecoration: 'none',
  },
  hero: {
    padding: '100px 20px',
    backgroundColor: '#f9f9f9',
  },
  heroTitle: {
    fontSize: '36px',
    margin: '20px 0',
  },
  heroSubtitle: {
    fontSize: '18px',
    color: '#555',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  footer: {
    padding: '20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
  },
};

ReactDOM.render(<App />, document.getElementById('root'));
