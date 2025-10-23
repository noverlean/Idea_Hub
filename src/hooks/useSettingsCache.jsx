import { useState } from 'react';
import { settingsObj } from '../content/settings';
import { useTranslation } from 'react-i18next';

export default function useSettingsCache(settingName) {
  const {i18n} = useTranslation()
  const [setting, setSettingRaw] = useState(() => {        
    const settingObj = settingsObj.getSettingObjsList().findSetting(settingName)
    const cached = localStorage.getItem(`settings.${settingObj.name}`);

    if (cached) {
      settingObj.value = cached
    }

    return settingObj;
  });

  const updateSetting = (value) => {
    if (setting.ableValues.includes(value))
    {
      setSettingRaw((prevSetting) => {
        prevSetting.value = value;
        localStorage.setItem(`settings.${settingName}`, value);

        return prevSetting;
      });
      setting.handler(value, { i18n: i18n });
    } else {
      console.error(`Неожидаемый вариант значения, который не был определен: ${value}`);
    }
  };

  return [setting, updateSetting];
}
