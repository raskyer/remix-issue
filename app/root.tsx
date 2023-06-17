import { useContext } from 'react';

import { ThemeProvider, withEmotionCache } from '@emotion/react';
import {
  CssBaseline,
  unstable_useEnhancedEffect as useEnhancedEffect,
  type ThemeOptions,
  createTheme,
} from '@mui/material';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';

import {
  ClientStyleContext,
  getThemeOptions,
} from './utils/ClientStyleContext';

export async function loader() {
  const themeOptions = await getThemeOptions();
  return {
    themeOptions,
  };
}

export default function Root() {
  const { themeOptions } = useLoaderData<typeof loader>();
  const theme = createTheme(themeOptions as ThemeOptions);

  return (
    <FullDocument>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Outlet />
      </ThemeProvider>
    </FullDocument>
  );
}

type Props = {
  children: React.ReactNode;
};

const FullDocument = withEmotionCache(({ children }: Props, emotionCache) => {
  const clientStyleData = useContext(ClientStyleContext);

  useEnhancedEffect(() => {
    emotionCache.sheet.container = document.head;
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      // eslint-disable-next-line no-underscore-dangle
      (emotionCache.sheet as any)._insertTag(tag);
    });
    clientStyleData.reset();
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Test</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <meta
          name="emotion-insertion-point"
          content="emotion-insertion-point"
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
});
