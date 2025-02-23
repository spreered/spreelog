export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'SpreeLab',
  DESCRIPTION:
    'Programmable Life',
  EMAIL: 'spreered@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 5,
  POSTS_PER_PAGE: 10,
  SITEURL: 'https://wwww.spreered.com',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/spreered', label: 'GitHub' },
  { href: 'https://x.com/spreered23', label: 'Twitter' },
  { href: 'https://www.linkedin.com/in/li-hsuan-hung-998148160/', label: 'LinkedIn' },
  { href: 'https://https://medium.com/@spreered', label: 'Medium' },
  { href: 'mailto:spreered@gmail.com', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
