import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Sample images - replace with your actual property images
const images = [
  {
    src: '/placeholder.svg?height=600&width=800',
    alt: 'Villa exterior view with pool',
  },
  {
    src: '/placeholder.svg?height=600&width=800',
    alt: 'Living room with sea view',
  },
  {
    src: '/placeholder.svg?height=600&width=800',
    alt: 'Master bedroom',
  },
  {
    src: '/placeholder.svg?height=600&width=800',
    alt: 'Kitchen and dining area',
  },
  {
    src: '/placeholder.svg?height=600&width=800',
    alt: 'Terrace with outdoor dining',
  },
  {
    src: '/placeholder.svg?height=600&width=800',
    alt: 'Garden view',
  },
];

export default function PropertyGallery() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className='space-y-4'>
      <div className='relative aspect-[4/3] w-full overflow-hidden rounded-lg'>
        <img
          src={images[currentImage].src || '/placeholder.svg'}
          alt={images[currentImage].alt}
          className='object-cover transition-all duration-300'
        />
        <Button
          variant='ghost'
          size='icon'
          className='absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90'
          onClick={prevImage}
        >
          <ChevronLeft className='h-6 w-6' />
          <span className='sr-only'>Previous image</span>
        </Button>
        <Button
          variant='ghost'
          size='icon'
          className='absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90'
          onClick={nextImage}
        >
          <ChevronRight className='h-6 w-6' />
          <span className='sr-only'>Next image</span>
        </Button>
      </div>

      <div className='flex space-x-2 overflow-x-auto pb-2'>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={cn(
              'relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md',
              currentImage === index && 'ring-2 ring-primary'
            )}
          >
            <img
              src={image.src || '/placeholder.svg'}
              alt={`Thumbnail ${index + 1}`}
              className='object-cover'
            />
          </button>
        ))}
      </div>
    </div>
  );
}
