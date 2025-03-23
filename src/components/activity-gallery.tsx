import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ActivityGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ActivityGallery({ images }: ActivityGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setShowLightbox(true);
  };

  const closeLightbox = () => {
    setShowLightbox(false);
  };

  return (
    <>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {images.slice(0, 4).map((image, index) => (
          <div
            key={index}
            className={cn(
              'relative cursor-pointer overflow-hidden rounded-lg',
              index === 0 && 'col-span-2 row-span-2'
            )}
            onClick={() => openLightbox(index)}
          >
            <div
              className={cn(
                'relative',
                index === 0 ? 'aspect-square' : 'aspect-[4/3]'
              )}
            >
              <img
                src={image.src || '/placeholder.svg'}
                alt={image.alt}
                className='object-cover transition-all hover:scale-105 duration-300'
              />
            </div>
            {index === 3 && images.length > 4 && (
              <div className='absolute inset-0 flex items-center justify-center bg-black/50 text-white font-medium'>
                +{images.length - 4} more
              </div>
            )}
          </div>
        ))}
      </div>

      {showLightbox && (
        <div className='fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4'>
          <Button
            variant='ghost'
            size='icon'
            className='absolute top-4 right-4 text-white hover:bg-white/20'
            onClick={closeLightbox}
          >
            <X className='h-6 w-6' />
            <span className='sr-only'>Close</span>
          </Button>

          <Button
            variant='ghost'
            size='icon'
            className='absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20'
            onClick={prevImage}
          >
            <ChevronLeft className='h-8 w-8' />
            <span className='sr-only'>Previous image</span>
          </Button>

          <div className='relative h-[80vh] w-full max-w-5xl'>
            <img
              src={images[currentImage].src || '/placeholder.svg'}
              alt={images[currentImage].alt}
              className='object-contain'
            />
          </div>

          <Button
            variant='ghost'
            size='icon'
            className='absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20'
            onClick={nextImage}
          >
            <ChevronRight className='h-8 w-8' />
            <span className='sr-only'>Next image</span>
          </Button>

          <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2'>
            {images.map((_, index) => (
              <button
                key={index}
                className={cn(
                  'w-2 h-2 rounded-full',
                  currentImage === index ? 'bg-white' : 'bg-white/50'
                )}
                onClick={() => goToImage(index)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
