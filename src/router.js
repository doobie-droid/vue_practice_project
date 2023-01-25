import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from '../pages/coaches/CoachesList'
import CoachProfile from '../pages/coaches/CoachProfile'
import CoachRegistration from '../pages/coaches/CoachRegistration'
import RequestsReceived from '../pages/requests/RequestsReceived'
import ContactCoach from '../pages/requests/ContactCoach'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      props:true,
      component: CoachProfile,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestsReceived },
    { path: '/:anytexthere(.*)', component: null },
  ],
});

export default router;
