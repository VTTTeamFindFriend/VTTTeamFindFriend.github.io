import {Component, OnInit} from "@angular/core";
import {UserService} from '../../services/user.service';
import {Success} from '../../models/success';

@Component({selector: "w_header", templateUrl: "./w_header.component.html"})
export class WheaderComponent implements OnInit {
  Ket_qua : any;

  constructor(private user_service : UserService) {}

  dang_nhap(tk, pass) {
    this
      .user_service
      .getListNguoiDung(tk.value, pass.value)
      .then(data => {
        console.log(data);
        if (data) {
          if (data.code == "200") {
            console.log("đăng nhập thành công");
            this.Ket_qua="1"
          } else {
            this.Ket_qua = "-1";
          }
        }

      });
  }

  ngOnInit() {}
}
