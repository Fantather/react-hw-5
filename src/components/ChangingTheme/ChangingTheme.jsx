// Создайте React-компонент, который позволяет пользователю переключаться между светлой и темной темами
// При переключении тема должна изменяться, и компонент должен отобразить текущую тем

import clsx from 'clsx';
import { useState } from 'react';
import {light, dark, blue, root, background} from './ChangingTheme.module.css'

const THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
    BLUE: 'blue'
}

const THEMES_MAP = {
    [THEMES.LIGHT]: {theme: light, nextTheme: THEMES.DARK},
    [THEMES.DARK]: {theme: dark, nextTheme: THEMES.BLUE},
    [THEMES.BLUE]: {theme: blue, nextTheme: THEMES.LIGHT},
};

export default function ChangingTheme()
{
    const [currentTheme, setTheme] = useState(THEMES_MAP[THEMES.LIGHT]);

    return(
        <div className={root}>
            <div className={clsx(background, currentTheme.theme)}></div>
            <button onClick={()=>setTheme((prevTheme) => THEMES_MAP[prevTheme.nextTheme])}>Сменить тему</button>
        </div>
    );
}