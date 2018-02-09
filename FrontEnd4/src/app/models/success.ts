export class Success {
  code: any;
  isSuccessful: any;
  message: any;

  access_token: any;

  constructor(code, isSuccessful, message, access_token) {
    this.code = code;
    this.isSuccessful = isSuccessful;
    this.message = message;

    this.access_token = access_token;
  }
}
