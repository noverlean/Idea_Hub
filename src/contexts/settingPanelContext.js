import { createContext, useContext } from 'react';

export const SettingPanelContext = createContext();

export default function useSettingPanelContext() {
    return useContext(SettingPanelContext);
}
