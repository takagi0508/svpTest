import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
// import { SearchPage } from '../search/search';

/**
 * Super Value Plus のお客様情報登録画面
 * 各項目の入力チェックをクライアントサイドで行い、次の確認画面へ情報を引き継ぐ
 * @author Kenji.Takagi
 */
@IonicPage()
@Component({
  selector: 'page-svp-input',
  templateUrl: 'svp-input.html',
})
export class SvpInputPage {

  /**
   * コンストラクタ　※特に何もしない
   * @param navCtrl 画面遷移用用コントローラー
   * @param navParams 次画面へパラメータを渡すコントローラー
   * @param alertCtrl アラート表示用コントローラー
   */
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  /**
   * ページがロードされた時に呼び出される。
   * ページオブジェクトが生成された時だけ呼ばれるので、キャッシュが残っている場合は呼び出されない。
   */
  ionViewDidLoad() {
    console.log('ページロード');
  }

  /**
   * ページがアクティブになる前に呼ばれる
   */
  ionViewWillEnter() {
    console.log('ページアクティブ前');
  }

  /**
   * 次へボタン押下時処理
   */
  onClickNext() {
    console.log('kita1'); 
    // this.navCtrl.push(SearchPage,{
    //   param01: '01',
    //   param02: '03'
    // });
  }

  /**
   * 戻るボタン押下時処理
   */
  onClickBack() {
    console.log('kita2');
  }

  /**
   * お申し込みを中止するボタン押下時処理
   */
  onClickCancel() {
    console.log('kita3');
    let alert = this.alertCtrl.create(
      {
        title:'エラー',
        subTitle: '通信エラーが発生しました',
        buttons: ['OK']
      }
    );
    alert.present();
  }
}
