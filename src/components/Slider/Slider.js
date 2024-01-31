import { useState } from 'react'
import { usePage } from '../../context/PageContext'
import './Slider.scss'

export default function Slider() {

    const {
        page, setPage,
        wipeWidth, setWipeWidth,
        setWipeHeight, setVis
    } = usePage();

    const [slide, setSlide] = useState(page);

    const handleClick = () => {
        setVis(true)
        setSlide(slide ? false : true)
        if (wipeWidth === '100%') {
            setWipeHeight('100%')
            setTimeout(() => { setPage(false) }, 1000)
            setTimeout(() => {
                setVis(false)
                setWipeWidth('0%');
            }, 1200);
        }
        else {
            setWipeWidth('100%')
            setTimeout(() => { setPage(true) }, 1000)
            setTimeout(() => {
                setVis(false)
                setWipeHeight('0%');
            }, 1200);
        }
    }

    return (
        <div
            onClick={handleClick}
            className={`slider-box${page ? '' : '-pro'}`}
            style={
                page ?
                    {}
                    :
                    { backgroundColor: `${slide ? 'red' : 'rgb(50, 190, 50)'}` }
            }
        >
            <div
                className={`toggle-name${page ? '' : '-pro'}`}
            >
                Style
            </div>
            <div
                className={`toggle-name${page ? '' : '-pro'}`}
            >
                Pro
            </div>
            <div
                style={page ?
                    { marginLeft: `${slide ? 45 : 0}px` }
                    :
                    { marginLeft: `${slide ? 45 : 5}px` }

                }
                className={`slider-toggle${page ? '' : '-pro'}`}
            >
                <div className={`burger-stack${page ? '' : '-pro'}`}></div>
                <div className={`burger-stack${page ? '' : '-pro'}`}></div>
                <div className={`burger-stack${page ? '' : '-pro'}`}></div>
            </div>
        </div>
    )
}