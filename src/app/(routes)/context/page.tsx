'use client';
import { ThemeContext } from '../../components/context/context';
import React, { useState } from 'react'
import ChildContext from './components/child';

type Props = {}

export default function Context({}: Props) {
  const [theme, setTheme] = useState('bg-indigo-500');
  const toggle = () => {
    if(theme === 'bg-slate-400') setTheme('bg-indigo-500');
    else  setTheme('bg-slate-400');
  }
  return (
    <div>
      <ThemeContext.Provider value={{theme, toggle}}>
        React Context Hook Parent
        <ChildContext></ChildContext>
      </ThemeContext.Provider>
      </div>
  )
}