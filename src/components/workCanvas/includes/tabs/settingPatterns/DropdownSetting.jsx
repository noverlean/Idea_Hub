import HorizontalBlock from '@components/fileComponents/HorizontalBlock'
import Paragraph from '@components/fileComponents/Paragraph'
import Dropdown from '@components/fileComponents/Dropdown'
import { useTranslation } from 'react-i18next'

export default function DropdownSetting({ settingObj })
{
    const {t} = useTranslation()
    console.log(settingObj.ableValues);
    
    return (
        <HorizontalBlock id={settingObj.name}>
            <Paragraph style={{marginLeft: "10px"}}>{t(settingObj.name)}</Paragraph>
            <Dropdown name={settingObj.name} currentValue={settingObj.value} ableValues={settingObj.ableValues} handler={settingObj.handler} />
        </HorizontalBlock>
    )
}