import { useRef } from "react";

import DesktopLayout from "./components/organisms/DesktopLayout/DesktopLayout";
import MobileLayout from "./componentsMobile/MobileLayout/MobileLayout";

//MobileCompoenents

const App = () => {
  const windowWidth = useRef(window.innerWidth);
  return windowWidth.current > 1200 ? <DesktopLayout /> : <MobileLayout />;
};

export default App;
