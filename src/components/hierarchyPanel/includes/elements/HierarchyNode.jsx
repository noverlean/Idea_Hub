import {Setting} from "@content/classes/Setting.js";
import {Section} from "@content/classes/Section.js";
import {useTranslation} from "react-i18next";
import {useState, useEffect} from "react";

export default function HierarchyNode({ label, content, handleParentNodeSelection, defaultActiveNodeLabel })
{
    const { t } = useTranslation()
    const [selected, setSelected] = useState(false)

    useEffect(()=>{ checkAndSetCurrentNodeAsActive() }, [])

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
                        ( childCount === 0 ? ' section' : '' ) +
                        ( selected ? ' selected' : '' )
                    }
                    onClick={ () => handleNodeSelection([]) }
                >
                    <p className='label'> { t(label) } </p>
                </div>
                <div className={'body' + (selected ? ' showed' : ' collapsed') }>
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