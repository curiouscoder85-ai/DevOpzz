'use client';

import { Github, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

const iconComponents: { [key: string]: React.ElementType } = {
  Github,
  Linkedin,
  Instagram,
};

type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

export default function SocialLinks({ links }: { links: SocialLink[] }) {
  return (
    <div className="flex items-center gap-2 mt-4">
      {links.map(social => {
        const IconComponent = iconComponents[social.icon];
        if (!IconComponent) return null;
        return (
          <Button
            key={social.name}
            variant="ghost"
            size="icon"
            asChild
            className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
          >
            <Link href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
              <IconComponent className="h-5 w-5" />
            </Link>
          </Button>
        );
      })}
    </div>
  );
}
