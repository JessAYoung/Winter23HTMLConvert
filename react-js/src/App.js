import './App.css';

export default function App() {
    return (
      
        <>
          <title>Jessica's Portfolio</title>
        
        <header>
          <center>
          {/* Flaming Text Logonpo */}
          <div style={{ textAlign: 'center' }}>
            <img src="/Media/ByteBanditsBanner.gif" alt="Byte Bandits Banner" width="531px" />
          </div>
          </center>
          {/* Navigation Bar */}
          <nav id="nav_menu">
            <ul>
              <li><a href="../index.html" className="transition-link" data-transition="../brian-portfolio/images/Fast_transition.gif" style={{ color: 'white' }}>Home</a></li>
              <li><a href="../ben-portfolio/ben-index.html" className="transition-link" data-transition="../brian-portfolio/images/Fast_transition.gif" style={{ color: 'white' }}>Ben</a></li>
              <li><a href="../randall-portfolio/randall-index.html" className="transition-link" data-transition="../brian-portfolio/images/Fast_transition.gif" style={{ color: 'white' }}>Randall</a></li>
              <li><a href="../jessica-portfolio/jessica-index.html" className="transition-link" data-transition="../brian-portfolio/images/Fast_transition.gif" style={{ color: 'white' }}>Jessica</a></li>
              <li><a href="../brian-portfolio/brian-index.html" className="transition-link" data-transition="../brian-portfolio/images/Fast_transition.gif" style={{ color: 'white' }}>Brian</a></li>
            </ul>
          </nav>
        </header>
  
        <section id="Info">
          <img src="/Media/JessicainParis.jpg" alt="Image of Jessica Young" width="200" />
          <h1>Jessica Young</h1>
          <h2>Contact Info</h2>
            <p>Phone Number: (123)456-7890</p>
            <p>Email: jyoung@example.com</p>
            <h2>Experience</h2>
            <p>I have experience working with html and css as well as project management in construction with a background
                successfully executing diverse project tasks to meet deadlines.
                Highly skilled at communicating with colleagues, monitoring status, and achieving key milestones.
                Enthusiastic problem solver and talented team player with superior planning and decision-making skills.</p>
            <h2>Skills</h2>
            <ul>
                <li>Microsoft Office (6 years)</li>
                <li>Verizon Systems (1 year), T-Mobile Systems (1 year), AT&T Systems (1 year)</li>
                <li>Customer Support (5 years), Customer Care (4 years), Customer Service (5 years)</li>
                <li>Operating Systems (3 years), Mac OS, iOS (2 years), Android (2 years), Windows 10 (3 years)</li>
                <li>Network Support (1 year), Technical Support (2 years)</li>
                <li>Point of Sales (5 years)</li>
                <li>Computer Literacy (7 years), Typing (4 years)</li>
                <li>Mathematics (4 years), Calculus (2 years)</li>
                <li>Technical writing (1 year)</li>
                <li>Project coordination, Project management, Account Management (2 years)</li>
            </ul>

        </section>
  
        <footer>
          <p>&copy; 2023 ByteBandits</p>
        </footer>
        </>
    );
  }
  
