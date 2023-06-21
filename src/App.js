import logo from "./logo.png";
import discordLogo from "./discord-logo.png";
import twitterLogo from "./twitter-logo.png";
import unisatLogo from "./unisat-logo.jpg";
import githubLogo from "./github-logo.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          alt="Crypto obsequious bitcoin meme coin"
          width="200"
          height="200"
        />
        <h1 className="App-title">OBSEQUIOUS</h1>
        <p className="App-description">
          In the fantastical dominion where <strong>Bitcoin</strong> reigns
          supreme, Mr. Obsequious{" "}
          <strong>traded courtesies for Bitcoins</strong>, with a pledge to
          emblazon the digital tapestry of the Bitcoin universe with 21 million
          electronic self-portraits, architecting the most captivating
          pixel-populated gallery in the virtual sphere!
        </p>

        <a
          href="https://unisat.io/brc20/OBSE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="App-logo"
            src={unisatLogo}
            alt="Unisat of the crypto obsequious bitcoin meme coin"
            width="80"
            height="80"
          />
        </a>

        <div>
          <a
            href="https://discord.gg/TKMSdAnM85"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={discordLogo}
              alt="Discord of the crypto obsequious bitcoin meme coin"
              width="40"
              height="40"
            />
          </a>
          <a
            href="https://twitter.com/OBSEOrdinals"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={twitterLogo}
              alt="Discord of the crypto obsequious bitcoin meme coin"
              width="40"
              height="40"
            />
          </a>
          <a
            href="https://github.com/estevanpedro/obsequious"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubLogo}
              alt="Github of the crypto obsequious bitcoin meme coin"
              width="40"
              height="40"
              className="App-logo"
            />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
