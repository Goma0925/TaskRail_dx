
import React from 'react';

// import { NavBar, SideMenu, SideInfoBar} from "./containers/";
import { SplitPane, NavBar, SideInfoBar, SideMenu, RailContainer } from "./containers/index"; // just export components from index.ts in containers

function App() {
  return (
    <> 
      <SplitPane 
        top={<NavBar/>}
        left={<SideMenu/>} 
        center={<RailContainer />} 
        right={<SideInfoBar/>}
      />

    </>
  );
}

export default App;