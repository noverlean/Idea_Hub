import '@css/hierarchyPanel.css'
import {useEffect, useState} from "react";
import StructureHierarchyPanel from "./includes/StructureHierarchyPanel.jsx";
import SettingHierarchyPanel from "./includes/SettingHierarchyPanel.jsx";
import DesignHierarchyPanel from './includes/DesignHierarchyPanel';
import GraphHierarchyPanel from './includes/GraphHierarchyPanel';

export default function HierarchyPanel({ openType })
{
    const [currentContent, setCurrentContent] = useState('');
    const panelWidth = 250;

    const [width, setWidth] = useState(250);

    useEffect(() => {
        console.log(55)
        document.getElementById('hierarchyPanel').style.width = width + 'px'
    }, [width]);

    useEffect(() => {
        switch(openType)
        {
            case 'closed':
                setWidth(0);
                break;
            case 'structure':
                setWidth(panelWidth);
                setCurrentContent(<StructureHierarchyPanel />)
                break;
            case 'design':
                setWidth(panelWidth);
                setCurrentContent(<DesignHierarchyPanel />)
                break;
            case 'graph':
                setWidth(panelWidth);
                setCurrentContent(<GraphHierarchyPanel />)
                break;
            case 'settings':
                setWidth(panelWidth);
                setCurrentContent(<SettingHierarchyPanel />)
                break;
        }
    }, [ openType ]);

    return (
        <div id='hierarchyPanel'
            className='hierarchyPanel'
            style={{
                minWidth: ( openType !== 'closed' ? '200px' : '0px'),
                padding: ( openType !== 'closed' ? '10px' : '10px 0px'),
            }}
        >
            <div className='contentContainer'>
                { currentContent }
            </div>
        </div>
    )
}