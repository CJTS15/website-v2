'use client'
import { useTheme } from 'next-themes'
import { FaCloudSun, FaCloudMoon } from 'react-icons/fa'

const ThemeSwitcher = () => {
    const { resolvedTheme, setTheme } = useTheme()

    return (
        <button aria-label="Toggle Dark Mode"
            type='button' className="flex items-center rounded-full p-2 transition-shadow hover:bg-slate-200"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
            {resolvedTheme === 'light'
                ? (
                    <FaCloudSun className="h-5 w-5 text-[#ffc83d]" />

                ) : (
                    <FaCloudMoon className="h-5 w-5 text-blue-500" />
                )
            }
        </button>
    )
}

export default ThemeSwitcher
