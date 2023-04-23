import {Injectable} from '@angular/core';
import {FavoriteUser, User} from "../models/user";
import {LocalStorageService} from "./local-storage.service";
import {map, mergeMap, Observable, tap} from "rxjs";
import {ApiListResponse} from "../models/api-response";
import {combineFirstNameAndLastNameToUsers} from "../utils/mapNameUser";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(
    private userService: UserService,
    private localStorage: LocalStorageService) {
  }

  getUsersAndInitFavoriteUsersInLocalStorage(): Observable<ApiListResponse<User[]>> {
    return this.userService.getTotalElements().pipe(
      mergeMap((totalElements: number) => this.userService.getUsers(totalElements)),
      map((user: ApiListResponse<User[]>) => combineFirstNameAndLastNameToUsers(user)),
      tap((user: ApiListResponse<User[]>) => this.initFavoriteUsersIfEmptyFavoriteUsers(user)),
    );
  }

  setFavoriteUser(userData: User): void {
    const favoriteUsersData = this.localStorage.getLocalStorage<FavoriteUser[]>('user');
    const updatedFavoriteUsers = this.findUserAndSetFavoriteUser(favoriteUsersData, userData);
    this.localStorage.setLocalStorage("user", updatedFavoriteUsers);
  }

  isFavorite(user: User): boolean {
    const favoriteUsersData = this.localStorage.getLocalStorage<FavoriteUser[]>('user');
    const foundFavoriteUsers = favoriteUsersData?.find((p: FavoriteUser) => p.id === user?.id);
    if (!foundFavoriteUsers) return false;
    return foundFavoriteUsers.isFavorite;
  }

  private initFavoriteUsersIfEmptyFavoriteUsers(user: ApiListResponse<User[]>): void {
    if (this.localStorage.getLocalStorage<FavoriteUser[]>('user').length === 0) {
      const createdFavoriteUsers = this.mapUsersToFavoriteUsers(user);
      this.localStorage.setLocalStorage('user', createdFavoriteUsers);
    }
  }

  private mapUsersToFavoriteUsers(user: ApiListResponse<User[]>): FavoriteUser[] {
    return user.data.map((user: User) => {
      return {
        id: user.id,
        isFavorite: false,
      }
    });
  }

  private findUserAndSetFavoriteUser(favorites: FavoriteUser[], userData: User): FavoriteUser[] {
    return favorites.map((p: { id: number; isFavorite: any; }) =>
      p.id === userData.id
        ? {...p, isFavorite: !p.isFavorite}
        : p
    );
  }
}
