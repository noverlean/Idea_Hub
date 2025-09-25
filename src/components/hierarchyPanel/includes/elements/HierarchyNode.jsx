import {Setting} from "@content/classes/Setting.js";
import {Section} from "@content/classes/Section.js";
import {useTranslation} from "react-i18next";
import {useState, useEffect, useRef} from "react";

export default function HierarchyNode({ label, content, handleParentNodeSelection, defaultActiveNodeLabel })
{
    const { t } = useTranslation()
    const [selected, setSelected] = useState(false)

    const bodyRef = useRef(null);
    const [bodySize, setBodySize] = useState(0)

    useEffect(()=>{ checkAndSetCurrentNodeAsActive() }, [])
    
    useEffect(()=>{ 
        setBodySize(selected ? bodyRef.current?.scrollHeight : 0)
    }, [ selected ])

    function handleNodeSelection(setSelectedTree)
    {
        setSelectedTree.push(setSelected);
        handleParentNodeSelection(setSelectedTree);
    }

    function checkAndSetCurrentNodeAsActive()
    {
        if (label === defaultActiveNodeLabel)
        {
            handleNodeSelection([])
        }
    }

    content.map((node) => {
        console.log(Object.hasOwn(node, 'title'))})
    console.log(content.filter((x) => { Object.hasOwn(x, 'title') }))

    return (
        <>
            <div className='hierarchyNode'>
                <div
                    className={
                        'headliner' +
                        ( content.filter((x) => { Object.hasOwn(x, 'title') }).length !== 0 ? '' : ' section' ) +
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