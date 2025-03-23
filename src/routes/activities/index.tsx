import { ChevronLeft, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { createFileRoute, Link } from '@tanstack/react-router';

const Activities = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-12 md:px-8'>
      <Button variant='ghost' asChild className='mb-6'>
        <Link to='/' className='flex items-center'>
          <ChevronLeft className='mr-2 h-4 w-4' />
          Back to Home
        </Link>
      </Button>

      <h1 className='text-3xl md:text-4xl font-bold mb-4'>
        Explore Activities Near Villa Serenidad
      </h1>
      <p className='text-lg text-muted-foreground mb-8'>
        Discover the best experiences southern Spain has to offer, all within
        easy reach of your vacation home
      </p>

      <Tabs defaultValue='beaches' className='mb-12'>
        <TabsList className='mb-8'>
          <TabsTrigger value='beaches'>Beaches</TabsTrigger>
          <TabsTrigger value='culture'>Culture & History</TabsTrigger>
          <TabsTrigger value='outdoor'>Outdoor Activities</TabsTrigger>
          <TabsTrigger value='food'>Food & Drink</TabsTrigger>
          <TabsTrigger value='family'>Family Fun</TabsTrigger>
        </TabsList>

        <TabsContent value='beaches' className='space-y-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div>
              <h2 className='text-2xl font-semibold mb-4'>Beautiful Beaches</h2>
              <p className='mb-4'>
                Costa del Sol is famous for its stunning beaches with golden
                sand and crystal-clear waters. From popular resort beaches to
                hidden coves, there's a perfect spot for everyone to enjoy the
                Mediterranean sun.
              </p>
              <p className='mb-4'>
                Most beaches offer amenities such as sunbeds, umbrellas,
                showers, and beachside restaurants serving fresh seafood and
                local specialties. Water sports facilities are available at many
                beaches for those seeking adventure.
              </p>
              <div className='flex items-center text-sm text-muted-foreground mb-4'>
                <MapPin className='mr-1 h-4 w-4' />
                <span>10-20 minutes by car from Villa Serenidad</span>
              </div>
            </div>
            <img
              src='/placeholder.svg?height=400&width=600'
              alt='Costa del Sol beach'
              width={600}
              height={400}
              className='rounded-lg object-cover h-full'
            />
          </div>

          <Separator />

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <Card>
              <div className='relative h-48 w-full'>
                <img
                  src='/placeholder.svg?height=300&width=400'
                  alt='Playa La Carihuela'
                  className='object-cover rounded-t-lg'
                />
              </div>
              <CardContent className='p-4'>
                <h3 className='text-xl font-semibold mb-2'>
                  Playa La Carihuela
                </h3>
                <p className='text-muted-foreground mb-3'>
                  A beautiful beach with a charming promenade lined with
                  restaurants and shops.
                </p>
                <div className='flex items-center text-sm text-muted-foreground'>
                  <MapPin className='mr-1 h-4 w-4' />
                  <span>15 minutes by car</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className='relative h-48 w-full'>
                <img
                  src='/placeholder.svg?height=300&width=400'
                  alt='Playa El Bajondillo'
                  className='object-cover rounded-t-lg'
                />
              </div>
              <CardContent className='p-4'>
                <h3 className='text-xl font-semibold mb-2'>
                  Playa El Bajondillo
                </h3>
                <p className='text-muted-foreground mb-3'>
                  Popular beach with excellent facilities and water sports
                  options.
                </p>
                <div className='flex items-center text-sm text-muted-foreground'>
                  <MapPin className='mr-1 h-4 w-4' />
                  <span>12 minutes by car</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className='relative h-48 w-full'>
                <img
                  src='/placeholder.svg?height=300&width=400'
                  alt='Playa El Cañuelo'
                  className='object-cover rounded-t-lg'
                />
              </div>
              <CardContent className='p-4'>
                <h3 className='text-xl font-semibold mb-2'>Playa El Cañuelo</h3>
                <p className='text-muted-foreground mb-3'>
                  A hidden gem with natural beauty and fewer crowds.
                </p>
                <div className='flex items-center text-sm text-muted-foreground'>
                  <MapPin className='mr-1 h-4 w-4' />
                  <span>20 minutes by car</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value='culture' className='space-y-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <img
              src='/placeholder.svg?height=400&width=600'
              alt='White village in Andalusia'
              width={600}
              height={400}
              className='rounded-lg object-cover h-full'
            />
            <div>
              <h2 className='text-2xl font-semibold mb-4'>Culture & History</h2>
              <p className='mb-4'>
                Explore the rich cultural heritage of Andalusia through its
                charming white villages, historic sites, and vibrant local
                traditions. The region's unique blend of Moorish, Jewish, and
                Christian influences has created a fascinating cultural
                landscape.
              </p>
              <p className='mb-4'>
                Visit local museums, art galleries, and historic buildings to
                learn about the area's past. Don't miss the opportunity to
                experience authentic flamenco performances and traditional
                festivals.
              </p>
              <div className='flex items-center text-sm text-muted-foreground mb-4'>
                <MapPin className='mr-1 h-4 w-4' />
                <span>15-45 minutes by car from Villa Serenidad</span>
              </div>
            </div>
          </div>

          <Separator />

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <Card>
              <div className='relative h-48 w-full'>
                <img
                  src='/placeholder.svg?height=300&width=400'
                  alt='Mijas Pueblo'
                  className='object-cover rounded-t-lg'
                />
              </div>
              <CardContent className='p-4'>
                <h3 className='text-xl font-semibold mb-2'>Mijas Pueblo</h3>
                <p className='text-muted-foreground mb-3'>
                  Charming white village with narrow streets, craft shops, and
                  stunning views.
                </p>
                <div className='flex items-center text-sm text-muted-foreground'>
                  <MapPin className='mr-1 h-4 w-4' />
                  <span>25 minutes by car</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className='relative h-48 w-full'>
                <img
                  src='/placeholder.svg?height=300&width=400'
                  alt='Picasso Museum'
                  className='object-cover rounded-t-lg'
                />
              </div>
              <CardContent className='p-4'>
                <h3 className='text-xl font-semibold mb-2'>Picasso Museum</h3>
                <p className='text-muted-foreground mb-3'>
                  Explore the works of Málaga's most famous son in this
                  excellent museum.
                </p>
                <div className='flex items-center text-sm text-muted-foreground'>
                  <MapPin className='mr-1 h-4 w-4' />
                  <span>40 minutes by car</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className='relative h-48 w-full'>
                <img
                  src='/placeholder.svg?height=300&width=400'
                  alt='Flamenco Show'
                  className='object-cover rounded-t-lg'
                />
              </div>
              <CardContent className='p-4'>
                <h3 className='text-xl font-semibold mb-2'>Flamenco Shows</h3>
                <p className='text-muted-foreground mb-3'>
                  Experience authentic flamenco performances in local venues.
                </p>
                <div className='flex items-center text-sm text-muted-foreground'>
                  <MapPin className='mr-1 h-4 w-4' />
                  <span>15-30 minutes by car</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value='outdoor' className='space-y-8'>
          {/* Similar structure for outdoor activities */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div>
              <h2 className='text-2xl font-semibold mb-4'>
                Outdoor Adventures
              </h2>
              <p className='mb-4'>
                The diverse landscape of Costa del Sol offers endless
                opportunities for outdoor enthusiasts. From water sports along
                the coast to hiking in the nearby mountains, there's something
                for every adventure level.
              </p>
              <p className='mb-4'>
                Golf enthusiasts will be delighted by the world-class courses in
                the area, while nature lovers can explore beautiful natural
                parks and scenic trails.
              </p>
              <div className='flex items-center text-sm text-muted-foreground mb-4'>
                <MapPin className='mr-1 h-4 w-4' />
                <span>10-40 minutes by car from Villa Serenidad</span>
              </div>
            </div>
            <img
              src='/placeholder.svg?height=400&width=600'
              alt='Hiking in the mountains'
              width={600}
              height={400}
              className='rounded-lg object-cover h-full'
            />
          </div>

          <Separator />

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {/* Cards for specific outdoor activities */}
            <Card>
              <div className='relative h-48 w-full'>
                <img
                  src='/placeholder.svg?height=300&width=400'
                  alt='Golf course'
                  className='object-cover rounded-t-lg'
                />
              </div>
              <CardContent className='p-4'>
                <h3 className='text-xl font-semibold mb-2'>Golf Courses</h3>
                <p className='text-muted-foreground mb-3'>
                  Play at world-class golf courses with stunning Mediterranean
                  views.
                </p>
                <div className='flex items-center text-sm text-muted-foreground'>
                  <MapPin className='mr-1 h-4 w-4' />
                  <span>15-30 minutes by car</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className='relative h-48 w-full'>
                <img
                  src='/placeholder.svg?height=300&width=400'
                  alt='Water sports'
                  className='object-cover rounded-t-lg'
                />
              </div>
              <CardContent className='p-4'>
                <h3 className='text-xl font-semibold mb-2'>Water Sports</h3>
                <p className='text-muted-foreground mb-3'>
                  Try paddleboarding, kayaking, jet skiing, and more at nearby
                  beaches.
                </p>
                <div className='flex items-center text-sm text-muted-foreground'>
                  <MapPin className='mr-1 h-4 w-4' />
                  <span>10-15 minutes by car</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className='relative h-48 w-full'>
                <img
                  src='/placeholder.svg?height=300&width=400'
                  alt='Hiking trail'
                  className='object-cover rounded-t-lg'
                />
              </div>
              <CardContent className='p-4'>
                <h3 className='text-xl font-semibold mb-2'>Mountain Hiking</h3>
                <p className='text-muted-foreground mb-3'>
                  Explore scenic trails with breathtaking views of the
                  coastline.
                </p>
                <div className='flex items-center text-sm text-muted-foreground'>
                  <MapPin className='mr-1 h-4 w-4' />
                  <span>25-40 minutes by car</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Additional tabs content would follow the same pattern */}
        <TabsContent value='food' className='space-y-8'>
          {/* Food & Drink content */}
        </TabsContent>

        <TabsContent value='family' className='space-y-8'>
          {/* Family Fun content */}
        </TabsContent>
      </Tabs>

      <div className='text-center'>
        <h2 className='text-2xl font-semibold mb-6'>
          Ready to Experience Spain?
        </h2>
        <Button size='lg' asChild>
          <a href='/#booking'>Book Your Stay Now</a>
        </Button>
      </div>
    </div>
  );
};

export const Route = createFileRoute('/activities/')({
  component: Activities,
});
