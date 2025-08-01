import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { About } from "./components/about/about";
import { Headcom } from "./components/headcom/headcom";
import { Portfolio } from "./components/portfolio/portfolio";
import { Contact } from "./components/contact/contact";
import { Location } from "./components/location/location";
import { Footer } from "./components/footer/footer";
import { Home } from "./components/home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, About, Headcom, Portfolio, Contact, Location, Footer, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('firstApp');
}
