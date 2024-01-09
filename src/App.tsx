import { Background, Profile, Contact, Nav, Theme, Certificates, Skills, Language, About } from './components';
import DarkParticlesConfig from "./components/dark-particles.json";
import { useState } from 'react';

function App() {
  const [ bgConfig, setBgConfig ] = useState<any>(DarkParticlesConfig)
  const [ language, setLanguage ] = useState(0)

  return <main>
    <Background bgConfig={bgConfig}/>
    <Nav/>
    <Language language={language} setLanguage={setLanguage}/>
    <Theme setBgConfig={setBgConfig}/>
    <Profile/>
    <About language={language}/>
    <Certificates language={language}/>
    <Skills language={language}/>
    <Contact language={language}/>
  </main>
};

export default App