webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__svp_input_svp_input__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__estate_menu_estate_menu__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    HomePage.prototype.onClick1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__svp_input_svp_input__["a" /* SvpInputPage */]);
    };
    HomePage.prototype.onClick2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__estate_menu_estate_menu__["a" /* EstateMenuPage */]);
    };
    /**
     * 画面読み込み時処理
     * マップ表示処理を呼び出し
     */
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadMap(); // ionViewDidLoad()を待ってから地図を作成
    };
    /**
     * マップ表示処理
     */
    HomePage.prototype.loadMap = function () {
        var _this = this;
        console.log('kita1');
        // 表示したい位置にある<div>のidを指定します
        this.map = __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["a" /* GoogleMaps */].create('map_canvas');
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
        this.map.one(__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY).then(function () {
            // Map読み込みイベントが来たらマーカー処理を実行する
            // 今回はアメリカのシカゴあたり
            _this.map.addMarker({
                title: 'Ionic',
                icon: 'blue',
                animation: 'DROP',
                position: {
                    lat: 43.0741904,
                    lng: -89.3809802
                }
            }).then(function (marker) {
                marker.showInfoWindow();
            });
            console.log('地図が準備完了！');
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/kenji_takagi/svpTest/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button block (click)="onClick1()">SVP 入力画面へ</button>\n  <button ion-button block (click)="onClick2()">不動産情報検索画面へ</button>\n  <div id="map_canvas">\n    <button ion-button (click)="loadMap($event)">Start demo</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kenji_takagi/svpTest/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvpInputPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { SearchPage } from '../search/search';
/**
 * Super Value Plus のお客様情報登録画面
 * 各項目の入力チェックをクライアントサイドで行い、次の確認画面へ情報を引き継ぐ
 * @author Kenji.Takagi
 */
var SvpInputPage = /** @class */ (function () {
    /**
     * コンストラクタ　※特に何もしない
     * @param navCtrl 画面遷移用用コントローラー
     * @param navParams 次画面へパラメータを渡すコントローラー
     * @param alertCtrl アラート表示用コントローラー
     */
    function SvpInputPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    /**
     * ページがロードされた時に呼び出される。
     * ページオブジェクトが生成された時だけ呼ばれるので、キャッシュが残っている場合は呼び出されない。
     */
    SvpInputPage.prototype.ionViewDidLoad = function () {
        console.log('ページロード');
    };
    /**
     * ページがアクティブになる前に呼ばれる
     */
    SvpInputPage.prototype.ionViewWillEnter = function () {
        console.log('ページアクティブ前');
    };
    /**
     * 次へボタン押下時処理
     */
    SvpInputPage.prototype.onClickNext = function () {
        console.log('kita1');
        // this.navCtrl.push(SearchPage,{
        //   param01: '01',
        //   param02: '03'
        // });
    };
    /**
     * 戻るボタン押下時処理
     */
    SvpInputPage.prototype.onClickBack = function () {
        console.log('kita2');
    };
    /**
     * お申し込みを中止するボタン押下時処理
     */
    SvpInputPage.prototype.onClickCancel = function () {
        console.log('kita3');
        var alert = this.alertCtrl.create({
            title: 'エラー',
            subTitle: '通信エラーが発生しました',
            buttons: ['OK']
        });
        alert.present();
    };
    SvpInputPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-svp-input',template:/*ion-inline-start:"/Users/kenji_takagi/svpTest/src/pages/svp-input/svp-input.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      お客様情報登録\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n<ion-list>\n  <ion-label id="kaiinNo01" color="primary" class="labelText">会員番号</ion-label>\n  <ion-grid>\n    <ion-row id="info-row">\n    <ion-col>\n            <ion-select [(ngModel)]="format0" class="inputText" placeholder="****">\n              <ion-option value="4541">4541</ion-option>\n              <ion-option value="5252">5252</ion-option>\n              <ion-option value="3528">3528</ion-option>\n              <ion-option value="3777">3777</ion-option>\n            </ion-select>\n    </ion-col>\n    <ion-col>\n        <ion-input id="kaiinNo02" class="inputText" type="text" placeholder="****" maxlength="4"></ion-input>\n    </ion-col>\n    <ion-col>\n        <ion-input id="kaiinNo03" class="inputText" type="text" placeholder="****" maxlength="4"></ion-input>\n    </ion-col>\n    <ion-col>\n        <ion-input id="kaiinNo04" class="inputText" type="text" placeholder="****" maxlength="4"></ion-input>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<ion-label color="primary"  class="labelText">カード有効期限</ion-label>\n  <ion-item>\n      <ion-select [(ngModel)]="month">\n        <ion-option value="01">1月</ion-option>\n        <ion-option value="02">2月</ion-option>\n        <ion-option value="03">3月</ion-option>\n        <ion-option value="04">4月</ion-option>\n        <ion-option value="05">5月</ion-option>\n        <ion-option value="06">6月</ion-option>\n        <ion-option value="07">7月</ion-option>\n        <ion-option value="08">8月</ion-option>\n        <ion-option value="09">9月</ion-option>\n        <ion-option value="10">10月</ion-option>\n        <ion-option value="11">11月</ion-option>\n        <ion-option value="12">12月</ion-option>\n      </ion-select>\n      <ion-select [(ngModel)]="year">\n          <ion-option value="2018">2018年</ion-option>\n          <ion-option value="2019">2019年</ion-option>\n          <ion-option value="2020">2020年</ion-option>\n          <ion-option value="2021">2021年</ion-option>\n          <ion-option value="2022">2022年</ion-option>\n          <ion-option value="2023">2023年</ion-option>\n          <ion-option value="2024">2024年</ion-option>\n          <ion-option value="2025">2025年</ion-option>\n          <ion-option value="2026">2026年</ion-option>\n          <ion-option value="2027">2027年</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-label color="primary" class="labelText">氏名（カナ）</ion-label>\n    <ion-item>\n    <ion-input type="text" placeholder="セイ"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-input type="text" placeholder="メイ"></ion-input>\n  </ion-item>\n      <ion-label color="primary" class="labelText">氏名（漢字）</ion-label>\n  <ion-item>\n    <ion-input type="text" placeholder="姓"></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-input type="text" placeholder="名"></ion-input>\n  </ion-item>  \n  <ion-label color="primary" class="labelText">生年月日</ion-label>\n  <ion-item>\n    <ion-select [(ngModel)]="year">\n          <ion-option *ngFor="let yr of years">{{yr}}</ion-option>\n        </ion-select>\n      <ion-select [(ngModel)]="month">\n        <ion-option value="01">1月</ion-option>\n        <ion-option value="02">2月</ion-option>\n        <ion-option value="03">3月</ion-option>\n        <ion-option value="04">4月</ion-option>\n        <ion-option value="05">5月</ion-option>\n        <ion-option value="06">6月</ion-option>\n        <ion-option value="07">7月</ion-option>\n        <ion-option value="08">8月</ion-option>\n        <ion-option value="09">9月</ion-option>\n        <ion-option value="10">10月</ion-option>\n        <ion-option value="11">11月</ion-option>\n        <ion-option value="12">12月</ion-option>\n      </ion-select>\n      <ion-select [(ngModel)]="day">\n          <ion-option value="01">1日</ion-option>\n          <ion-option value="02">2日</ion-option>\n          <ion-option value="03">3日</ion-option>\n          <ion-option value="04">4日</ion-option>\n          <ion-option value="05">5日</ion-option>\n          <ion-option value="06">6日</ion-option>\n          <ion-option value="07">7日</ion-option>\n          <ion-option value="08">8日</ion-option>\n          <ion-option value="09">9日</ion-option>\n          <ion-option value="10">10日</ion-option>\n          <ion-option value="11">11日</ion-option>\n          <ion-option value="12">12日</ion-option>\n          <ion-option value="13">13日</ion-option>\n          <ion-option value="14">14日</ion-option>\n          <ion-option value="15">15日</ion-option>\n          <ion-option value="16">16日</ion-option>\n          <ion-option value="17">17日</ion-option>\n          <ion-option value="18">18日</ion-option>\n          <ion-option value="19">19日</ion-option>\n          <ion-option value="20">20日</ion-option>\n          <ion-option value="21">21日</ion-option>\n          <ion-option value="22">22日</ion-option>\n          <ion-option value="23">23日</ion-option>\n          <ion-option value="24">24日</ion-option>\n          <ion-option value="25">25日</ion-option>\n          <ion-option value="26">26日</ion-option>\n          <ion-option value="27">27日</ion-option>\n          <ion-option value="28">28日</ion-option>\n          <ion-option value="29">29日</ion-option>\n          <ion-option value="30">30日</ion-option>\n          <ion-option value="31">31日</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-label color="primary" class="labelText">お届けの電話番号（自宅）</ion-label>\n  <ion-item>\n    <ion-input type="number" placeholder="ハイフンあり"></ion-input>\n  </ion-item>\n  <ion-label color="primary" class="labelText">Eメールアドレス</ion-label>\n  <ion-item>\n    <ion-input type="email" placeholder=""></ion-input>\n  </ion-item>\n  <ion-label color="primary" class="labelText">Eメールアドレス(確認)</ion-label>\n  <ion-item>\n      <ion-input type="email" placeholder=""></ion-input>\n    </ion-item>\n</ion-list>\n\n下記に該当する方は保険プランにはお申し込みいただけません。 <BR>\n※1）普通傷害保険、家族傷害保険等、この保険契約の全部または一部に対して支払責任が同じである他の保険契約または共済契約が \nある場合で、他契約と合わせて死亡・後遺障害保険金額が5,000万円、入院日額が20,000円、通院日額が13,000円を超える場合。 <BR>\n※2）過去３年間の間に１回の事故で５万円以上の保険金を請求または受領したことがある場合。 <BR>\n※3）保険プランについて、過去、自動更新がお見送りとなったことがある場合。\n<BR><BR>\n<button ion-button color="light" (click)="onClickNext()">次へ</button>\n<button ion-button color="light" (click)="onClickBack()">戻る</button>\n<button ion-button color="light" (click)="onClickCancel()">お申し込みを中止する</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/kenji_takagi/svpTest/src/pages/svp-input/svp-input.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SvpInputPage);
    return SvpInputPage;
}());

//# sourceMappingURL=svp-input.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstateMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EstateMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstateMenuPage = /** @class */ (function () {
    function EstateMenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EstateMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EstateMenuPage');
    };
    EstateMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estate-menu',template:/*ion-inline-start:"/Users/kenji_takagi/svpTest/src/pages/estate-menu/estate-menu.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>ATRIUM　不動産情報検索</ion-title>\n  </ion-navbar>\n</ion-header> \n<ion-content padding>\n    <ion-grid >\n      <ion-row>\n        <ion-col>\n          <ion-card>\n              <ion-icon name="logo-reddit"></ion-icon><br>\n            エリア<br>から探す\n          </ion-card>\n        </ion-col>\n        <ion-col>\n          <ion-card> \n              <ion-icon name="train"></ion-icon><br>\n            駅<br>から探す\n          </ion-card>\n        </ion-col>\n        <ion-col>\n          <ion-card>\n              <ion-icon name="map"></ion-icon><br>\n            地図<br>から探す\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col> \n          <ion-card>\n              <ion-icon name="navigate"></ion-icon><br>\n            現在位置<br>から探す\n          </ion-card>\n        </ion-col>\n        <ion-col>\n          <ion-card>\n              <ion-icon name="logo-playstation"></ion-icon><br>\n            ランク<br>から探す\n          </ion-card>\n        </ion-col>\n        <ion-col>\n          <ion-card>\n              <ion-icon name="bicycle"></ion-icon><br>\n            通勤時間<br>から探す\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-searchbar\n    placeholder="キーワードから探す"\n    [(ngModel)]="myInput"\n    [showCancelButton]="shouldShowCancel"\n    (ionInput)="onInput($event)"\n    (ionCancel)="onCancel($event)">\n  </ion-searchbar> \n  </ion-content>\n\n'/*ion-inline-end:"/Users/kenji_takagi/svpTest/src/pages/estate-menu/estate-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EstateMenuPage);
    return EstateMenuPage;
}());

//# sourceMappingURL=estate-menu.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/estate-menu/estate-menu.module": [
		276,
		1
	],
	"../pages/svp-input/svp-input.module": [
		275,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/kenji_takagi/svpTest/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/kenji_takagi/svpTest/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/kenji_takagi/svpTest/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kenji_takagi/svpTest/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_svp_input_svp_input__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_maps__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_estate_menu_estate_menu__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_svp_input_svp_input__["a" /* SvpInputPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_estate_menu_estate_menu__["a" /* EstateMenuPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/svp-input/svp-input.module#SvpInputPageModule', name: 'SvpInputPage', segment: 'svp-input', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/estate-menu/estate-menu.module#EstateMenuPageModule', name: 'EstateMenuPage', segment: 'estate-menu', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_svp_input_svp_input__["a" /* SvpInputPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_estate_menu_estate_menu__["a" /* EstateMenuPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_maps__["a" /* GoogleMaps */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        platform.ready().then(function () {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/kenji_takagi/svpTest/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/kenji_takagi/svpTest/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/kenji_takagi/svpTest/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/kenji_takagi/svpTest/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map