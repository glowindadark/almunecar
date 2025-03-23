import { Calendar, MapPin, Users, Utensils, Waves, Wifi } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PropertyGallery from '@/components/property-gallery';
import ActivityCard from '@/components/activity-card';
import { createFileRoute, Link } from '@tanstack/react-router';

const Home = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      {/* Hero Section */}
      <section className='relative h-[70vh] w-full'>
        <img
          src='/placeholder.svg?height=800&width=1600'
          alt='Beautiful vacation home in Spain'
          className='object-cover brightness-[0.85]'
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading='eager' // loads immediately, similar to priority
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-center p-4'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-md'>
            Villa Serenidad
          </h1>
          <p className='text-xl md:text-2xl text-white mb-8 max-w-2xl drop-shadow-md'>
            Your perfect getaway in the heart of sunny Spain
          </p>
          <Button size='lg' asChild className='text-lg'>
            <a href='#booking'>Book Your Stay</a>
          </Button>
        </div>
      </section>

      {/* Property Overview */}
      <section className='py-16 px-4 md:px-8 max-w-7xl mx-auto w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div>
            <h2 className='text-3xl font-bold mb-6'>
              Welcome to Villa Serenidad
            </h2>
            <div className='flex items-center mb-6 text-muted-foreground'>
              <MapPin className='mr-2 h-5 w-5' />
              <span>Costa del Sol, Málaga, Spain</span>
            </div>
            <p className='text-lg mb-6'>
              Nestled in the picturesque hills of Costa del Sol, Villa Serenidad
              offers a perfect blend of luxury, comfort, and authentic Spanish
              charm. With breathtaking views of the Mediterranean Sea, this
              spacious 4-bedroom villa is your ideal home away from home.
            </p>
            <p className='text-lg mb-8'>
              Whether you're seeking a peaceful retreat or an adventurous
              holiday, our villa provides the perfect base to explore the beauty
              and culture of southern Spain. Enjoy the private pool, lush
              gardens, and proximity to beautiful beaches and charming villages.
            </p>

            <h3 className='text-2xl font-semibold mb-4'>Property Features</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-8'>
              <div className='flex items-center'>
                <Users className='mr-2 h-5 w-5 text-primary' />
                <span>Sleeps 8 guests</span>
              </div>
              <div className='flex items-center'>
                <Calendar className='mr-2 h-5 w-5 text-primary' />
                <span>4 bedrooms</span>
              </div>
              <div className='flex items-center'>
                <Waves className='mr-2 h-5 w-5 text-primary' />
                <span>Private pool</span>
              </div>
              <div className='flex items-center'>
                <Wifi className='mr-2 h-5 w-5 text-primary' />
                <span>Free WiFi</span>
              </div>
              <div className='flex items-center'>
                <Utensils className='mr-2 h-5 w-5 text-primary' />
                <span>Fully equipped kitchen</span>
              </div>
            </div>

            <Button asChild>
              <Link to='/about'>View All Details</Link>
            </Button>
          </div>

          <PropertyGallery />
        </div>
      </section>

      {/* Activities Section */}
      <section className='py-16 px-4 md:px-8 bg-muted'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-3xl font-bold mb-2 text-center'>
            Explore Nearby Activities
          </h2>
          <p className='text-lg text-center mb-12 text-muted-foreground'>
            Discover the best experiences southern Spain has to offer
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <ActivityCard
              title='Beautiful Beaches'
              description="Relax on the golden sands of Costa del Sol's famous beaches, just a 10-minute drive from the villa."
              imageUrl='/placeholder.svg?height=400&width=600'
              distance='10 min drive'
            />
            <ActivityCard
              title='Historic Villages'
              description='Explore charming white-washed villages with their narrow streets, local crafts, and authentic cuisine.'
              imageUrl='/placeholder.svg?height=400&width=600'
              distance='15 min drive'
            />
            <ActivityCard
              title='Water Sports'
              description='Try sailing, windsurfing, paddleboarding, and more at the nearby water sports centers.'
              imageUrl='/placeholder.svg?height=400&width=600'
              distance='12 min drive'
            />
            <ActivityCard
              title='Golf Courses'
              description='Play at world-class golf courses with stunning views of the Mediterranean Sea.'
              imageUrl='/placeholder.svg?height=400&width=600'
              distance='20 min drive'
            />
            <ActivityCard
              title='Wine Tasting'
              description="Visit local vineyards and bodegas to sample the region's excellent wines."
              imageUrl='/placeholder.svg?height=400&width=600'
              distance='30 min drive'
            />
            <ActivityCard
              title='Mountain Hiking'
              description='Explore beautiful hiking trails with panoramic views of the coastline and mountains.'
              imageUrl='/placeholder.svg?height=400&width=600'
              distance='25 min drive'
            />
          </div>

          <div className='text-center mt-12'>
            <Button asChild variant='outline' size='lg'>
              <Link to='/activities'>View All Activities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-16 px-4 md:px-8 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-12 text-center'>
          What Our Guests Say
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <Card>
            <CardContent className='pt-6'>
              <p className='mb-4 italic'>
                "We had an amazing stay at Villa Serenidad. The property is
                beautiful, well-maintained, and has everything you need for a
                perfect vacation. The views are breathtaking!"
              </p>
              <p className='font-semibold'>- Maria and John, UK</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <p className='mb-4 italic'>
                "This villa exceeded our expectations. The location is perfect
                for exploring the region, and coming back to relax by the pool
                after a day of sightseeing was wonderful."
              </p>
              <p className='font-semibold'>- The Schmidt Family, Germany</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <p className='mb-4 italic'>
                "A truly special place. We loved the attention to detail in the
                villa and the helpful recommendations for local restaurants and
                activities. We'll definitely be back!"
              </p>
              <p className='font-semibold'>- Sophie and Pierre, France</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Booking Section */}
      <section id='booking' className='py-16 px-4 md:px-8 bg-muted'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-3xl font-bold mb-2 text-center'>
            Book Your Stay
          </h2>
          <p className='text-lg text-center mb-12 text-muted-foreground'>
            Check availability and reserve your perfect getaway
          </p>
        </div>
      </section>
    </div>
  );
};

export const Route = createFileRoute('/')({
  component: Home,
});
