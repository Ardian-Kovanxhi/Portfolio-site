import Slider from "../../Slider/Slider";
import "./TopBar.scss";

export default function BoringTopBar() {


    return (
        <div
            className="topbar-container"
        >
            <h2 style={{ fontWeight: 600 }}>
                Ardian Kovanxhi
            </h2>
            <div className="topbar-btns">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    About Me
                </button>
                <button
                    onClick={() => window.scrollTo({ top: 690, behavior: "smooth" })}
                >
                    Projects
                </button>
                <button
                    onClick={() => window.scrollTo({ top: 1390, behavior: "smooth" })}
                >
                    Skills
                </button>
                <button
                    onClick={() => window.scrollTo({ top: 1890, behavior: "smooth" })}
                >
                    Contact
                </button>
            </div>
            <Slider />
        </div>

    )
}