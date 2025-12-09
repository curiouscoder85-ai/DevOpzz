'use client';

import * as React from 'react';
import { Moon, Sun, Palette } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from '@/components/ui/dropdown-menu';

export function ThemeSwitcher() {
  const { setTheme, theme, themes } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (newTheme: string, color: string) => {
    // a theme is composed of light/dark and a color, e.g. "light-green"
    const currentMode = theme?.startsWith('dark') ? 'dark' : 'light';
    setTheme(`${currentMode}-${color}`);
  }

  const handleModeChange = (newMode: 'light' | 'dark' | 'system') => {
    if (newMode === 'system') {
        setTheme('system');
        return;
    }
    const currentColor = theme?.split('-')[1] || 'slate';
    setTheme(`${newMode}-${currentColor}`);
  }

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleModeChange('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleModeChange('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleModeChange('system')}>
          System
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
            <DropdownMenuSubTrigger>
                <Palette className="mr-2 h-4 w-4" />
                <span>Color</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
                <DropdownMenuSubContent>
                    <DropdownMenuItem onClick={() => handleThemeChange(theme || 'light', 'slate')}>Slate</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleThemeChange(theme || 'light', 'green')}>Green</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleThemeChange(theme || 'light', 'zinc')}>Zinc</DropdownMenuItem>
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
