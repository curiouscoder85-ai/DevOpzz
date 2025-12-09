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
    title: 'Web Application',
    description: 'A web application built with PHP and HTML, demonstrating fundamental web development skills.',
    tech: ['PHP', 'HTML'],
    imageUrl: PlaceHolderImages.find(p => p.id === 'project-2')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'project-2')?.imageHint || '',
    link: 'https://github.com/CodingIntermediate/Web_App.git',
  },
  {
    id: 'proj-3',
    title: 'Machine Learning Programs',
    description: 'A collection of machine learning programs and experiments.',
    tech: ['Python'],
    imageUrl: PlaceHolderImages.find(p => p.id === 'project-3')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'project-3')?.imageHint || '',
    link: 'https://github.com/CodingIntermediate/M_L.git',
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
