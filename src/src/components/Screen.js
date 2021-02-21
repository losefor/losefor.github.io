import React  from 'react'
// import './Screen.css'

import {ThemeValue} from '../hooks/ThemeProvider'
import { colors } from '../config/colors'

export default function Screen({children}) {
    const {darkTheme} = ThemeValue()
    return (
        <div style={{
            backgroundColor:darkTheme?  colors.dark : colors.bgLight
        }}>
           {children}
        </div>
    )
}
