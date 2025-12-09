'use client';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  imageHint: string;
  link?: string;
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Skip the 3D effect if the card is a link
    if (project.link) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;
      const rotateX = (y / height) * -30;
      const rotateY = (x / width) * 30;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [project.link]);

  const CardInner = () => (
    <Card
      ref={cardRef}
      className="group relative overflow-hidden bg-card/30 backdrop-blur-lg border-primary/20 transition-all duration-300 will-change-transform h-full flex flex-col"
      style={{ 
        transformStyle: project.link ? undefined : 'preserve-3d', 
        transition: project.link ? 'border-color 0.3s, box-shadow 0.3s' :'transform 0.1s linear'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent group-hover:from-primary/20 transition-all duration-300" />
      {!project.link && (
        <div
            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-radial from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ transform: 'translateZ(-10px)' }}
        />
      )}
      <CardHeader className="relative">
        <div className="aspect-video relative overflow-hidden rounded-lg">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            data-ai-hint={project.imageHint}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </CardHeader>
      <CardContent className="relative space-y-4 flex-grow flex flex-col">
        <CardTitle className="text-xl font-headline text-accent">{project.title}</CardTitle>
        <p className="text-muted-foreground flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-4">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary" className="bg-primary/20 text-primary-foreground border-primary/30">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  if (project.link) {
    return (
      <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
        <CardInner />
      </Link>
    );
  }

  return <CardInner />;
}
