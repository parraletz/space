export type Image = {
  src: string
  alt?: string
  caption?: string
}

export type Link = {
  text: string
  href: string
}

export type Hero = {
  title?: string
  text?: string
  image?: Image
  actions?: Link[]
}

export type Subscribe = {
  title?: string
  text?: string
  formUrl: string
}

export type SiteConfig = {
  logo?: Image
  title: string
  subtitle?: string
  description: string
  image?: Image
  headerNavLinks?: Link[]
  footerNavLinks?: Link[]
  socialLinks?: Link[]
  hero?: Hero
  subscribe?: Subscribe
  postsPerPage?: number
  projectsPerPage?: number
}

const siteConfig: SiteConfig = {
  title: 'Alex Parra - Plaform Engineer',
  subtitle: 'Cloud Architect, DevOps Engineer, and Full-Stack Developer',
  description:
    'Personal website of Alex Parra, a Cloud Architect, DevOps Engineer, and Full-Stack Developer.',
  image: {
    src: '/avatar.webp',
    alt: 'Alex Parra - Plaform Engineer'
  },
  headerNavLinks: [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'Projects',
      href: '/projects'
    },
    {
      text: 'Blog',
      href: '/blog'
    },

    {
      text: 'About',
      href: '/about'
    }
  ],
  footerNavLinks: [
    {
      text: 'Resume',
      href: '/cv'
    },
    {
      text: 'Contact',
      href: '/contact'
    },
    {
      text: 'Terms',
      href: '/terms'
    }
  ],
  socialLinks: [
    {
      text: 'GitHub',
      href: 'https://github.com/parraletz'
    },
    {
      text: 'LinkedIn',
      href: 'https://linkedin.com/in/parraletz'
    },
    {
      text: 'X/Twitter',
      href: 'https://twitter.com/parraletz'
    },
    {
      text: 'Instagram',
      href: 'https://instagram.com/parraletz'
    }
  ],
  hero: {
    title: 'Hi There!',
    text: '“Alejandro Parra is a specialist in DevOps and Cloud with strong experience in backend development using Python and TypeScript. Throughout his career, he has worked on building scalable infrastructures and automating workflows, enabling him to design robust solutions for cloud-native environments. His focus is on optimizing processes and modernizing applications through innovative technologies, always driven by the belief that ‘Res publica non dominetur’.”',
    image: {
      src: '/heros.jpeg',
      alt: ''
    },
    actions: [
      {
        text: 'Get in Touch',
        href: '/contact'
      }
    ]
  },
  subscribe: {
    title: 'Subscribe to Alex Parra Newsletter',
    text: 'One update per month. No spam.',
    formUrl: '#'
  },
  postsPerPage: 8,
  projectsPerPage: 8
}

export default siteConfig
