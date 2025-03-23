import { MapPin } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

interface ActivityCardProps {
  title: string;
  description: string;
  imageUrl: string;
  distance: string;
}

export default function ActivityCard({
  title,
  description,
  imageUrl,
  distance,
}: ActivityCardProps) {
  return (
    <Card className='overflow-hidden'>
      <div className='relative h-48 w-full'>
        <img
          src={imageUrl || '/placeholder.svg'}
          alt={title}
          className='object-cover transition-all hover:scale-105 duration-300'
        />
      </div>
      <CardContent className='p-4'>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-muted-foreground mb-3'>{description}</p>
        <div className='flex items-center text-sm text-muted-foreground'>
          <MapPin className='mr-1 h-4 w-4' />
          <span>{distance}</span>
        </div>
      </CardContent>
    </Card>
  );
}
