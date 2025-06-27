import type { TeamMember } from '../components/Team';

export const ccdata: TeamMember[] = [
  {
    id: 1,
    name: 'Aarav Mehta',
    role: 'Chairperson',
    email: 'aarav@example.com',
    bio: 'Leads the club and ensures smooth execution of all plans.',
    image: '/images/cc/aarav.png',
    socialMedia: {
      instagram: 'https://instagram.com/aarav',
      linkedin: 'https://linkedin.com/in/aaravmehta',
    },
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Vice Chairperson',
    email: 'priya@example.com',
    bio: 'Supports leadership and bridges communication among teams.',
    image: '/images/cc/priya.png',
    socialMedia: {
      twitter: 'https://twitter.com/priyasharma',
      github: 'https://github.com/priyadev',
    },
  },
];