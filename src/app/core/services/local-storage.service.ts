import {Injectable} from '@angular/core';
import {FavoriteUser} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  getLocalStorage<T>(key: string): T {
    const localstorageData = localStorage.getItem(key)
    if (!localstorageData) return [] as T;
    return JSON.parse(localstorageData);
  }

  setLocalStorage(key: string, myfavorite: FavoriteUser[]): void {
    if (!myfavorite) return;
    localStorage.setItem(key, JSON.stringify(myfavorite));
  }
}
