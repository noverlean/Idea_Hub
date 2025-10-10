import '@css/settingsTab.css'
import React, { Fragment, useEffect } from 'react'
import { useState } from 'react'
import { settings } from '@content/settings'
import Header from '@components/fileComponents/Header'
import Space from '@components/fileComponents/Space'
import Container from '../../../fileComponents/Container'
import DropdownSetting from './settingPatterns/DropdownSetting.jsx'

export default function SettingsTab({ settingPanelContext })
{
    const [activeCategory, setActiveCategory] = useState('generalSettings')   
    let spotlightTimeout;

    useEffect(() => {
        if (settingPanelContext.selectedNodeLabel === null)
            return

        let activatedCategoryTitle = settings.findCategoryByChildName(settingPanelContext.selectedNodeLabel)
        let activatedNode = document.getElementById(settingPanelContext.selectedNodeLabel)
              
        
        setActiveCategory(activatedCategoryTitle)
        scrollTo(activatedNode)
        animateActivatedSection("containerOf"+settingPanelContext.selectedNodeLabel, spotlightTimeout)
        
    }, [settingPanelContext.selectedNodeLabel])

    
    return (
        <div className='settingsTab'>
            <Space />
            <Container id={"containerOf"+activeCategory}>
            {
                getCurrentCategory(activeCategory).content.map((section, index) => (
                    <Fragment key={ index } >
                        <Container id={"containerOf"+section.title}>
                            <Header>{ section.title }</Header> 
                            {
                                section.content.map((setting, index1) => {
                                    switch(setting.type)
                                    {
                                        case 'dropdown':
                                            return (<DropdownSetting key={index1} settingObj={setting} />)
                                        case 'gallery':
                                            console.warn("no such corresponding setting type for parse to component");
                                            break;
                                        default: 
                                            console.error("no such corresponding setting type for parse to component");
                                    }
                                })
                            }
                        </Container>
                        <Space />
                    </Fragment>
                ))
            }
            </Container>
        </div>
    )
}

function animateActivatedSection(elemId, spotlightTimeout) {
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            const elem = document.getElementById(elemId);
            console.log(elem);
            
            if (!elem) return;

            elem.classList.add('spotlighted');

            clearTimeout(spotlightTimeout);
            spotlightTimeout = setTimeout(() => {
                elem.classList.remove('spotlighted');
            }, 800);
        });
    });
}

function getCurrentCategory(_activeCategory)
{
    let _result = null;
    
    settings?.defaults?.map((category) => {
        if (category.title === _activeCategory) {
            _result = category
        }
    })

    return _result
}
