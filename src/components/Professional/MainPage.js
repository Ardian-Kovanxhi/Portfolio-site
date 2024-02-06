import BoringTopBar from './TopBar/TopBar'
import BoringAboutMe from './PageParts/AboutMe'
import BoringProjects from './PageParts/Projects'
import './MainPage.scss'

export default function BoringVersion() {

    return (
        <div className="filler-gradient">
            <div className='middle-block'>
                <BoringTopBar />
                <BoringAboutMe />
                {/* <BoringProjects /> */}
            </div>
        </div>
    )
}