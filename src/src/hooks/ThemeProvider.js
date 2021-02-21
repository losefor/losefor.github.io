import React, { useState , useContext } from "react";

const Theme = React.createContext();

export const ThemeValue = () => useContext(Theme)



export default function ThemeProvider({children}) {

  const [darkTheme, setDarkTheme] = useState(false);

  const themeToggle = ()=>{
    setDarkTheme(prevState => !prevState)
  }


  return <Theme.Provider value={{darkTheme , themeToggle}}>
      {children}
  </Theme.Provider>;
}
