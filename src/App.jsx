import './App.css'
import '@css/workspace.css'
import PanelControlBar from "@components/panelControlBar/PanelControlBar.jsx";
import HierarchyPanel from "@components/hierarchyPanel/HierarchyPanel.jsx";
import WorkCanvas from "@components/workCanvas/WorkCanvas.jsx";
import {useState} from "react";
import {SettingPanelProvider} from "@contexts/settingPanelProvider.jsx";

function App() {
    const [hierarchyPanelOpenType, setHierarchyPanelOpenState] = useState('structure') //able to allow values 'closed', 'structure', 'design', 'graph', 'settings'

    return (
    <>
        <div className='workspace'>
            <PanelControlBar currentHierarchyPanelOpenState={ hierarchyPanelOpenType } setHierarchyPanelOpenState={ setHierarchyPanelOpenState }/>
            <SettingPanelProvider>
                <HierarchyPanel openType={ hierarchyPanelOpenType }/>
                <WorkCanvas hierarchyPanelOpenType={ hierarchyPanelOpenType } />
            </SettingPanelProvider>
        </div>
    </>
  )
}

export default App
