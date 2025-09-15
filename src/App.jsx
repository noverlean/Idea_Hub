import './App.css'
import '@css/workspace.css'
import PanelControlBar from "@components/panelControlBar/PanelControlBar.jsx";
import HierarchyPanel from "@components/hierarchyPanel/HierarchyPanel.jsx";
import WorkCanvas from "@components/workCanvas/WorkCanvas.jsx";
import {useState} from "react";

function App() {
    const [hierarchyPanelOpenType, setHierarchyPanelOpenState] = useState('structure') //able to allow values 'closed', 'structure', 'graph', 'settings'

    return (
    <>
        <div className='workspace'>
            <PanelControlBar currentHierarchyPanelOpenState={ hierarchyPanelOpenType } setHierarchyPanelOpenState={ setHierarchyPanelOpenState }/>
            <HierarchyPanel openType={ hierarchyPanelOpenType }/>
            <WorkCanvas openType={ hierarchyPanelOpenType } />
        </div>
    </>
  )
}

export default App
