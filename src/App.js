import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { Box, Stack } from "@mui/system";
import Navbar from "./components/Navbar";
import AddPost from "./components/AddPost";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import { createTheme } from "@mui/material";

function App() {
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={mode === 'light' ? 'white' : 'black' } color={mode === 'light' ? 'black' : 'white' }>
        <Navbar mode={mode}/>
        <Stack direction="row" spacing={2} justifyContent={"space-evenly"}>
          <Sidebar mode={mode} setMode={setMode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <AddPost mode={mode} setMode={setMode}/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
