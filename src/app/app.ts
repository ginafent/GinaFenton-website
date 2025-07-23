import { Component } from '@angular/core';
import { Home } from './home/home';
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Home, Navbar, Footer, RouterOutlet],
  template: `<main>
      <header class="brand-name">
      </header>
      <section class="content">
        <app-navbar></app-navbar> 
        <router-outlet></router-outlet>
        <app-footer></app-footer>
      </section>
      </main>`,
  styleUrl: './app.css'
})
export class App {
  protected title = 'GFPortfolio';
}
