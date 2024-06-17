import gitPng from "../../../images/Professional/btn_icons/github.png"
import gmailPng from "../../../images/Professional/btn_icons/gmail.png"
import linkedinPng from "../../../images/Professional/btn_icons/linkedin.png"

export default function BoringContact() {

    const openEmailApp = () => {
        window.location.href = "mailto:akovanxhi@gmail.com";
    };

    return (
        <div className="contact-container">
            <h2>Contact Me</h2>
            <div>
                <button
                    onClick={() => window.open("https://github.com/Ardian-Kovanxhi", "_blank")}
                >
                    <img
                        alt=""
                        src={gitPng}
                    />
                </button>
                <button
                    onClick={() => window.open("https://www.linkedin.com/in/ardian-kovanxhi-341177145/", "_blank")}
                >
                    <img
                        alt=""
                        src={linkedinPng}
                    />
                </button>
                <button
                    onClick={openEmailApp}
                >
                    <img
                        alt=""
                        src={gmailPng}
                    />
                </button>
            </div>
        </div>
    )
}