import {Category} from "@content/classes/Category.js";
import {Section} from "@content/classes/Section.js";
import {Setting} from "@content/classes/Setting.js";

export const settings = {
    defaults: [
        new Category(
            'generalSettings',
            []
        ),
        new Category(
            'appearance',
            [
                new Section(
                    'ui_lang',
                    [
                        new Setting(
                            'ui_language',
                            'ru',
                            [
                                'ru',
                                'en'
                            ]
                        )
                    ]
                ),
                new Section(
                    'theme',
                    [
                        new Setting(
                            'theme',
                            'black',
                            [
                                'white',
                                'black'
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
            []
        )
    ],
}