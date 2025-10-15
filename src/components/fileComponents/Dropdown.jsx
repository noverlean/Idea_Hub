import { useTranslation } from "react-i18next"
import { useState } from "react"

export default function Dropdown({name, currentValue, ableValues, handler})
{    
    const {t, i18n} = useTranslation()
    const [selectedValue, setSelectedValue] = useState(currentValue)

    const handleChange = (event) => {
        setSelectedValue(event.target.value)
        handler(event.target.value, i18n)
    }

    return (
        <select name={name} value={selectedValue} onChange={handleChange}>
            {
                ableValues.map((value, index) => (
                    <option key={index} value={value}> {t(value)} </option>
                ))
            }
        </select>
    )
}