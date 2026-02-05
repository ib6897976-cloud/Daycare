
import { AppData } from './types';

export const INITIAL_DATA: AppData = {
  settings: {
    phone: "(773)-367-3782",
    email: "chilreninlearning9@gmail.com",
    address: "2719 North Newland Avenue, Chicago, Illinois",
    hours: "Mon - Fri: 6:00 AM - 6:00 PM",
    ctaText: "Schedule a Tour"
  },
  bio: {
    heroHeadline: "A Safe, Loving, Learning-Focused Home Daycare",
    heroSubheadline: "Serving Montclare, Bellmont Cragin, Belmont Heights, Portage Park, Jefferson Park, and surrounding areas for over 20 years.",
    visionHeadline: "Our Vision",
    visionText: "To nurture a generation of curious learners, compassionate friends, and confident children through a balance of play, structure, and unconditional love.",
    aboutHeadline: "About Our Family",
    aboutText: "Children in Learning began with a simple belief: every child deserves to feel at home while they learn. As a mother and educator, I created this space to offer families the personalized attention of a home and the academic enrichment of a preschool. Daily routines are designed to celebrate each child's unique growth.",
    programsHeadline: "Our Programs",
    programsSubheadline: "Developmentally appropriate learning paths tailored for every milestone.",
    programs: [
      {
        id: "p1",
        title: "Infant Discovery",
        description: "Focusing on sensory play, tummy time, and establishing secure attachments in a peaceful, clean nursery.",
        icon: "Sparkles"
      },
      {
        id: "p2",
        title: "Toddler Exploration",
        description: "Building language skills, early socialization, and fine motor coordination through music and creative art.",
        icon: "BookOpen"
      },
      {
        id: "p3",
        title: "Preschool Readiness",
        description: "A comprehensive curriculum covering literacy, and math to prepare for Kindergarten.",
        icon: "Languages"
      }
    ]
  },
  fees: {
    title: "Tuition & Enrollment",
    description: "Our goal is to provide high-quality care that is accessible to our local community.",
    items: [
      {
        id: "1",
        title: "Infant Care",
        description: "Full-time personalized care and sensory development.",
        ageRange: "0 - 18 Months",
        price: "$350 / week"
      },
      {
        id: "2",
        title: "Toddler Program",
        description: "Structured play and potty training support.",
        ageRange: "18 Months - 3 Years",
        price: "$300 / week"
      },
      {
        id: "3",
        title: "Preschool Prep",
        description: "Academic focus, social skills, and kindergarten readiness.",
        ageRange: "3 - 5 Years",
        price: "$275 / week"
      }
    ],
    disclaimer: "Please contact us for availability and current enrollment. Meals and snacks are included in all tuition plans."
  },
  testimonials: [
    {
      id: "1",
      name: "Carolina R.",
      review: "My daughter has been going to Children in Learning for over 2 years and all I can say is great things about the daycare and the provider. The provider offers a great curriculum and a safe environment for my daughter. My daughter is on the spectrum and she has improved a lot in her speech, sensory skills, academic and social. I would highly recommend this daycare!",
      rating: 5
    },
    {
      id: "2",
      name: "Emilie R.",
      review: "My daughter goes to Children in Learning. I’m a first time mom and I was nervous, sad, anxious about choosing the right daycare to place my daughter. I visited at least 5 daycares and this daycare stood out for their curriculum, clean environment, their security cameras, their small daycare capacity and the professional provider. I can’t express enough in how glad I found this daycare where I can trust the provider and my daughter is making friends, safe and learning much!",
      rating: 5
    },
    {
      id: "3",
      name: "Alejandra F.",
      review: "My daughter goes to Children and Learning. I can only say great things about this daycare and the provider. She has improved in many areas , especially her verbal skills and socially. She has reached some milestones every since she started to attend to this daycare. Highly recomend it!",
      rating: 5
    }
  ],
  images: {
    hero: "https://img1.wsimg.com/isteam/stock/xqgp9aG/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300",
    bio: "https://images.unsplash.com/photo-1544717297-fa154da09f9d?q=80&w=2070&auto=format&fit=crop",
    fees: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1972&auto=format&fit=crop",
    about: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=2070&auto=format&fit=crop"
  }
};