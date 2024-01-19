import React, { useState } from 'react';
import MainPage from './components/Splash';
import Clock from './components/clock/Clock';

import AppIcon from './components/Icons/Icon';
import logImg from './images/log.png'
import discordImg from './images/discord.png'
import houseImg from './images/house.webp'
import robotImg from './images/robot.png'
import textImg from './images/textFile.png'
import linkedinImg from './images/linkedin.png'
import githubImg from './images/github.png'
import emailImg from './images/email.png'
import ModularModal from './components/MoveableModal/ModularModal';
import { useModal } from './context/ModalContext';

import Resume from './components/ModalComponents/Resume';
import AboutMe from './components/ModalComponents/AboutMe';
import AiChatbot from './components/ModalComponents/AIChatbot';
import ArdianBnB from './components/ModalComponents/ArdianBnB';
import Discordance from './components/ModalComponents/Discordance';
import Soundlog from './components/ModalComponents/Soundlog';


function App() {

  const [test, setTest] = useState(false)

  const { openModal } = useModal()

  const openEmailApp = () => {
    window.location.href = 'mailto:akovanxhi@gmail.com';
  };

  return (
    <>

      <ModularModal modalComponent={<Resume />} modalHeader={'Resume.txt'} modalId={'resumeId'} />
      <ModularModal modalComponent={<AboutMe />} modalHeader={'About_me.txt'} modalId={'aboutMeId'} />
      <ModularModal modalComponent={<AiChatbot />} modalHeader={'AI_Chatbot'} modalId={'aiId'} />
      <ModularModal modalComponent={<ArdianBnB />} modalHeader={'ArdianBnB'} modalId={'ardianBnBId'} />
      <ModularModal modalComponent={<Discordance />} modalHeader={'Discordance'} modalId={'discordId'} />
      <ModularModal modalComponent={<Soundlog />} modalHeader={'Soundlog'} modalId={'soundlogId'} />

      <div className="App">
        <Clock />
        <MainPage />

        <div
          onClick={() => openModal('soundlogId')}
        >
          <AppIcon name={'Soundlog'} iconImage={logImg} />
        </div>

        <div
          onClick={() => openModal('discordId')}
        >
          <AppIcon name={'Discordance'} iconImage={discordImg} />
        </div>

        <div
          onClick={() => openModal('ardianBnBId')}
        >
          <AppIcon name={'ArdianBnB'} iconImage={houseImg} />
        </div>

        <div
          onClick={() => openModal('aiId')}
        >
          <AppIcon name={'AI_Chatbot'} iconImage={robotImg} />
        </div>

        <div
          onClick={() => openModal('resumeId')}
        >
          <AppIcon name={'Resume.txt'} iconImage={textImg} />
        </div>
        <div
          onClick={() => openModal('aboutMeId')}
        >
          <AppIcon name={'About_me.txt'} iconImage={textImg} />
        </div>

        <div onClick={() => window.open('https://www.linkedin.com/in/ardian-kovanxhi-341177145/', '_blank')}>
          <AppIcon name={'LinkedIn'} iconImage={linkedinImg} />
        </div>
        <div onClick={() => window.open('https://github.com/Ardian-Kovanxhi', '_blank')}>
          <AppIcon name={'GitHub'} iconImage={githubImg} />
        </div>
        <div onClick={openEmailApp}>
          <AppIcon name={'Email'} iconImage={emailImg} />
        </div>
      </div>
    </>
  );
}

export default App;
