import logImg from '../images/log.png'
import roboImg from '../images/robot.png'
import discordImg from '../images/discord.png'
import houseImg from '../images/house.webp'
import NameImg from '../images/name.png'
import './testStyle.css'

export default function ComponentTest() {
    return (
        <>
            <div className='testDiv'>
                <img
                    src={NameImg} />
                <div>
                    <img
                        style={{ width: '50px', height: '50px' }}
                        src={logImg} />
                    <img
                        style={{ width: '50px', height: '50px' }}
                        src={roboImg} />
                    <img
                        style={{ width: '50px', height: '50px' }}
                        src={discordImg} />
                    <img
                        style={{ width: '50px', height: '50px' }}
                        src={houseImg} />
                </div>
                <div className='disclaimer'>
                    This site is heavily inspired by TheStrokes.com
                </div>
            </div>
        </>
    )
}