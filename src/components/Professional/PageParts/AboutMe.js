import pfp from "../../../images/Professional/1701986583904.jpg"
import file from "../../../download files/Ardian-Kovanxhi-Resume.pdf"
import "./PageParts.scss"

export default function BoringAboutMe() {
    return (
        <div className="about-me-container">

            <div className="about-me-text-container">
                <h2 className="about-me-title">
                    About Me
                </h2>
                <button onClick={() => window.open(file, "_blank")}>
                    Open Resume
                </button>

                <div>
                    I've always been a self-starter, from teaching myself both how to build computers and enough Python to program a clone of Pong. Through these experiences I've learned how to independently research and find efficient solutions to technical problems. My education in App Academy jump started my journey in web development by giving me a strong foundation in multiple languages and frameworks such as Javascript, Express, Python, Flask, React, and Redux
                </div>

            </div>

            <img
                className="profile-pic"
                src={pfp}
            />
        </div>
    )
}