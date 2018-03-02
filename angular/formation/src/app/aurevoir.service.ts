import { Injectable } from '@angular/core';

@Injectable()
export class AurevoirService {

  constructor() { }

  getCustomers() {
    // appel AJAX au serveur...
    return ["mathieu", "thomas", "franck"];
  }

}
