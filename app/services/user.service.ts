import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Body} from "@angular/http/src/body";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Success} from "../models/success";
import {AlertService} from '../services/alert.service';

@Injectable()
export class UserService {
  [x : string] : any;
  isLogined : boolean = false;
  thong_tin_dang_nhap : any;
  constructor(private http : Http, private alertService : AlertService) {
    // this.thong_tin_dang_nhap = localStorage.getItem("nguoi_dung_dang_nhap"); if
    // (this.thong_tin_dang_nhap) {   this.isLogined = true; }
  }
  getListNguoiDung(user, pass) : Promise < Success > {
    const url = "https://findfriendlocation1.herokuapp.com/api/login";
    const _options = {
      headers: new Headers({'Content-Type': 'application/json'})
    };
    const body = JSON.stringify({"email": user, "password": pass});
    const result: any = this
      .http
      .post(url, body, _options);
    console.log(result);
    return result
      .toPromise()
      .then(data => {
        if (data) {
          data.json()as Success
        }
      })
      .catch(this.alertService.handlePromiseError);

  }
}
