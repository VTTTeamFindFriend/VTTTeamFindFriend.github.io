import {Injectable} from "@angular/core"

import {Message} from "../helper/message";

@Injectable()
export class AlertService {

  error(message : string) {
    console.error(Message.ERROR, message);
  }

  handlePromiseError(error : any) : Promise < any > {
    console.error(Message.ERROR, error);
    return Promise.reject(error.message || error);
  }
}
