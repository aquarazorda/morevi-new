import { mount, StartClient } from "solid-start/entry-client";
import { setThemeMode, subToTheme } from './lib/theme';

mount(() => {
  console.log(localStorage);
  setThemeMode(localStorage.getItem('color-schema') || 'dark');
  subToTheme();

  return <StartClient />;
}, document);
