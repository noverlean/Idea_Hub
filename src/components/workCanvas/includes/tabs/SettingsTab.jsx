import '@css/settings.css'
import React from 'react'
import { useState } from 'react'
import { settings } from '@content/settings'
import Header from '@components/fileComponents/Header'
import Space from '@components/fileComponents/Space'
import HorizontalBlock from '@components/fileComponents/HorizontalBlock'
import Paragraph from '@components/fileComponents/Paragraph'
import Switch from '@components/fileComponents/Switch'
import { useTranslation } from 'react-i18next'

export default function SettingsTab()
{
    const [activeCategory, setActiveCategory] = useState('generalSettings')   
    const { t } = useTranslation()

    return (
        <div className='settingsTab'>
            <Space />
            {
                settings?.defaults?.map((category) => {
                    if (category.title === activeCategory) {
                        return category.content.map((section, index) => (
                            <React.Fragment key={ index }>
                                <Header text={ section.title } />
                                {
                                    section.content.map((setting, index1) => (
                                        <HorizontalBlock key={ index1 } innerContent={(
                                            <>
                                                <Paragraph text={ t(setting.name) } />
                                                <Switch name={ setting.name } type={ setting.switchType } content={ setting.ableValues } />
                                            </>
                                        )} />
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