import './Icon.scss'
export default function AppIcon({ name, iconImage }) {
    return (
        <div
            className={`icon-div ${name.split('.').join('')}`}
        >
            <img
                className='icon-img'
                src={iconImage}
            />
            {name.split(' ').map(el => (
                <div className='icon-name'>
                    {el}
                </div>
            ))}
        </div>
    )
}