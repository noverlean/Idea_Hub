import { useTranslation } from "react-i18next";

export default function Switch({ name, type, content })
{
    const {t} = useTranslation()

    switch(type)
    {
        case 'toggle':
            return (
                <button>SWITCH</button>
            )
        case 'dropdown':
            return (
                <select name={ name }>
                    {
                        content.map((value, index) => (
                            <option key={ index } value={ value }>{ t(value) }</option>
                        ))
                    }
                </select>
            )
        case 'gallery':
            return (
                <button>SWITCH</button>
            )
        default:
            console.error("same switch type is not exist!");
            return (<></>)
    }
    
}