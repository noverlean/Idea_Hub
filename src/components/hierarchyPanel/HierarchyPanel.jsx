import '@css/hierarchyPanel.css'
import StructureHierarchyPanel from "@components/hierarchyPanel/includes/StructureHierarchyPanel.jsx";
import {useEffect, useState} from "react";
import SettingHierarchyPanel from "@components/hierarchyPanel/includes/SettingHierarchyPanel.jsx";

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
            case 'graph':
                setWidth(panelWidth);
                setCurrentContent(<StructureHierarchyPanel />)
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