import {Category} from "@content/classes/Category.js";
import {Section} from "@content/classes/Section.js";
import {Setting} from "@content/classes/Setting.js";

function plugHandler(value)
{
    console.log(`значение параметра изменено на ${value}`);
}

function changeLanguageHandler(value, dependencies) {
    dependencies.i18n.changeLanguage(value);
}

export const settingsObj = {
    overrided: [],
    defaults: [
        new Category(
            'generalSettings',
            [
                new Section(
                    'ui_lang',
                    [
                        new Setting(
                            'ui_language',
                            'ru',
                            'dropdown',
                            ['ru', 'en'],
                            changeLanguageHandler
                        )
                    ]
                ),
            ]
        ),
        new Category(
            'appearance',
            [
                new Section(
                    'theme',
                    [
                        new Setting(
                            'theme',
                            'black',
                            'dropdown',
                            [
                                'lightTheme',
                                'darkTheme'
                            ],
                            plugHandler
                        )
                    ]
                ),
                new Section(
                    'icon',
                    [
                        new Setting(
                            'icon',
                            'default',
                            'gallery',
                            [
                                'default',
                                'dark',
                                'light'
                            ],
                            plugHandler
                        )
                    ]
                ),
            ]
        ),
        new Category(
            'account',
            [
                new Section(
                    'linkAccount',
                    [
                        new Setting(
                            'account_link_selection',
                            'none',
                            'gallery',
                            [
                                'none',
                                'google drive'
                            ],
                            plugHandler
                        )
                    ]
                ),
            ]
        )
    ],
    findCategoryByChildName(childName)
    {
        let categoryName = ''

        this.defaults.forEach((category) => {
            if (categoryName !== '')
                return;    

            if (category.title === childName)
                categoryName = category.title;

            category.content.forEach((section) => {
                if (categoryName !== '')
                    return;   

                if (section.title === childName)
                    categoryName = category.title;

                section.content.forEach((setting) => {
                    if (categoryName !== '')
                        return;

                    if (setting.name === childName)
                        categoryName = category.title;
                })
            })
        })

        return categoryName
    },
    settingObjs: {
        list: [],
        item(index){ return this.list[index] },
        findSetting(name) {
            let resultSettingObj = null
            this.list.forEach((settingObj) => {
                if (settingObj.name === name)
                    resultSettingObj = settingObj
            })
            return resultSettingObj;
        },
        push(settingObj) {
            this.list.push(settingObj)
        },
        length() {
            return this.list.length;
        }
    },
    _getSettingObjsList()
    {
        this.defaults.forEach((category) => {
            category.content.forEach((section) => {
                section.content.forEach((setting) => {
                    this.settingObjs.push(setting)
                })
            })
        })
    },
    getSettingObjsList()
    {
        if (this.settingObjs.length() === 0)
            this._getSettingObjsList()

        return this.settingObjs;
    }
}
