'use client';

import dynamic from 'next/dynamic';
import { profile, projects } from '@/lib/data';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ProjectCard from './project-card';
import SocialLinks from './social-links';
import { useTypewriter } from '@/hooks/use-typewriter';
import { useCyclingTypewriter } from '@/hooks/use-cycling-typewriter';

const TechStackVisualizer = dynamic(() => import('./tech-stack-visualizer'), {
    ssr: false,
    loading: () => <div className="bg-card/30 backdrop-blur-sm border-primary/20 aspect-video w-full rounded-lg" />
});


export default function DeveloperSection() {
    const name = useTypewriter(profile.name);
    const bioRoles = ["full stack developer", "artist", "photographer"];
    const cyclingBio = useCyclingTypewriter(bioRoles);

  return (
    <section className="space-y-12 py-12">
      <Card className="bg-card/50 backdrop-blur-sm p-6 border-border">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Avatar className="h-24 w-24 border-2 border-primary">
            <AvatarImage src={profile.imageUrl} alt={profile.name} data-ai-hint={profile.imageHint} />
            <AvatarFallback>{profile.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left min-h-[120px]">
            <h1 className="text-3xl font-headline font-bold text-primary min-h-[40px]">{name}</h1>
            <p className="text-muted-foreground mt-1 max-w-md min-h-[24px] capitalize">
                {cyclingBio}
                <span className="animate-ping">|</span>
            </p>
            <SocialLinks links={profile.socials} />
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-headline font-bold text-center text-primary">My Tech Arsenal</h2>
        <TechStackVisualizer />
      </div>

      <div className="space-y-8">
         <h2 className="text-2xl font-headline font-bold text-center text-primary">Featured Projects</h2>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
