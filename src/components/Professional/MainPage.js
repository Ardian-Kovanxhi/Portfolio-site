import BoringTopBar from './TopBar/TopBar'
import BoringAboutMe from './PageParts/AboutMe'
import BoringProjects from './PageParts/Projects'
import BoringSkills from './PageParts/Skills'
import './MainPage.scss'
import BoringContact from './PageParts/Contact'

export default function BoringVersion() {

    return (
        <div className="filler-gradient">
            <div className='middle-block'>
                <BoringTopBar />
                <BoringAboutMe />
                <BoringProjects />
                <BoringSkills />
                <BoringContact />
            </div>
        </div>
    )
}