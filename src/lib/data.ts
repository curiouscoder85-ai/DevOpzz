import { PlaceHolderImages } from './placeholder-images';

export const projects = [
  {
    id: 'proj-1',
    title: 'ResumeBuilder',
    description: 'A resume builder application built with Python and Django, designed to streamline the process of creating professional resumes.',
    tech: ['Python', 'Django'],
    imageUrl: PlaceHolderImages.find(p => p.id === 'project-1')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'project-1')?.imageHint || '',
    link: 'https://github.com/CodingIntermediate/rbuilder',
  },
  {
    id: 'proj-2',
    title: 'AetherFlow Data Pipeline',
    description: 'High-throughput, real-time data processing engine for IoT applications, built with a microservices architecture.',
    tech: ['JavaScript', 'Firebase'],
    imageUrl: PlaceHolderImages.find(p => p.id === 'project-2')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'project-2')?.imageHint || '',
  },
  {
    id: 'proj-3',
    title: 'ChronoGuard Security',
    description: 'A blockchain-based security solution for decentralized applications, ensuring data integrity and user privacy.',
    tech: ['React', 'JavaScript'],
    imageUrl: PlaceHolderImages.find(p => p.id === 'project-3')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'project-3')?.imageHint || '',
  },
];

export const artworks = [
  {
    id: 'art-1',
    title: 'Golden Hour',
    description: 'Photography',
    imageUrl: PlaceHolderImages.find(p => p.id === 'art-1')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'art-1')?.imageHint || '',
  },
  {
    id: 'art-5',
    title: 'Leonardo',
    description: 'Sketch',
    imageUrl: PlaceHolderImages.find(p => p.id === 'art-leonardo')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'art-leonardo')?.imageHint || '',
  },
  {
    id: 'art-6',
    title: 'Joker',
    description: 'Sketch',
    imageUrl: PlaceHolderImages.find(p => p.id === 'art-joker')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'art-joker')?.imageHint || '',
  },
  {
    id: 'art-2',
    title: 'Urban Explorer',
    description: 'Photography',
    imageUrl: PlaceHolderImages.find(p => p.id === 'art-2')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'art-2')?.imageHint || '',
  },
];

export const profile = {
  name: "Pranav S Prasad",
  bio: "Full-stack developer and digital artist, crafting immersive digital experiences where technology and creativity intersect.",
  imageUrl: PlaceHolderImages.find(p => p.id === 'profile-picture')?.imageUrl || '',
  imageHint: PlaceHolderImages.find(p => p.id === 'profile-picture')?.imageHint || '',
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/CodingIntermediate',
      icon: 'Github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/pranav-s--prasad?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      icon: 'Linkedin',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/ergle_eye?igsh=Z2I5OTl2MWZyYXV4',
        icon: 'Instagram',
    }
  ]
}
