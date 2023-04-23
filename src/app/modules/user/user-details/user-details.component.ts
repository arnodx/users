import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../../../core/models/user";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  user: User;

  constructor(
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.user = this.route.snapshot.data['user'];
  }
}
