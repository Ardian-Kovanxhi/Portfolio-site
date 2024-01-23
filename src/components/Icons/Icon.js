import './Icon.scss'
export default function AppIcon({ name, iconImage, style }) {
    return (
        <div
            className="icon-div"
            style={style}
        >
            <img
                className='icon-img'
                src={iconImage}
                alt=''
            />
            {name.split(' ').map(el => (
                <div className='icon-name'>
                    {el}
                </div>
            ))}
        </div>
    )
}