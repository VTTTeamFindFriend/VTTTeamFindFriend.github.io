import { Component, OnInit, trigger, state, style, transition, animate } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { SanPham } from "../../models/san_pham";


@Component({
  selector: "sach_moi",
  templateUrl: "./sach_moi.component.html",

})
export class SachMoiComponent implements OnInit {
  mang_san_pham: any[] = [];


  constructor(private _product_sevice: ProductService

  ) {
    this._product_sevice.getListProductbyCondition(false).then(data => {
      if (data) {
        console.log(data);
        this.mang_san_pham = data;
      }
    });
  }
  ngOnInit() { }
}




