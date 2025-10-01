import '@css/workCanvas.css'
import {useContext, useEffect, useState} from "react";
import EmptyTab from "@components/workCanvas/includes/tabs/EmptyTab.jsx";
import Tab from "@components/workCanvas/includes/tabs/Tab.jsx";
import {SettingPanelContext} from "@contexts/settingPanelContext.jsx";
import SettingsTab from "@components/workCanvas/includes/tabs/SettingsTab.jsx";

export default function WorkCanvas({ hierarchyPanelOpenType })
{
    const [tabs] = useState([])
    const settingPanelContext = useContext(SettingPanelContext)

    useEffect(() => {
        activateTab(settingPanelContext.selectedNodeLabel)
    }, [settingPanelContext.selectedNodeLabel])

    function activateTab(selectedNodeLabel)
    {
        console.log(selectedNodeLabel);
    }

    function setContentForEternalTabs() {
        switch (hierarchyPanelOpenType) {
            case 'structure':
                tabs.map((elem) => {
                    tabs.pop(elem)
                })
                break;
            case 'graph':
                tabs.map((elem) => {
                    tabs.pop(elem)
                })
                break;
            case 'settings':
                tabs.map((elem) => {
                    tabs.pop(elem)
                })

                tabs.push( <SettingsTab /> )
                break;
        }
    }

    setContentForEternalTabs();

    return (
        <div className='workCanvas'>
            { tabs.length === 0 && <EmptyTab /> }

            {
                tabs.map((elem, index) => (
                    <Tab key={ index } innerContent={ elem } />
                ))
            }

            {/*<SpaceMarker />*/}
        </div>
    )
}