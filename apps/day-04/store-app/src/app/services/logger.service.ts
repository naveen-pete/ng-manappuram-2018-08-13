import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  log(msg: any) {
    console.log('LoggerService.log() =>', msg);
    // code to log to a server
  }
}
