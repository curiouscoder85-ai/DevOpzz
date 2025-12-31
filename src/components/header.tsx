'use client';
import { ThemeSwitcher } from './theme-switcher';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center bg-background/50 backdrop-blur-sm">
      <h1 className="text-2xl font-headline font-bold text-primary tracking-wider">
        Pranav
      </h1>
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
      </div>
    </header>
  );
}
