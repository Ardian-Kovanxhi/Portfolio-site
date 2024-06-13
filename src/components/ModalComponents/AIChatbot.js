import caution from '../../images/modals/backgrounds/caution.avif'
import consbar from '../../images/modals/consbar.gif'

export default function AiChatbot() {
    return (
        <div className='constuction-container parent'>
            <img
                src={caution}
                style={{
                    width: '150%',
                    height: '100%'
                }}
                alt=''
            />
            <div className='construction-text'>
                UNDER CONSTRUCTION
            </div>

            <img
                className='construction-gif'
                src={consbar}
                alt=''
            />
        </div>
    )
}