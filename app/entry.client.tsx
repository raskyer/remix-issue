import { useState } from 'react';
import { StrictMode, startTransition } from 'react';
import { hydrateRoot } from 'react-dom/client';

import { CacheProvider } from '@emotion/react';
import { RemixBrowser } from '@remix-run/react';

import { ClientStyleContext } from './utils/ClientStyleContext';
import { createEmotionCache } from './utils/emotion';

interface ClientCacheProviderProps {
  children: React.ReactNode;
}

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = useState(createEmotionCache());

  function reset() {
    setCache(createEmotionCache());
  }

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
}

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <ClientCacheProvider>
        <RemixBrowser />
      </ClientCacheProvider>
    </StrictMode>
  );
});
