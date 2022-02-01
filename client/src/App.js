import React from "react";
import { Typography, AppBar } from "@material-ui/core";

const App = () => {
  return (
    <div>
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Kool RTC Chat
        </Typography>
        {/* VideoPlayer */}
        {/* Options -> Notifications */}
      </AppBar>
    </div>
  );
};

export default App;
