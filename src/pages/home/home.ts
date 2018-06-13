import { Component } from '@angular/core';
import { NavController,NavParams, AlertController } from 'ionic-angular';
import { SvpInputPage } from '../svp-input/svp-input';
import { EstateMenuPage } from '../estate-menu/estate-menu';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapsAnimation, GoogleMapZoomOptions
        ,GoogleMapControlOptions,GoogleMapOptions,GoogleMapPreferenceOptions
        ,GoogleMapsMapTypeId } from '@ionic-native/google-maps';
import { LatLng, Marker } from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  map: GoogleMap;  // クラス内でmapプロパティを作っておくと便利
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  onClick1(){
    this.navCtrl.push(SvpInputPage);
  }

  onClick2(){
    this.navCtrl.push(EstateMenuPage);
  }

  /**
   * 画面読み込み時処理
   * マップ表示処理を呼び出し
   */
  ionViewDidLoad() {
    this.loadMap();  // ionViewDidLoad()を待ってから地図を作成
  }

  /**
   * マップ表示処理
   */
  loadMap() {
    console.log('kita1');
    // 表示したい位置にある<div>のidを指定します
    this.map = GoogleMaps.create('map_canvas');


    // /**
    //  * 位置情報を作成
    //  */
    // var datas = [
    //   {location: new LatLng(43.0643129,141.3467274),weight:0}
    // ,{location: new LatLng(35.1837543,136.9002195),weight:7.15}
    // ,{location: new LatLng(35.0045302,135.8685538),weight:7.15}
    // ,{location: new LatLng(34.6913011,135.1831335),weight:14.29}
    // ];

    // MAP_READYイベント(マップ読み込みイベント)が来るまで待ちます
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

      // Map読み込みイベントが来たらマーカー処理を実行する
      // 今回はアメリカのシカゴあたり
      this.map.addMarker({
        title: 'Ionic',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: 43.0741904,
          lng: -89.3809802
        }
      }).then((marker: Marker) => {
        marker.showInfoWindow();
      });

      console.log('地図が準備完了！');
    });
  }
}

