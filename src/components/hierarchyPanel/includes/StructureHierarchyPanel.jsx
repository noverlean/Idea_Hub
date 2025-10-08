import {useTranslation} from "react-i18next";
// import { useState } from "react";
// import HierarchyNode from "./elements/HierarchyNode";

export default function StructureHierarchyPanel()
{
    // const {t} = useTranslation()
    // const [lastSelectionTree, setLastSelectionTree] = useState([])

    // function handleNodeSelection(selectionTree)
    // {
    //     lastSelectionTree.map((setSelected) => {
    //         setSelected(false)
    //     })

    //     let childBlockHeight = 0
    //     selectionTree.map((setSelected) => {
    //         childBlockHeight = setSelected(true, childBlockHeight)
    //     })

    //     setLastSelectionTree(selectionTree)
    // }

    return (
        <>
            <h2 className='header'>Структура</h2>
            {
                <EmptyPlug />
            }
        </>
    )
}

function EmptyPlug()
{
    const {t} = useTranslation()

    return (<>
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <p style={{ 
                    marginBottom: 6+'px' 
                }} >{t('emptyHereNow')}</p>
            <button style={{ 
                    paddingTop: 5+'px',
                    paddingRight: 8+'px',
                    paddingBottom: 5+'px',
                    paddingLeft: 8+'px',
                }} >{t('createNewNote')}</button>
        </div>
        
    </>)
}