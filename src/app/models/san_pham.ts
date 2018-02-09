export class SanPham {
  id: any;
  ten_sach: any;
  id_tac_gia: any;
  gioi_thieu: any;
  doc_thu: any;
  id_loai_sach: any;
  id_nha_xuat_ban: any;
  so_trang: any;
  ngay_xuat_ban: any;
  kich_thuoc: any;
  sku: any;
  trong_luong: any;
  trang_thai: any;
  hinh: any;
  don_gia: any;
  gia_bia: any;
  noi_bat: any;


  constructor(
    id,
    ten_sach,
    id_tac_gia,
    gioi_thieu,
    doc_thu,
    id_loai_sach,
    id_nha_xuat_ban,
    so_trang,
    ngay_xuat_ban,
    sku,
    kich_thuoc,
    trong_luong,
    trang_thai,
    hinh,
    don_gia,
    gia_bia,
    noi_bat
  ) {
    this.id = id;
    this.ten_sach = ten_sach;
    this.id_tac_gia = id_tac_gia;
    this.gioi_thieu = gioi_thieu;
    this.doc_thu = doc_thu;
    this.id_loai_sach = id_loai_sach;
    this.id_nha_xuat_ban = id_nha_xuat_ban;
    this.so_trang = so_trang;
    this.ngay_xuat_ban = ngay_xuat_ban;

    this.kich_thuoc = kich_thuoc;
    this.sku = sku;
    this.trong_luong = trong_luong;
    this.trang_thai = trang_thai;
    this.hinh = hinh;

    this.don_gia = don_gia;
    this.gia_bia = gia_bia;
    this.noi_bat = noi_bat;




  }
}
