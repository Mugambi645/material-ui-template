import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';

function App() {
  return (
    <div>
<Button variant="text">Text</Button>
<Button variant="contained" color='secondary' size='small'>Contained</Button>
<Button disabled  variant="outlined">Outlined</Button>
    </div>
  );
}

export default App;
