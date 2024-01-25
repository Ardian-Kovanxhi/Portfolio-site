import React, { useState } from 'react';
import MainPage from './components/Splash';
// import Clock from './components/clock/Clock';

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

  const { openModal, focus, handleFocus } = useModal()

  const openEmailApp = () => {
    window.location.href = 'mailto:akovanxhi@gmail.com';
  };

  // const [focus, setFocus] = useState(null)



  return (
    <>

      <div onMouseDown={() => handleFocus('resumeId')}>
        <ModularModal
          modalComponent={<Resume />}
          modalHeader={'Resume.txt'}
          modalId={'resumeId'}
          position={{ left: '65vw', top: '6vh' }}
          focus={focus}
          setFocus={handleFocus}
        />
      </div>


      <div onMouseDown={() => handleFocus('aboutMeId')}>
        <ModularModal
          modalComponent={<AboutMe />}
          modalHeader={'About me.txt'}
          modalId={'aboutMeId'}
          position={{ left: '30vw', top: '20vh' }}
          focus={focus}
          setFocus={handleFocus}
        />
      </div>


      <div onMouseDown={() => handleFocus('aiId')}>
        <ModularModal
          modalComponent={<AiChatbot />}
          modalHeader={'AI Chatbot'}
          modalId={'aiId'}
          position={{ left: '1000px', top: '300px' }}
          focus={focus}
          setFocus={handleFocus}
        />
      </div>


      <div onMouseDown={() => handleFocus('ardianBnBId')}>
        <ModularModal
          modalComponent={<ArdianBnB />}
          modalHeader={'ArdianBnB'}
          modalId={'ardianBnBId'}
          position={{ left: '1000px', top: '400px' }}
          focus={focus}
          setFocus={handleFocus}
        />
      </div>


      <div onMouseDown={() => handleFocus('discordId')}>
        <ModularModal
          modalComponent={<Discordance />}
          modalHeader={'Discordance'}
          modalId={'discordId'}
          position={{ left: '1000px', top: '500px' }}
          focus={focus}
          setFocus={handleFocus}
        />
      </div>


      <div onMouseDown={() => handleFocus('soundlogId')}>
        <ModularModal
          modalComponent={<Soundlog />}
          modalHeader={'Soundlog'}
          modalId={'soundlogId'}
          position={{ left: '50vw', top: '30vh' }}
          focus={focus}
          setFocus={handleFocus}
        />
      </div>

      <div className="App">
        {/* <Clock /> */}
        <MainPage />

        <div
          onClick={() => {
            openModal('soundlogId')
            handleFocus('soundlogId')
          }}
        >
          <AppIcon
            name={'Soundlog'}
            iconImage={logImg}
            style={{
              position: 'absolute',
              top: '35vh',
              left: '50vw'
            }}
          />
        </div>

        <div
          onClick={() => {
            openModal('discordId')
            handleFocus('discordId')
          }}
        >
          <AppIcon
            name={'Discordance'}
            iconImage={discordImg}
            style={{
              position: 'absolute',
              top: '25vh',
              left: '30vw'
            }}
          />
        </div>

        <div
          onClick={() => {
            openModal('ardianBnBId')
            handleFocus('ardianBnBId')
          }}
        >
          <AppIcon
            name={'ArdianBnB'}
            iconImage={houseImg}
            style={{
              position: 'absolute',
              top: '15vh',
              left: '60vw'
            }}
          />
        </div>

        <div
          onClick={() => {
            openModal('aiId')
            handleFocus('aiId')
          }}
        >
          <AppIcon
            name={'AI Chatbot'}
            iconImage={robotImg}
            style={{
              position: 'absolute',
              top: '60vh',
              left: '30vw'
            }}
          />
        </div>

        <div
          onClick={() => {
            openModal('resumeId')
            handleFocus('resumeId')
          }}
        >
          <AppIcon
            name={'Resume.txt'}
            iconImage={textImg}
            style={{
              position: 'absolute',
              top: '10vh',
              left: '5vw'
            }}
          />
        </div>
        <div
          onClick={() => {
            openModal('aboutMeId')
            handleFocus('aboutMeId')
          }}
        >
          <AppIcon
            name={'About me.txt'}
            iconImage={textImg}
            style={{
              position: 'absolute',
              top: '50vh',
              left: '10vw'
            }}
          />
        </div>

        <div onClick={() => window.open('https://www.linkedin.com/in/ardian-kovanxhi-341177145/', '_blank')}>
          <AppIcon
            name={'LinkedIn'}
            iconImage={linkedinImg}
            style={{
              position: 'absolute',
              top: '20vh',
              left: '80vw'
            }}
          />
        </div>
        <div onClick={() => window.open('https://github.com/Ardian-Kovanxhi', '_blank')}>
          <AppIcon
            name={'GitHub'}
            iconImage={githubImg}
            style={{
              position: 'absolute',
              top: '60vh',
              left: '60vw'
            }}
          />
        </div>
        <div onClick={openEmailApp}>
          <AppIcon
            name={'Email'}
            iconImage={emailImg}
            style={{
              position: 'absolute',
              top: '80vh',
              left: '40vw'
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;