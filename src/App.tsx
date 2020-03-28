import React, { lazy, Suspense } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Theme as UWPThemeProvider, getTheme } from "react-uwp/Theme";
import { Fruit } from './fruits';

const ListLeft = lazy(() => import("./components/ListLeft"))
const MainPage = lazy(() => import("./components/MainPage"))

const App: React.SFC = () => {
  const globalTheme = getTheme({
    themeName: "dark", // set custom theme
    accent: "#0078D7", // set accent color
    useFluentDesign: true, // sure you want use new fluent design.
    desktopBackgroundImage: "https://www.go593.com/sites/default/files/styles/full_post/public/astrofotografia-chimborazo-EXC-go593.jpg?itok=qjMPVj3F" // set global desktop background image
  });

  return (
    <UWPThemeProvider
      theme={globalTheme}
    >
      <div className={"app"}>
        <div className="content">
          <Suspense fallback={<div>Loading...</div>}>
            <MainPage/>
          </Suspense>

        </div>
      </div>
    </UWPThemeProvider>
  );
}

export default App;
