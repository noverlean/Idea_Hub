import '@css/workCanvas.css'
import {useState} from "react";
import EmptyTab from "@components/workCanvas/includes/EmptyTab.jsx";
import SpaceMarker from "@components/workCanvas/includes/SpaceMarker.jsx";
import Tab from "@components/workCanvas/includes/Tab.jsx";
import SettingsTab from "@components/workCanvas/includes/SettingsTab.jsx";

export default function WorkCanvas({ hierarchyPanelOpenType })
{
    const [tabCount, setTabCount] = useState(0)

    return (
        <div className='workCanvas'>
            { tabCount === 0 && <EmptyTab /> }

            <Tab innerContent={
                () => {
                    console.log(hierarchyPanelOpenType)
                    switch (hierarchyPanelOpenType) {
                        case 'structure':
                            return ( <></> )
                        case 'graph':
                            return ( <></> )
                        case 'settings':
                            setTabCount(tabCount + 1)
                            return ( <SettingsTab /> )
                    }
                }
            } />


            {/*<SpaceMarker />*/}
        </div>
    )
}