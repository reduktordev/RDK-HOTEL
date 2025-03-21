export type Room = {
  id: number
  name: string
  slug: string
  price: number
  size: string
  guests: number
  view: string
  bed: string
  amenities: string[]
  image: string
  description: string
  highlights: string[]
}

export const rooms: Room[] = [
  {
    id: 1,
    name: 'Executive Suite',
    slug: 'executive-suite',
    price: 599,
    size: '45m²',
    guests: 2,
    view: 'Sea View',
    bed: 'King Bed',
    amenities: ['Free WiFi', 'Smart TV', 'Mini Bar', 'Ocean View'],
    image: '/images/room-1.jpg',
    description:
      'Luxurious suite with panoramic ocean views, perfect for romantic getaways or business travel.',
    highlights: [
      'Private balcony with seating area',
      'Marble bathroom with rain shower',
      '24/7 Room service',
      'Complimentary breakfast'
    ]
  },
  {
    id: 2,
    name: 'Presidential Suite',
    slug: 'presidential-suite',
    price: 899,
    size: '75m²',
    guests: 4,
    view: 'City View',
    bed: 'Super King Bed',
    amenities: ['Private Pool', 'Butler Service', 'Jacuzzi', 'Dining Area'],
    image: '/images/room-2.jpg',
    description:
      'Ultimate luxury experience with private pool and personalized butler service.',
    highlights: [
      'Separate living and dining areas',
      'Personalized check-in/check-out',
      'Complimentary limousine service',
      'VIP amenities'
    ]
  },
  {
    id: 3,
    name: 'Honeymoon Suite',
    slug: 'honeymoon-suite',
    price: 799,
    size: '60m²',
    guests: 2,
    view: 'Ocean View',
    bed: 'Four Poster Bed',
    amenities: [
      'Champagne Service',
      'Spa Bath',
      'Private Terrace',
      'Couples Massage'
    ],
    image: '/images/room-3.jpg',
    description:
      'Romantic retreat designed for newlyweds and anniversary celebrations.',
    highlights: [
      'Heart-shaped Jacuzzi',
      'Daily flower arrangements',
      'Candlelight dinner setup',
      'Late checkout included'
    ]
  }
]
