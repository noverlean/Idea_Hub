import {useTranslation} from "react-i18next";

export default function DesignHierarchyPanel()
{
    return (
        <>
            <h2 className='header'>Дизайн</h2>
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
            }} >{t('createNewDesign')}</button>
        </div>
        
    </>)
}