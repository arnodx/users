import {Component} from '@angular/core';
import {tap} from "rxjs";
import {User} from "../../../core/models/user";
import {ColumnTable} from "../../../core/models/table";
import {ApiListResponse} from "../../../core/models/api-response";
import {FavoritesService} from "../../../core/services/favorites.service";
import {Table} from "primeng/table";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  dataSource: User[];
  totalRecords: number;
  columns: ColumnTable[];

  constructor(private favoritesService: FavoritesService) {
  }

  ngOnInit(): void {
    this.columns = [
      {field: 'avatar', header: 'Avatar',sort: false},
      {field: 'favorite', header: 'Ulubione',sort: false},
      {field: 'name', header: 'Imie i Naazwisko',sort: true},
      {field: 'action', header: 'Akcja',sort: false},
    ];
    this.favoritesService.getUsersAndInitFavoriteUsersInLocalStorage().pipe(
      tap((user: ApiListResponse<User[]>) => {
        this.setDataSource(user);
        this.setTotalRecords(user);
      })
    ).subscribe();
  }

  private setDataSource(user: ApiListResponse<User[]>) {
    this.dataSource = user.data;
  }

  private setTotalRecords(user: ApiListResponse<User[]>) {
    this.totalRecords = user.total;
  }

  clearSearch(table: Table):void {
    table.clear();
  }
}
