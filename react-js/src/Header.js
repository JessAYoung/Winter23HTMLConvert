export default function Head() {
    return (
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
    );
  };
  