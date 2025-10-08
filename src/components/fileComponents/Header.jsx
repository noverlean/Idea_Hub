import '@css/fileComponents/header.css'
import { useTranslation } from 'react-i18next'

export default function Header({ children })
{
    const { t } = useTranslation()

    return (
        <div className="component header">{ t(children) }</div>
    )
}