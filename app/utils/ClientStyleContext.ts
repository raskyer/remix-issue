import { createContext } from 'react';

export const ClientStyleContext = createContext({
  reset: () => {},
});

export async function getThemeOptions() {
  return {
    typography: {
      fontSize: 16,
      fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      body1: {
        fontSize: '1rem', // BASE (16)
      },
      body2: {
        fontSize: '0.875rem', // SM (14)
      },
      subtitle1: {
        fontSize: '1rem', // XS (12)
      },
      subtitle2: {
        fontSize: '0.875rem', // XS (12)
      },
      caption: {
        fontSize: '0.75rem', // XS (12)
      },
      h6: {
        fontSize: '1.125rem', // LG (18)
      },
      h5: {
        fontSize: '1.25rem', // XL (20)
      },
      h4: {
        fontSize: '1.5rem', // 2XL (24)
      },
      h3: {
        fontSize: '1.875rem', // 3XL (30)
      },
      h2: {
        fontSize: '2.25rem', // 4XL (36)
      },
      h1: {
        fontSize: '3rem', // 5XL (48)
      },
    },
  };
}
