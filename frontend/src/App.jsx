import './App.css'
import { Homepage } from './pages/Homepage'
import { Routes, Route } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { GroupForm } from './pages/GroupForm'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/home" element={<Homepage />} />
        <Route path="/group-creation" element={<GroupForm />} />
      </Routes>
    </ThemeProvider>
    
 
  )
}

export default App
