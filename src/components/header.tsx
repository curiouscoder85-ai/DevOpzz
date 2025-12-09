'use client';
import { Button } from '@/components/ui/button';
import { Loader2, Wand2 } from 'lucide-react';
import { EnvironmentGenerator } from '@/components/environment-generator';
import { useEnvironment } from '@/context/environment-context';
import { ThemeSwitcher } from './theme-switcher';

export default function Header() {
  const { isGenerating } = useEnvironment();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center bg-background/50 backdrop-blur-sm">
      <h1 className="text-2xl font-headline font-bold text-primary tracking-wider">
        DevOpzz
      </h1>
      <div className="flex items-center gap-4">
        <EnvironmentGenerator>
          <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group" disabled={isGenerating}>
            {isGenerating ? 
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> :
              <Wand2 className="mr-2 h-4 w-4 transition-transform group-hover:rotate-45" />
            }
            {isGenerating ? 'Generating...' : 'Generate Environment'}
          </Button>
        </EnvironmentGenerator>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
