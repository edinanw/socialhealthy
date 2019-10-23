import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-modulo1',
  templateUrl: './modulo1.page.html',
  styleUrls: ['./modulo1.page.scss'],
})
export class Modulo1Page implements OnInit {
  private texto="";
  constructor(private navc:NavController,private qr: QRScanner) { }

  ngOnInit() {
  }

  ler(){
    this.qr.prepare().then((status: QRScannerStatus)=>{
      if(status.authorized){
        let scanSub = this.qr.scan().subscribe((text: string) => {
          this.qr.hide(); // hide camera preview
          this.texto=text;
          scanSub.unsubscribe(); // stop scanning
        });
      } else if (status.denied) {
        alert("Você não tem permissão para acesar a câmera, acessar as configurações do dispositivo para alterar as permissões");
      }else{
        alert("Você não tem permissão para acesar a câmera");
      }
    });
  }
}
