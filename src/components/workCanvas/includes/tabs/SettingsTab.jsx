import '@css/settingsTab.css'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { settings } from '@content/settings'
import Header from '@components/fileComponents/Header'
import Space from '@components/fileComponents/Space'
import HorizontalBlock from '@components/fileComponents/HorizontalBlock'
import Paragraph from '@components/fileComponents/Paragraph'
import Switch from '@components/fileComponents/Switch'
import { useTranslation } from 'react-i18next'

export default function SettingsTab({ settingPanelContext })
{
    const [activeCategory, setActiveCategory] = useState('generalSettings')   
    const { t } = useTranslation()

    useEffect(() => {
        let activeCategoryTitle = settings.findCategoryByChildName(settingPanelContext.selectedNodeLabel)
        setActiveCategory(activeCategoryTitle)
        console.log(activeCategoryTitle);
        
    }, [settingPanelContext.selectedNodeLabel])

    return (
        <div className='settingsTab'>
            <Space />
            {
                settings?.defaults?.map((category) => {
                    if (category.title === activeCategory) {
                        return category.content.map((section, index) => (
                            <React.Fragment key={ index }>
                                <Header>{ section.title }</Header> 
                                {
                                    section.content.map((setting, index1) => (
                                        <HorizontalBlock key={ index1 }>
                                            <Paragraph style={{marginLeft: "10px"}}>{ t(setting.name) }</Paragraph>
                                            <Switch name={ setting.name } type={ setting.switchType } content={ setting.ableValues } />
                                        </HorizontalBlock>
                                    ))
                                }
                                <Space />
                            </React.Fragment>
                        ));
                    }
                    return null;
                })
            }
        </div>
    )
}