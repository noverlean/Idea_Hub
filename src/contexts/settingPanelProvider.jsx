import {useState} from 'react';
import {SettingPanelContext} from "@contexts/settingPanelContext.jsx";

export const SettingPanelProvider = ({ children }) => {
    const [selectedNodeLabel, setSelectedNodeLabel] = useState(null);

    return (
        <SettingPanelContext.Provider value={{ selectedNodeLabel, setSelectedNodeLabel }}>
            {children}
        </SettingPanelContext.Provider>
    );
};