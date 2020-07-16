import { createContext, useContext } from 'react';

const ThemeContext = createContext({
  primaryColor: 'rgb(89, 167, 45)',
  buttonTextColor: 'white',
  grey: 'rgb(245, 245, 245)',
  fontColor: 'rgb(93, 93, 93)',
  fontSize: 16,
  em: 4,
  statusBar: {
    backgroundColor: 'white',
  },
});

export const useTheme = () => useContext(ThemeContext);

// Normally, I'd create a <ThemeProvider /> component to pass the theme
// variables from some external source. But I won't do that here for the sake
// of brevity.
