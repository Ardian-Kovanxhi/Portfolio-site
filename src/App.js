import React, { useEffect, useState } from 'react';
import MainPage from './components/Splash';
import { useModal } from './context/ModalContext';
import { usePage } from './context/PageContext';

import AppIcon from './components/Icons/Icon';
import logImg from './images/log.png'
import discordImg from './images/discord.png'
import houseImg from './images/house.webp'
import robotImg from './images/robot.png'
import textImg from './images/textFile.png'
import linkedinImg from './images/linkedin.png'
// import githubImg from './images/github.png'
import githubImg from './images/github-white.png'
import emailImg from './images/email.png'
import sweeper from './images/sweeper.webp'


import ModularModal from './components/MoveableModal/ModularModal';
import Resume from './components/ModalComponents/Resume';
import AboutMe from './components/ModalComponents/AboutMe';
import AiChatbot from './components/ModalComponents/AIChatbot';
import ArdianBnB from './components/ModalComponents/ArdianBnB';
import Discordance from './components/ModalComponents/Discordance';
import Soundlog from './components/ModalComponents/Soundlog';
import BoringVersion from './components/Professional/MainPage';


function App() {

  const { openModal, focus, setFocus } = useModal()

  const { page, wipeWidth, wipeHeight, vis } = usePage()

  const openEmailApp = () => {
    window.location.href = 'mailto:akovanxhi@gmail.com';
  };

  //Konami code easter egg

  const [konamiCode, setKonamiCode] = useState([]);
  const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  const handleKeyDown = (event) => {
    setKonamiCode((prevCode) => [...prevCode, event.key]);
  };

  useEffect(() => {
    if (konamiCode.join('') === konamiSequence.join('')) {
      // Konami code entered, trigger your action here
      window.open('https://youtu.be/gC8fwU-R7ko', '_blank')
      // Add your action here, such as displaying a hidden feature, etc.
      setKonamiCode([]); // Reset the code for future inputs
    }
  }, [konamiCode, konamiSequence]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [konamiCode]);

  //Konami end


  return (
    <>
      <style>
        {`
        body {
          overflow: ${page ? 'hidden' : 'auto'}
        }
        `}
      </style>
      <div
        className='resize-box'
        style={{ width: wipeWidth, height: wipeHeight }}
      >
        {vis ?
          <div>

            <img
              style={{
                height: wipeHeight,
                maxHeight: '312px',
                width: wipeWidth,
                maxWidth: '312px'
              }}
              src={sweeper}
              alt=''
            />
            <div>
              We'll Be Right Back
            </div>
          </div>
          :
          ''
        }
      </div>
      {page ?
        <div>
          <div onMouseDown={() => setFocus('resumeId')}>
            <ModularModal
              modalComponent={<Resume />}
              modalHeader={'Resume.txt'}
              modalId={'resumeId'}
              position={{ left: '60vw', top: '6vh' }}
              focus={focus}
              setFocus={setFocus}
            />
          </div>


          {/* <div onMouseDown={() => setFocus('aboutMeId')}>
            <ModularModal
              modalComponent={<AboutMe />}
              modalHeader={'About me.txt'}
              modalId={'aboutMeId'}
              position={{ left: '35vw', top: '12vh' }}
              focus={focus}
              setFocus={setFocus}
            />
          </div> */}


          <div onMouseDown={() => setFocus('aiId')}>
            <ModularModal
              modalComponent={<AiChatbot />}
              modalHeader={'AI Chatbot'}
              modalId={'aiId'}
              position={{ left: '10vw', top: '10vh' }}
              focus={focus}
              setFocus={setFocus}
            />
          </div>


          <div onMouseDown={() => setFocus('ardianBnBId')}>
            <ModularModal
              modalComponent={<ArdianBnB />}
              modalHeader={'ArdianBnB'}
              modalId={'ardianBnBId'}
              position={{ left: '5vw', top: '20vh' }}
              focus={focus}
              setFocus={setFocus}
            />
          </div>


          <div onMouseDown={() => setFocus('discordId')}>
            <ModularModal
              modalComponent={<Discordance />}
              modalHeader={'Discordance'}
              modalId={'discordId'}
              position={{ left: '30vw', top: '30vh' }}
              focus={focus}
              setFocus={setFocus}
            />
          </div>


          <div onMouseDown={() => setFocus('soundlogId')}>
            <ModularModal
              modalComponent={<Soundlog />}
              modalHeader={'Soundlog'}
              modalId={'soundlogId'}
              position={{ left: '50vw', top: '25vh' }}
              focus={focus}
              setFocus={setFocus}
            />
          </div>

          <div className="App">
            {/* <Clock /> */}
            <MainPage />

            <div
              onClick={() => {
                openModal('soundlogId')
                setFocus('soundlogId')
              }}
            >
              <AppIcon
                name={'Soundlog'}
                iconImage={logImg}
                style={{
                  position: 'absolute',
                  top: '35vh',
                  left: '50vw',
                }}
              />
            </div>

            <div
              onClick={() => {
                openModal('discordId')
                setFocus('discordId')
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
                setFocus('ardianBnBId')
              }}
            >
              <AppIcon
                name={'ArdianBnB'}
                iconImage={houseImg}
                style={{
                  position: 'absolute',
                  top: '12vh',
                  left: '60vw'
                }}
              />
            </div>

            <div
              onClick={() => {
                openModal('aiId')
                setFocus('aiId')
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
                setFocus('resumeId')
              }}
            >
              <AppIcon
                name={'Resume.txt'}
                iconImage={textImg}
                style={{
                  position: 'absolute',
                  top: '45vh',
                  left: '10vw'
                }}
              />
            </div>

            {/* <div
              onClick={() => {
                openModal('aboutMeId')
                setFocus('aboutMeId')
              }}
            >
              <AppIcon
                name={'About me.txt'}
                iconImage={textImg}
                style={{
                  position: 'absolute',
                  top: '10vh',
                  left: '5vw'
                }}
              />
            </div> */}

            <div onClick={() => window.open('https://www.linkedin.com/in/ardian-kovanxhi-341177145/', '_blank')}>
              <AppIcon
                name={'LinkedIn'}
                iconImage={linkedinImg}
                style={{
                  position: 'absolute',
                  top: '23vh',
                  left: '80vw'
                }}
              />
            </div>
            <div onClick={() => window.open('https://github.com/Ardian-Kovanxhi', '_blank')}>
              <AppIcon
                name={'GitHub'}
                // iconImage={githubImg}
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
        </div>
        :
        <BoringVersion />
      }
    </>
  );
}

export default App;