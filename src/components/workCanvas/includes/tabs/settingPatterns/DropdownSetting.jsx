import HorizontalBlock from '@components/fileComponents/HorizontalBlock'
import Paragraph from '@components/fileComponents/Paragraph'
import Dropdown from '@components/fileComponents/Dropdown'
import { useTranslation } from 'react-i18next'
import useSettingsCache from '@hooks/useSettingsCache'

export default function DropdownSetting({ settingName })
{
    const {t} = useTranslation()
    const [setting, updateSetting] = useSettingsCache(settingName)
    
    return (
        <HorizontalBlock id={settingName}>
            <Paragraph style={{marginLeft: "10px"}}>{t(settingName)}</Paragraph>
            <Dropdown name={setting.name} value={setting.value} ableValues={setting.ableValues} handler={updateSetting} />
        </HorizontalBlock>
    )
}