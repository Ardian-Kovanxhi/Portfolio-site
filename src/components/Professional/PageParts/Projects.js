import music from "../../../images/Professional/logos/eighth note.png"
import disc from "../../../images/Professional/logos/prof discord.png"
import AirBnB from "../../../images/Professional/logos/airbnb.png"
import LogImg from "../../../images/Professional/logos/LogSC.png"
import DiscImg from "../../../images/Professional/logos/DiscSC.png"
import BnbImg from "../../../images/Professional/logos/BnbSC.png"

export default function BoringProjects() {
    return (
        <div className="proj-container">
            <h2>
                PROJECTS
            </h2>
            <div style={{ display: "flex", width: "100%", justifyContent: "space-around" }}>

                <div className="proj-desc">

                    <div>
                        <img
                            alt="SoundLog logo"
                            src={music}
                        />
                    </div>

                    <h2>Soundlog</h2>

                    <p>
                        A clone of discord.com utilizing socket.io to handle live CRUD on comments and messages.
                    </p>

                    <img
                        alt="Soundlog Screenshot"
                        src={LogImg}
                    />

                    <button
                        onClick={() => window.open('https://ardian-kovanxhi-soundcloud.onrender.com', '_blank')}
                    >
                        Live
                    </button>
                    <button
                        onClick={() => window.open('https://github.com/Ardian-Kovanxhi/SoundLog', '_blank')}
                    >
                        Git Repo
                    </button>

                </div>


                <div className="proj-desc">

                    <div>
                        <img
                            alt="Discord logo"
                            src={disc}
                        />
                    </div>

                    <h2>Discordance</h2>

                    <p>
                        A clone of discord.com utilizing socket.io to handle live CRUD on comments and messages.
                    </p>

                    <img
                        alt="Discord Screenshot"
                        src={DiscImg}
                    />

                    <button
                        onClick={() => window.open('https://group-4-discord.onrender.com', '_blank')}
                    >
                        Live
                    </button>
                    <button
                        onClick={() => window.open('https://github.com/hen-wood/group-4-flask-project', '_blank')}
                    >
                        Git Repo
                    </button>

                </div>


                <div className="proj-desc">

                    <div>
                        <img
                            alt="AirBnB logo"
                            src={AirBnB}
                        />
                    </div>

                    <h2>ArdianBnB</h2>

                    <p>
                        A clone of discord.com utilizing socket.io to handle live CRUD on comments and messages.
                    </p>

                    <img
                        alt="AirBnB Screenshot"
                        src={BnbImg}
                    />

                    <button
                        onClick={() => window.open('https://ardian-kovanxhi-aribnb.onrender.com', '_blank')}
                    >
                        Live
                    </button>
                    <button
                        onClick={() => window.open('https://github.com/Ardian-Kovanxhi/AirBnB', '_blank')}
                    >
                        Git Repo
                    </button>
                </div>
            </div>
        </div>
    )
}