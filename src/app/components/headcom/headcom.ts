
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headcom',
  imports: [],
  templateUrl: './headcom.html',
  styleUrl: './headcom.css'
})
export class Headcom implements OnInit {
com: string = 'start Framework';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const currentUrl = this.router.url;

    if (currentUrl.includes('/about')) {
      this.com = 'about component';
    } else if (currentUrl.includes('/portfolio')) {
      this.com = 'portfolio component';
    } else if (currentUrl.includes('/contact')) {
      this.com = 'conatct section';
    } 
  }

}
