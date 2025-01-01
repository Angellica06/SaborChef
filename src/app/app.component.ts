import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { MenuComponent } from "./componentes/menu/menu.component";
import { SobreComponent } from "./componentes/sobre/sobre.component";
import { ContatoComponent } from "./componentes/contato/contato.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, MenuComponent, SobreComponent, ContatoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'saborchef';
}
