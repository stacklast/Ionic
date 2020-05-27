import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes:Componente[]=[
    {
      icon: 'american-footaball-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'logo-apple-store',
      name: 'Alert',
      redirectTo: '/alert'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
interface Componente {
    icon:string,
    name:string,
    redirectTo:string
}