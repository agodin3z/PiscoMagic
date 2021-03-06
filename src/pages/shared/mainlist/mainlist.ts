import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { MyApp } from '../../../app/app.component';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'mainlist',
  templateUrl: 'mainlist.html'
})
export class MainlistPage {
items:Array<any>;
videolist:boolean;
photoslist:boolean;
posts: any;

  constructor (public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController, public http: Http){
    this.http.get('http://dcsocialmarketing.com/previo/PiscosAdmin/index.php/api/noticias').map(res => res.json()).subscribe(data => {
      this.posts = data;
      debugger;
      console.log(this.posts);
  });

      /*this.items=[
      {img:"http://blog.starperu.com/es/wp-content/uploads/2014/12/limbus.png",img2:"http://blog.starperu.com/es/wp-content/uploads/2014/12/limbus.png"},
      {img:"http://blog.starperu.com/es/wp-content/uploads/2014/12/limbus.png",img2:"http://blog.starperu.com/es/wp-content/uploads/2014/12/limbus.png"},
      {img:"http://blog.starperu.com/es/wp-content/uploads/2014/12/limbus.png",img2:"http://blog.starperu.com/es/wp-content/uploads/2014/12/limbus.png"}]; */

      if( MyApp.callfrom=='video'){
          this.videolist=true
      }else if(MyApp.callfrom=='photos'){
          this.photoslist=true
      }else{
          this.videolist=false
          this.photoslist=false
      }

  }

  like(item){
    item.activeLike = !item.activeLike;
  }
  sharePopover(myEvent) {
  let popover = this.popoverCtrl.create('SharepopupPage', {}, {cssClass: 'share-popover'});
  popover.present({
      ev: myEvent
  });
  }
}
