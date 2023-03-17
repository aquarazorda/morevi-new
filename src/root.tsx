// @refresh reload
import { createI18nContext, I18nContext } from '@solid-primitives/i18n';
import { onMount, Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  Head,
  Html,
  Link,
  Meta,
  Scripts,
  Title,
} from "solid-start";
import { App } from './components/App';
import { languageDict } from './lib/language';
import { subToAuth } from './lib/supabase';
import { CacheProvider } from './lib/cache-resource';
import { setThemeMode, subToTheme } from './lib/theme';

export default function Root() {
  const value = createI18nContext(languageDict, 'en');
  onMount(() => {
    subToTheme();
    setThemeMode(localStorage.getItem('color-schema') || 'dark');
  });
  subToAuth();

  return (
    <Html lang="en">
      <Head>
        <Title>Morevi.ge</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="description" content="Morevi.Ge Main Page" />
        <Link rel="preload" href="/fonts/Oxanium/Oxanium-VariableFont_wght.ttf" as="font" crossOrigin='anonymous' />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <I18nContext.Provider value={value}>
              <CacheProvider>
                <App />
              </CacheProvider>
            </I18nContext.Provider>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
