import { useTranslation } from "react-i18next"

export default function Dropdown({name, ableValues})
{
    const {t} = useTranslation()
    console.log(ableValues)

    return (
        <select name={ name }>
            {
                ableValues.map((value, index) => (
                    <option key={ index } value={ t(value) }>{ t(value) }</option>
                ))
            }
        </select>
    )
}