import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type Artwork = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

const floatAnimation = {
  animation: 'float 6s ease-in-out infinite',
};

export default function ArtCard({ artwork, index }: { artwork: Artwork; index: number }) {
  return (
    <div
      className="group"
      style={{
        ...floatAnimation,
        animationDelay: `${index * 1.5}s`,
      }}
    >
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
      <Card className="overflow-hidden bg-card/30 backdrop-blur-sm border-border transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30">
        <CardHeader className="p-0">
          <div className="aspect-[5/7] relative">
            <Image
              src={artwork.imageUrl}
              alt={artwork.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={artwork.imageHint}
            />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          </div>
        </CardHeader>
        <CardFooter className="p-4 bg-card/50">
          <div>
            <h3 className="font-headline text-lg font-semibold text-primary">{artwork.title}</h3>
            <p className="text-sm text-muted-foreground">{artwork.description}</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
