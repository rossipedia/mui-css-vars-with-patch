import {
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  useColorScheme,
} from '@mui/material';
import { useState } from 'react';

function App() {
  const [defaultScheme, setDefaultScheme] = useState<'light' | 'dark'>('light');
  const { setColorScheme } = useColorScheme();

  console.log('defaultScheme', defaultScheme);

  return (
    <Stack direction="column" spacing={2} padding={2} alignItems="start">
      <Button variant="contained">Default</Button>
      <div className="light">
        <Button variant="contained">Light</Button>
      </div>
      <div className="dark">
        <Button variant="contained">dark</Button>
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
