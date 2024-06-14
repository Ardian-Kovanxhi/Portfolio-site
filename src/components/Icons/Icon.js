// import { usePage } from '../../context/PageContext';
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
            {name.split(' ').map((el, index) => (
                <div
                    className='icon-name'
                    key={`name-part${index}`}
                >
                    {el}
                </div>
            ))}
        </div>
    )
}