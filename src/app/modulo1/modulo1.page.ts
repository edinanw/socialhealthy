import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-modulo1',
  templateUrl: './modulo1.page.html',
  styleUrls: ['./modulo1.page.scss'],
})
export class Modulo1Page implements OnInit {
  private texto="";
  constructor(private navc:NavController,private qr: QRScanner) { }

  ngOnInit() { }

  ler(){
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    ////////////////////ABRIR MODAL//////////////////////////
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    this.qr.prepare().then((status: QRScannerStatus) => {
      if(status.authorized){
        let scanSub = this.qr.scan().subscribe((text: string) => {
          console.log('Scanned something', text);
          this.closeScanner();
          scanSub.unsubscribe();
        });
        this.qr.show();
      }else if(status.denied) {
        alert('denied');
      }else{
        alert('deu erro');
      }
    }).catch((e: any) => alert('Error is'));
  }
  closeScanner() {
   
    this.qr.hide();
    this.qr.destroy();
  }
}