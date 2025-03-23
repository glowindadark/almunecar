import {
  Bath,
  BedDouble,
  Car,
  Check,
  ChevronLeft,
  Coffee,
  Tv,
  Utensils,
  Waves,
  Wifi,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { createFileRoute, Link } from '@tanstack/react-router';

const About = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-12 md:px-8'>
      <Button variant='ghost' asChild className='mb-6'>
        <Link to='/' className='flex items-center'>
          <ChevronLeft className='mr-2 h-4 w-4' />
          Back to Home
        </Link>
      </Button>

      <h1 className='text-3xl md:text-4xl font-bold mb-6'>
        Villa Serenidad - Property Details
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
        <img
          src='/placeholder.svg?height=600&width=800'
          alt='Villa exterior'
          width={800}
          height={600}
          className='rounded-lg col-span-2 object-cover h-full'
        />
        <div className='grid grid-cols-1 gap-6'>
          <img
            src='/placeholder.svg?height=300&width=400'
            alt='Villa pool'
            width={400}
            height={300}
            className='rounded-lg object-cover h-full'
          />
          <img
            src='/placeholder.svg?height=300&width=400'
            alt='Villa terrace'
            width={400}
            height={300}
            className='rounded-lg object-cover h-full'
          />
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
        <div className='lg:col-span-2'>
          <h2 className='text-2xl font-semibold mb-4'>About the Property</h2>
          <p className='text-lg mb-6'>
            Villa Serenidad is a stunning 4-bedroom villa located in the
            picturesque hills of Costa del Sol, offering breathtaking views of
            the Mediterranean Sea. This spacious property combines luxury with
            comfort, providing the perfect setting for your Spanish getaway.
          </p>
          <p className='text-lg mb-6'>
            The villa features a large private pool surrounded by a sun terrace,
            a beautifully landscaped garden, and multiple outdoor dining areas
            perfect for enjoying meals under the Spanish sun or starlit
            evenings.
          </p>
          <p className='text-lg mb-8'>
            Inside, the villa boasts a spacious living room with panoramic
            views, a fully equipped modern kitchen, four comfortable bedrooms,
            and three bathrooms. The interior is tastefully decorated with a
            blend of contemporary and traditional Spanish elements, creating a
            warm and inviting atmosphere.
          </p>

          <Separator className='my-8' />

          <h2 className='text-2xl font-semibold mb-6'>Rooms & Spaces</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-8'>
            <div>
              <h3 className='text-xl font-medium mb-3'>Living Areas</h3>
              <ul className='space-y-2'>
                <li className='flex items-center'>
                  <Check className='mr-2 h-5 w-5 text-primary' />
                  Spacious living room with sea views
                </li>
                <li className='flex items-center'>
                  <Check className='mr-2 h-5 w-5 text-primary' />
                  Dining area seating 8 people
                </li>
                <li className='flex items-center'>
                  <Check className='mr-2 h-5 w-5 text-primary' />
                  Fully equipped modern kitchen
                </li>
                <li className='flex items-center'>
                  <Check className='mr-2 h-5 w-5 text-primary' />
                  Separate TV/entertainment room
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-xl font-medium mb-3'>Bedrooms</h3>
              <ul className='space-y-2'>
                <li className='flex items-center'>
                  <Check className='mr-2 h-5 w-5 text-primary' />
                  Master bedroom with en-suite bathroom and sea view
                </li>
                <li className='flex items-center'>
                  <Check className='mr-2 h-5 w-5 text-primary' />
                  Second double bedroom with garden view
                </li>
                <li className='flex items-center'>
                  <Check className='mr-2 h-5 w-5 text-primary' />
                  Third bedroom with two single beds
                </li>
                <li className='flex items-center'>
                  <Check className='mr-2 h-5 w-5 text-primary' />
                  Fourth bedroom with two single beds
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-xl font-medium mb-3'>Outdoor Spaces</h3>
              <ul className='space-y-2'>
                <li className='flex items-center'>
                  <Check className='mr-2 h-5 w-5 text-primary' />
                  Private swimming pool (10m x 5m)
                </li>
                <li className='flex items-center'>
                  <Check className='mr-2 h-5 w-5 text-primary' />
                  Sun terrace with loungers
                </li>
                <li className='flex items-center'>
                  <Check className='mr-2 h-5 w-5 text-primary' />
                  Covered outdoor dining area
                </li>
                <li className='flex items-center'>
                  <Check className='mr-2 h-5 w-5 text-primary' />
                  BBQ area
                </li>
                <li className='flex items-center'>
                  <Check className='mr-2 h-5 w-5 text-primary' />
                  Landscaped garden
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-xl font-medium mb-3'>Bathrooms</h3>
              <ul className='space-y-2'>
                <li className='flex items-center'>
                  <Check className='mr-2 h-5 w-5 text-primary' />
                  Master en-suite with shower and bathtub
                </li>
                <li className='flex items-center'>
                  <Check className='mr-2 h-5 w-5 text-primary' />
                  Second bathroom with shower
                </li>
                <li className='flex items-center'>
                  <Check className='mr-2 h-5 w-5 text-primary' />
                  Third bathroom with shower
                </li>
              </ul>
            </div>
          </div>

          <Separator className='my-8' />

          <h2 className='text-2xl font-semibold mb-6'>Amenities</h2>

          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-8'>
            <div className='flex items-center'>
              <Wifi className='mr-2 h-5 w-5 text-primary' />
              <span>Free WiFi</span>
            </div>
            <div className='flex items-center'>
              <Tv className='mr-2 h-5 w-5 text-primary' />
              <span>Smart TV</span>
            </div>
            <div className='flex items-center'>
              <Waves className='mr-2 h-5 w-5 text-primary' />
              <span>Private pool</span>
            </div>
            <div className='flex items-center'>
              <Car className='mr-2 h-5 w-5 text-primary' />
              <span>Private parking</span>
            </div>
            <div className='flex items-center'>
              <Utensils className='mr-2 h-5 w-5 text-primary' />
              <span>Fully equipped kitchen</span>
            </div>
            <div className='flex items-center'>
              <Coffee className='mr-2 h-5 w-5 text-primary' />
              <span>Coffee machine</span>
            </div>
            <div className='flex items-center'>
              <BedDouble className='mr-2 h-5 w-5 text-primary' />
              <span>Bed linens provided</span>
            </div>
            <div className='flex items-center'>
              <Bath className='mr-2 h-5 w-5 text-primary' />
              <span>Towels provided</span>
            </div>
          </div>
        </div>

        <div className='bg-muted p-6 rounded-lg h-fit'>
          <h2 className='text-2xl font-semibold mb-4'>At a Glance</h2>

          <div className='space-y-4 mb-6'>
            <div>
              <h3 className='font-medium'>Location</h3>
              <p>Costa del Sol, Málaga, Spain</p>
            </div>
            <div>
              <h3 className='font-medium'>Capacity</h3>
              <p>8 guests</p>
            </div>
            <div>
              <h3 className='font-medium'>Bedrooms</h3>
              <p>4 bedrooms (2 double, 2 twin)</p>
            </div>
            <div>
              <h3 className='font-medium'>Bathrooms</h3>
              <p>3 bathrooms</p>
            </div>
            <div>
              <h3 className='font-medium'>Pool</h3>
              <p>Private, 10m x 5m</p>
            </div>
            <div>
              <h3 className='font-medium'>View</h3>
              <p>Sea and mountain views</p>
            </div>
            <div>
              <h3 className='font-medium'>Nearest Beach</h3>
              <p>10 minutes by car</p>
            </div>
            <div>
              <h3 className='font-medium'>Nearest Airport</h3>
              <p>Málaga Airport (45 minutes)</p>
            </div>
          </div>

          <Separator className='my-6' />

          <div className='space-y-4'>
            <h3 className='text-xl font-semibold'>Pricing</h3>
            <div className='grid grid-cols-2 gap-2'>
              <div>Low Season</div>
              <div className='font-medium'>€1,400/week</div>
              <div>Mid Season</div>
              <div className='font-medium'>€1,800/week</div>
              <div>High Season</div>
              <div className='font-medium'>€2,500/week</div>
              <div>Peak Season</div>
              <div className='font-medium'>€3,200/week</div>
            </div>
          </div>

          <Button className='w-full mt-6' asChild>
            <a href='/#booking'>Check Availability</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Route = createFileRoute('/about/')({
  component: About,
});
