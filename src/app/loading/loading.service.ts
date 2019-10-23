import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  //loading = new Subject<boolean>();
  private loader;
  constructor(private load: LoadingController) { }

  show() {
    this.loader=this.load;
    this.loader.create({}).then(a=>{a.present()});
    //this.loading.next(true);
  }
  
  hide() {
    this.loader.dismiss();
     //this.loading.next(false);
  }

}
