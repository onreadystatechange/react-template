/**
 * @Author: pandali
 * @Date: 2018-01-09 14:15:11
 * @Last Modified by: pandali
 * @Last Modified time: 2018-02-28 10:13:37
 */
import { Home, About, Contact } from './router';

const routes = [
  {
    path: '/',
    exact: true,
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    exact: false,
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    exact: false,
    name: 'contact',
    component: Contact
  }
];

export default routes;
