import {Category} from "@content/classes/Category.js";
import {Section} from "@content/classes/Section.js";
import {Setting} from "@content/classes/Setting.js";

function changeLanguageHandler(value, translation) {
  if (this.ableValues.includes(value)) {
    this.value = value;
    translation.changeLanguage(value);
  } else {
    console.error(`Неподдерживаемый язык: ${value}`);
  }
}

export const settings = {
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
                            ]
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
                                'default'
                            ]
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
                                'default'
                            ]
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
    }    
}
