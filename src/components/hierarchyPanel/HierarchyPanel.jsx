import '@css/hierarchyPanel.css'
import StructureHierarchyPanel from "@components/hierarchyPanel/includes/StructureHierarchyPanel.jsx";
import {useEffect, useState} from "react";
import SettingHierarchyPanel from "@components/hierarchyPanel/includes/SettingHierarchyPanel.jsx";

export default function HierarchyPanel({ openType })
{
    const [currentContent, setCurrentContent] = useState('');
    // const [resizing, setResizing] = useState(false);
    const [lastSettedWidth, setLastSettedWidth] = useState(250);

    const [width, setWidth] = useState(250);
    //
    // function handleMouseMove(event) {
    //     console.log(resizing)
    //     if (resizing)
    //         setWidth(event.clientX - 51)
    // }
    //
    // function handleMouseUp() {
    //     setResizing(false)
    // }
    //
    // useEffect(() => {
    //     console.log('change ' + resizing)
    // }, [resizing])
    //
    // useEffect(() => {
    //     document.removeEventListener('mousemove', (event) => handleMouseMove(event))
    //     document.removeEventListener('mouseup', handleMouseUp)
    //     //todo resizing of hierarchy panel
    //     document.event
    //
    //     document.addEventListener('mousemove', handleMouseMove(event))
    //     document.addEventListener('mouseup', handleMouseUp)
    // }, [resizing])
    //
    useEffect(() => {
        console.log(55)
        document.getElementById('hierarchyPanel').style.width = width + 'px'
    }, [width]);

    useEffect(() => {
        switch(openType)
        {
            case 'closed':
                setWidth(0);
                console.log(9090909)
                break;
            case 'structure':
                setWidth(lastSettedWidth)
                setCurrentContent(<StructureHierarchyPanel />)
                break;
            case 'graph':
                setWidth(lastSettedWidth)
                setCurrentContent(<StructureHierarchyPanel />)
                break;
            case 'settings':
                setWidth(lastSettedWidth)
                setCurrentContent(<SettingHierarchyPanel />)
                break;
        }
    }, [lastSettedWidth, openType]);

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

            {/*<div className='splitter' onMouseDown={ () => {*/}
            {/*    console.log(909090)*/}
            {/*    setResizing(true)*/}
            {/*}}></div>*/}
        </div>
    )
}