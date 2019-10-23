import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoadingService {

  private loader;
  
  constructor(private load: LoadingController) { }

  show() {
    this.loader=this.load;
    this.loader.create({}).then(a=>{a.present()});
  }
  
  hide() {
    this.loader.dismiss();
  }

}
