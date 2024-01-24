import caution from '../../images/caution.avif'
import consbar from '../../images/consbar.gif'

export default function AiChatbot() {
    return (
        <div
            style={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden'
            }}
        >
            <img
                src={caution}
                style={{
                    width: '150%',
                    height: '100%'
                }}
                alt=''
            />
            <div
                style={{
                    position: 'absolute',
                    fontSize: 'xx-large',
                    top: 0,
                    marginTop: '130px',
                    color: 'white'
                }}
            >
                UNDER CONSTRUCTION
            </div>

            <img
                src={consbar}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    marginBottom: '140px'
                }}
                alt=''
            />
        </div>
    )
}