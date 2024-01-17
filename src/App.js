import './App.css';
import ComponentTest from './components/splash';
import Clock from './components/clock/clock';

import AppIcon from './components/Icons/icon';
import logImg from './images/log.png'
import discordImg from './images/discord.png'
import houseImg from './images/house.webp'
import robotImg from './images/robot.png'
import textImg from './images/textFile.png'
import linkedinImg from './images/linkedin.png'
import githubImg from './images/github.png'
import emailImg from './images/email.png'


function App() {
  return (
    <>
      <div className="App">
        <Clock />
        <ComponentTest />
        <AppIcon name={'Soundlog'} iconImage={logImg} />
        <AppIcon name={'Discordance'} iconImage={discordImg} />
        <AppIcon name={'ArdianBnB'} iconImage={houseImg} />
        <AppIcon name={'AI_Chatbot'} iconImage={robotImg} />
        <AppIcon name={'Resume.txt'} iconImage={textImg} />
        <AppIcon name={'About_me.txt'} iconImage={textImg} />
        <AppIcon name={'LinkedIn'} iconImage={linkedinImg} />
        <AppIcon name={'GitHub'} iconImage={githubImg} />
        <AppIcon name={'Email'} iconImage={emailImg} />
      </div>
    </>
  );
}

export default App;
