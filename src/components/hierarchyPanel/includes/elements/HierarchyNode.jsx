import {useTranslation} from "react-i18next";
import {useState, useEffect, useRef, useContext} from "react";
import {SettingPanelContext} from "@contexts/settingPanelContext.jsx";

export default function HierarchyNode({ label, content, handleParentNodeSelection, defaultActiveNodeLabel })
{
    const { t } = useTranslation()
    const [selected, setSelected] = useState(false)

    const bodyRef = useRef(null);
    const [bodySize, setBodySize] = useState(0)
    const [scrollHeightCached, setScrollHeightCached] = useState(0)

    const { setSelectedNodeLabel } = useContext(SettingPanelContext);

    useEffect(()=>{ 
        checkAndSetCurrentNodeAsActive()
        calculateAndCacheScrollHeightForCurrent() 
    }, [])

    // using not by useEffect for ability to update block height for event when child nodes state values (useEffect is not react on it) 
    function recursiveStateSetter(state, childBlockHeight)
    {        
        setSelected(state)
        if (state)
        {
            setBodySize(childBlockHeight + scrollHeightCached)
        }
        else
        {
            setBodySize(0)
        }

        return (scrollHeightCached);
    }

    function handleNodeSelection(setSelectedTree)
    {
        setSelectedTree.push(recursiveStateSetter)
        handleParentNodeSelection(setSelectedTree)

        setSelectedNodeLabel(label)
    }

    function checkAndSetCurrentNodeAsActive()
    {
        if (label === defaultActiveNodeLabel)
        {
            handleNodeSelection([])
        }
    }

    function calculateAndCacheScrollHeightForCurrent() 
    {
        setScrollHeightCached(bodyRef.current?.scrollHeight)
    }

    const childCount = content.filter((node) => {
        if (Object.hasOwn(node, 'title'))
            return node;
    }).length

    return (
        <>
            <div className='hierarchyNode'>
                <div
                    className={
                        'headliner' +
                        ( childCount !== 0 ? ' section' : '' ) +
                        ( selected ? ' selected' : '' )
                    }
                    onClick={ () => handleNodeSelection([]) }
                >
                    <p className='label'> { t(label) } </p>
                </div>
                <div ref={ bodyRef } className={'body'} style={{ height: bodySize }}>
                    {
                        content.map((node, index) => {
                            if (Object.hasOwn(node, 'title'))
                            {
                                return (
                                    <HierarchyNode
                                        key={ index }
                                        label={ node.title }
                                        content={ node.content }
                                        handleParentNodeSelection={ handleNodeSelection }
                                        defaultActiveNodeLabel={ defaultActiveNodeLabel }
                                    />
                                )
                            }
                        })
                    }
                </div>
            </div>
        </>
    )
}