
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        name: 'CharacterPage',
        props: true,
        path: '/character/:id', component: () => import('pages/CharacterPage.vue')
      },
      {
        name: 'EpisodePage',
        props: true,
        path: '/episode/:id', component: () => import('pages/EpisodePage.vue')
      }


    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
