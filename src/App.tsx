import {
  Button,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useColorScheme,
} from '@mui/material';
import { useState } from 'react';

function App() {
  const [defaultScheme, setDefaultScheme] = useState<'light' | 'dark'>('light');
  const { setColorScheme } = useColorScheme();

  return (
    <Stack direction="column" spacing={2} padding={2} alignItems="start">
      <Paper sx={{ padding: 2 }}>
        <Typography variant="h6">This should change with the theme</Typography>
        <Button variant="contained">Default</Button>
      </Paper>
      <div className="light">
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">This should stay in light mode</Typography>
          <Button variant="contained">Light</Button>
        </Paper>
      </div>
      <div className="dark">
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">This should stay in dark mode</Typography>
          <Button variant="contained">dark</Button>
        </Paper>
      </div>
      <div>
        <ToggleButtonGroup
          exclusive
          value={defaultScheme}
          onChange={(_, value) => {
            if (value) {
              setColorScheme(value);
              setDefaultScheme(value);
            }
          }}
        >
          <ToggleButton value="light">Light</ToggleButton>
          <ToggleButton value="dark">Dark</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </Stack>
  );
}

export default App;
