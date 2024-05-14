import music from "../../../images/Professional/logos/eighth note.png"
import disc from "../../../images/Professional/logos/prof discord.png"
import AirBnB from "../../../images/Professional/logos/airbnb.png"

export default function BoringProjects() {
    return (
        <div className="proj-container">
            PROJECTS
            <div className="proj-desc">
                <div>
                    <img
                        src={music}
                    />
                </div>

                <div>
                    <img
                        src={disc}
                    />
                </div>

                <div>
                    <img
                        src={AirBnB}
                    />
                </div>
            </div>
        </div>
    )
}