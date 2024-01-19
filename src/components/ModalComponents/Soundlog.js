import logImg from '../../images/log.png'

export default function Soundlog() {
    return (
        <>
            SOUNDLOG COMPONENT
            <img
                src={logImg}
                onClick={() => window.open('https://ardian-kovanxhi-soundcloud.onrender.com', '_blank')}
                style={{
                    width: '50px',
                    height: '50px'
                }}
            />
        </>
    )
}