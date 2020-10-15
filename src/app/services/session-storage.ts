import { Injectable } from '@angular/core';
import { AppComponent } from '../app.component';

class SessionStorage implements Storage {
    [name: string]: any;
    readonly length: number;
    clear(): void {}
    getItem(key: string): string | null {return undefined;}
    key(index: number): string | null {return undefined;}
    removeItem(key: string): void {}
    setItem(key: string, value: string): void {}
  }
  
  
  @Injectable({
    providedIn: 'root'
  })
  export class SessionStorageService implements Storage {
  
    private storage: Storage;
  
    constructor() {
      this.storage = new SessionStorage();
  
      AppComponent.isBrowser.subscribe(isBrowser => {
        if (isBrowser) {
          this.storage = sessionStorage;
        }
      });
    }
  
    [name: string]: any;
  
    length: number;
  
    clear(): void {
      this.storage.clear();
    }
  
    getItem(key: string): string | null {
      return this.storage.getItem(key);
    }
  
    key(index: number): string | null {
      return this.storage.key(index);
    }
  
    removeItem(key: string): void {
      return this.storage.removeItem(key);
    }
  
    setItem(key: string, value: string): void {
      return this.storage.setItem(key, value);
    }
  }