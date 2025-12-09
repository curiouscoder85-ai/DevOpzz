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

export default function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const { left, top, width, height } = cardRef.current.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;
      const rotateX = (y / height) * -15; // Reduced rotation for a subtler effect
      const rotateY = (x / width) * 15;
      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
      if (!cardRef.current) return;
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const CardInner = () => (
    <div
      ref={cardRef}
      className="group relative overflow-hidden bg-card/80 backdrop-blur-lg border-border transition-transform duration-100 will-change-transform h-full flex flex-col hover:shadow-2xl hover:shadow-primary/10"
      style={{ 
        transformStyle: 'preserve-3d',
        transform: 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent group-hover:from-primary/10 transition-all duration-300" />
      <CardHeader className="relative p-4">
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
      <CardContent className="relative space-y-4 flex-grow flex flex-col p-4 pt-0">
        <CardTitle className="text-xl font-headline text-primary">{project.title}</CardTitle>
        <p className="text-muted-foreground flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-4">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
    </div>
  );

  if (project.link) {
    return (
      <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full transition-transform duration-300 ease-in-out hover:-translate-y-1">
        <CardInner />
      </Link>
    );
  }

  return <CardInner />;
}