import './icon.css'
export default function AppIcon({ name, iconImage }) {
    return (
        <div
            className={`icon-div ${name.split('.').join('')}`}
            onClick={() => console.log('same div')}
        >
            <img
                className='icon-img'
                src={iconImage}
            />
            <div className='icon-name'>
                {name}
            </div>
        </div>
    )
}