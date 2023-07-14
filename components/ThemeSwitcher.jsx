'use client'
import { useTheme } from 'next-themes'
import { FaToggleOff, FaToggleOn } from 'react-icons/fa'

const ThemeSwitcher = () => {
    const { resolvedTheme, setTheme } = useTheme()

    return (
        <button aria-label="Toggle Dark Mode"
            type='button' className="flex items-center rounded-full p-2 transition-shadow hover:bg-slate-200"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
            {resolvedTheme === 'dark'
                ? (
                    <FaToggleOff size={25} className="h-5 w-5 text-blue-500" />
                    
                    
                ) : (
                    <FaToggleOn size={25} className="h-5 w-5 text-[#ffc83d]" />
                )
            }
        </button>
    )
}

export default ThemeSwitcher
