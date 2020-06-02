import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(public AlertCtrl: AlertController) { }
  titulo :string;

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.AlertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [{
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, 
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }]
    });

    await alert.present();
  }

  async presentInput() {
    const input = await this.AlertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Input!',
      subHeader: 'Ingrese Su nombre',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.titulo = data.txtNombre;
            console.log('Confirm Ok',data);
          }
        }
      ]
    });
    await input.present();
  }

}
