import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import './App.css';

//<FontAwesomeIcon icon={faEthereum} />
//<a href="https://twitter.com/matedegaveta" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-message">
          in space, no one can hear you scream
        </p>
        
        <div className="links">
          
          <a href="https://github.com/izcoser" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </header>
      
    </div>
  );
}

export default App;
