import { createContext } from 'react';

export const ThemeContext = createContext({
    theme: 'bg-indigo-500',
    toggle: () => {}
});