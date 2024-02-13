import pfp from '../../../images/Professional/1701986583904.jpg'
import './PageParts.scss'

export default function BoringAboutMe() {
    return (
        <div className='about-me-container'>

            <div>
                <div>
                    ABOUT ME
                </div>

                <div>
                    Hello! I'm Ardian Kovanxhi and I am a Software Developer who looks to problem solve, create, and execute.

                    I'm a self starter-I created my own business built on the foundation of using my knowledge of computer hardware to help others. I specialize in optimization-I work with my clients to build systems specific to their use case and budget. I am highly passionate about producing the absolute strongest systems built to last.

                    I love to learn and I work hard to get things done. Skilled in Python, Javascript, Express.js, Flask, React.js, Redux, HTML, SQL, SQLite, Sequelize, SQLAlchemy, PostgreSQL, and CSS.

                    Reach out @ akovanxhi@gmail.com
                </div>
            </div>

            <img
                className='profile-pic'
                src={pfp}
            />
        </div>
    )
}