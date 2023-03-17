import { setElementVars } from '@vanilla-extract/dynamic';
import { createEffect, createSignal } from 'solid-js';
import { themeVars } from '~/styles/themes/base.css';
import { darkTheme } from '~/styles/themes/dark.css';
import { lightTheme } from '~/styles/themes/light.css';

export const [themeMode, setThemeMode] = createSignal('light');

export const subToTheme = () => createEffect(() => setElementVars(document.body, themeVars, themeMode() === 'dark' ? darkTheme : lightTheme));