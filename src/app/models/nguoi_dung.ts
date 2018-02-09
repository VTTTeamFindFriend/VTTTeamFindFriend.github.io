export class NguoiDung {
  id: any;
  tai_khoan: any;
  mat_khau: any;
  // id_loai_user: any;
  // id_phan_quyen: any;
  ho_ten: any;
  // email: any;
  // ngay_sinh: any;
  // dia_chi: any;
  // diem_tich_luy: any;
  // ngay_dang_ky: any;
  // thoi_gian_dang_nhap: any;
  // active_code: any;
  // avatar?: any;
  // so_lan_reset?: any;
  // dien_thoai: any;

  constructor(
    id,
    tai_khoan,
    mat_khau,
    // id_loai_user,
    // id_phan_quyen,
    ho_ten
    // email,
    // ngay_sinh,
    // dia_chi,
    // diem_tich_luy,
    // thoi_gian_dang_nhap,
    // active_code,
    // avatar,
    // so_lan_reset,
    // dien_thoai
  ) {
    this.id = id;
    this.tai_khoan = tai_khoan;
    this.mat_khau = mat_khau;

    this.ho_ten = ho_ten;
  }
}
