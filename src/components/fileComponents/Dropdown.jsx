import { useTranslation } from "react-i18next"
import { useState } from "react"

export default function Dropdown({name, value, ableValues, handler})
{    
    const {t} = useTranslation()
    const [selectedValue, setSelectedValue] = useState(value)

    const handleChange = (event) => {
        setSelectedValue(event.target.value)
        handler(event.target.value)
    }

    return (
        <select name={name} value={selectedValue} onChange={handleChange}>
            {
                ableValues.map((_value, index) => (
                    <option key={index} value={_value}> {t(_value)} </option>
                ))
            }
        </select>
    )
}