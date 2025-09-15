import '@css/panelControlButton.css'
import {useEffect, useState} from "react";

export default function PanelControlButton(props)
{
    const [isActive, setActive] = useState(props.isActive)

    useEffect(() => {
        setActive(props.isActive)
    }, [props.isActive]);

    return (
        <div
            className={`panelControlButton ${ isActive ? 'active' : ''}`}
            onClick={() => {
                setActive(!isActive);
                props.onClick();
                props.alignSelf;
            }}
        >
            <img src={props.imageSrc} alt=''/>
        </div>
    )
}