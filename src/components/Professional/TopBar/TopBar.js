import Slider from '../../Slider/Slider';
import file from '../../../download files/Ardian-Kovanxhi-Resume.pdf'
import './TopBar.scss';

export default function BoringTopBar() {


    return (
        <div
            className="topbar-container"
        >
            <Slider />

            <button
                onClick={() => window.scrollTo({ top: 2000, behavior: 'smooth' })}
            >
                SCROLLER
            </button>

            <button
                onClick={() => window.open(file, '_blank')}
            >
                DOWNLOAD
            </button>
        </div>

    )
}