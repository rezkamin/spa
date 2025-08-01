import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { Portfolio } from './components/portfolio/portfolio';
import { About } from './components/about/about';
import { Routes } from '@angular/router';

export const routes: Routes = [
{path:'',component:Home} ,  
{path:'home',component:Home},
{path:'about',component:About},
{path:'portfolio',component:Portfolio},
{path:'contact',component:Contact}
];
