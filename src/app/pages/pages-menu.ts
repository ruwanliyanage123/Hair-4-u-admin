import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  
  {
    title: 'IoT Dashboard',
    icon: 'nb-home',
    link: '/pages/iot-dashboard',
    home: true,
  },
  {
    title: 'Chats',
    icon: 'nb-star',
    link: '/pages/extra-components/chat',
  },
  {
    title: 'Maps',
    icon: 'nb-location',
    link: '/pages/maps/gmaps', 
  },
  {
    title: 'Charts',
    icon: 'nb-bar-chart',
    link: '/pages/charts/echarts',
  },
  {
    title: 'Editors',
    icon: 'nb-title',
    link: '/pages/editors/ckeditor',
  },
  {
    title: 'Tables',
    icon: 'nb-tables',
    link: '/pages/tables/smart-table', 
  },

  // {
  //   title: 'Auth',
  //   icon: 'nb-locked',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
