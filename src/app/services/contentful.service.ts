import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  constructor() {}

  private contentfulClient = createClient({
    space: environment.spaceKey,
    accessToken: environment.accessToken,
  });

  getAllEntries() {
    const promise = this.contentfulClient.getEntries();
    return from(promise);
    
  }

  getEntryById(id:string){
    const promise = this.contentfulClient.getEntry(id);
    return from(promise);
  }
}
