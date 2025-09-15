import HierarchyNode from "@components/hierarchyPanel/includes/elements/HierarchyNode.jsx";
import {useTranslation} from "react-i18next";
import {settings} from "@content/settings.jsx";
import {useState} from "react";

export default function SettingHierarchyPanel()
{
    const { t } = useTranslation()
    const [lastSelectionTree, setLastSelectionTree] = useState([])

    function handleNodeSelection(selectionTree)
    {
        lastSelectionTree.map((setSelected) => {
            setSelected(false)
        })

        selectionTree.map((setSelected) => {
            setSelected(true)
        })

        setLastSelectionTree(selectionTree)
    }

    return (
        <>
            <h2 className='header'>{ t('settings') }</h2>
            {
                settings.defaults.map((node, index) => (
                    <HierarchyNode
                        key={ index }
                        label={ t(node.title) }
                        content={ node.content }
                        handleParentNodeSelection={ handleNodeSelection }
                    />
                ))
            }
        </>
    )
}