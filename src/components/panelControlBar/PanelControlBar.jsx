import '@css/panelControlBar.css'
import PanelControlButton from "@components/panelControlBar/PanelControlButton.jsx";
import windowIcon from "@assets/windows.png";
import designIcon from "@assets/design.png";
import graphIcon from "@assets/branches.png";
import settings from "@assets/settings.png"

export default function PanelControlBar({ currentHierarchyPanelOpenState, setHierarchyPanelOpenState })
{
    return (
        <div className="panelControlBar">
            <PanelControlButton imageSrc={windowIcon}
                                isActive={currentHierarchyPanelOpenState === 'structure'}
                                onClick={() => {
                                    setHierarchyPanelOpenState(currentHierarchyPanelOpenState !== 'structure' ? 'structure' : 'closed');
                                }}
            />
            <PanelControlButton imageSrc={designIcon}
                                isActive={currentHierarchyPanelOpenState === 'design'}
                                onClick={() => {
                                    setHierarchyPanelOpenState(currentHierarchyPanelOpenState !== 'design' ? 'design' : 'closed');
                                }}
            />
            <PanelControlButton imageSrc={graphIcon}
                                isActive={currentHierarchyPanelOpenState === 'graph'}
                                onClick={() => {
                                    setHierarchyPanelOpenState(currentHierarchyPanelOpenState !== 'graph' ? 'graph' : 'closed');
                                }}
            />
            <div style={{ flexGrow: 1 }}></div>
            <PanelControlButton imageSrc={settings}
                                isActive={currentHierarchyPanelOpenState === 'settings'}
                                onClick={() => {
                                    setHierarchyPanelOpenState(currentHierarchyPanelOpenState !== 'settings' ? 'settings' : 'closed');
                                }}
            />
        </div>
    )
}