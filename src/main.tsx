import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import type {} from '@mui/material/themeCssVarsAugmentation';

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  colorSchemes: {
    light: true,
    dark: true,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: 'contained' },
              style: ({ theme }) => ({
                color: theme.vars.palette.common.black,
                backgroundColor: theme.vars.palette.primary.main,
                ...theme.applyStyles('dark', {
                  color: theme.vars.palette.common.white,
                  backgroundColor: theme.vars.palette.warning.main,
                }),
              }),
            },
          ],
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
