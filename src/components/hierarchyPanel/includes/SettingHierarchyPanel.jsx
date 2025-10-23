import HierarchyNode from "@components/hierarchyPanel/includes/elements/HierarchyNode.jsx";
import {useTranslation} from "react-i18next";
import {settingsObj} from "@content/settings.jsx";
import {useState, useContext, useLayoutEffect} from "react";
import useCache from "@hooks/useCache";
import {SettingPanelContext} from "@contexts/settingPanelContext.jsx";

export default function SettingHierarchyPanel()
{
    const { t } = useTranslation()
    const [lastSelectionTree, setLastSelectionTree] = useState([])
    const settingPanelContext = useContext(SettingPanelContext)
    const [defaultActiveNodeLabel, setDefaultActiveNodeLabel] = useCache('defaultActiveNodeLabel', 'ui_lang')

    function handleNodeSelection(selectionTree)
    {
        console.log(1);
        console.log(settingPanelContext.selectedNodeLabel);
        
        
        lastSelectionTree.map((setSelected) => {
            setSelected(false)
        })

        let childBlockHeight = 0
        selectionTree.map((setSelected) => {
            console.log(childBlockHeight);
            
            childBlockHeight = setSelected(true, childBlockHeight)
        })

        setLastSelectionTree(selectionTree)
    }

    useLayoutEffect(() => {
        setDefaultActiveNodeLabel(settingPanelContext.selectedNodeLabel)
    }, [settingPanelContext.selectedNodeLabel])

    return (
        <>
            <h2 className='header'>{ t('settings') }</h2>
            {
                settingsObj.defaults.map((node, index) => (
                    <HierarchyNode
                        key={ index }
                        label={ node.title }
                        content={ node.content }
                        handleParentNodeSelection={ handleNodeSelection }
                        defaultActiveNodeLabel={ defaultActiveNodeLabel }
                    />
                ))
            }
        </>
    )
}