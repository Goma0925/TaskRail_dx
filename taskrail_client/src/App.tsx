import React from 'react';
<<<<<<< HEAD
// import { NavBar, SideMenu, SideInfoBar} from "./containers/";
import { NavBar, SideInfoBar, SideMenu } from "./containers/index"; // just export components from index.ts in containers
import { RailContainer } from "./containers/RailContainer/RailContainer";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <SideMenu></SideMenu>
      <RailContainer width={window.innerWidth} height={window.innerHeight}></RailContainer>
      <SideInfoBar text={"some text"}></SideInfoBar>
    </>
  );
}

export default App;
