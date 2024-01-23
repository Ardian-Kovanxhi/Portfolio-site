import NameImg from '../images/name.png'
import './SplashStyle.scss'

export default function MainPage() {
    return (
        <>
            <div className='splash-div'>
                <img
                    className='name-img'
                    src={NameImg}
                    alt=''
                />
                <div className='disclaimer'>
                    This site is heavily inspired by TheStrokes.com
                </div>
            </div>
        </>
    )
}