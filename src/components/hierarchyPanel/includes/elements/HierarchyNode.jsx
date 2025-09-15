import {Setting} from "@content/classes/Setting.js";
import {Section} from "@content/classes/Section.js";
import {useTranslation} from "react-i18next";
import {useState} from "react";

export default function HierarchyNode({ label, content, handleParentNodeSelection, styleModifier = '' })
{
    const { t } = useTranslation()
    const [selected, setSelected] = useState(false)

    function handleNodeSelection(setSelectedTree)
    {
        setSelectedTree.push(setSelected);
        handleParentNodeSelection(setSelectedTree);
    }

    return (
        <>
            <div className='hierarchyNode'>
                <div
                    className={
                        'headliner' +
                        styleModifier +
                        (selected ? ' selected' : '')
                    }
                    onClick={ () => handleNodeSelection([]) }
                >
                    <p className='label'> { t(label) } </p>
                </div>
                <div className='body'>
                    {
                        content.map((node, index) => {
                            let _styleModifier1 = '';
                            if (node instanceof Section)
                            {
                                _styleModifier1 += ' section'
                            }

                            if (Object.hasOwn(node, 'title'))
                            {
                                return (
                                    <HierarchyNode
                                        key={ index }
                                        label={ node.title }
                                        content={ node.content }
                                        handleParentNodeSelection={ handleNodeSelection }
                                        styleModifier={ _styleModifier1 }
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