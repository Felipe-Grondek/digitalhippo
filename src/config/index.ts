export const PRODUCT_CATEGORIES = [
  {
    label: 'UI Kits',
    value: 'ui_kits' as const,
    featured: [
      {
        name: 'Escolhas do Editor',
        href: '#',
        imageSrc: '/nav/ui-kits/mixed.jpg',
      },
      {
        name: 'Novidades',
        href: '#',
        imageSrc: '/nav/ui-kits/blue.jpg',
      },
      {
        name: 'Mais Vendidos',
        href: '#',
        imageSrc: '/nav/ui-kits/purple.jpg',
      }
    ]
  },
  {
    label: 'Icones',
    value: 'icons' as const,
    featured: [
      {
        name: 'Icones Favoritos',
        href: '#',
        imageSrc: '/nav/icons/picks.jpg',
      },
      {
        name: 'Novidades',
        href: '#',
        imageSrc: '/nav/icons/new.jpg',
      },
      {
        name: 'Icones Mais Vendidos',
        href: '#',
        imageSrc: '/nav/icons/bestsellers.jpg',
      }
    ]
  }
]