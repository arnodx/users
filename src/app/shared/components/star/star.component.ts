import {Component, Input} from '@angular/core';
import {FavoriteUser, User} from "../../../core/models/user";
import {FavoritesService} from "../../../core/services/favorites.service";
import {tap} from "rxjs";
import {LocalStorageService} from "../../../core/services/local-storage.service";

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent {
  @Input()
  user: User;

  constructor(
    private favoritesService: FavoritesService,
    private localStorageService: LocalStorageService
  ) {
  }

  isFavorite(): boolean {
    return this.favoritesService.isFavorite(this.user);
  }

  initFavoriteUsersIfNotExistAndSetFavoriteUser(): void {
    if (this.localStorageService.getLocalStorage<FavoriteUser[]>('user').length === 0) {
      this.favoritesService.getUsersAndInitFavoriteUsersInLocalStorage().pipe(
        tap(() => {
          this.favoritesService.setFavoriteUser(this.user);
        })
      ).subscribe();
    } else {
      this.favoritesService.setFavoriteUser(this.user);
    }
  }
}
