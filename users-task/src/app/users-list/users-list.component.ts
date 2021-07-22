import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IUser } from "../interfaces/user.interface";
import { UsersService } from "../services/users.service";

const RowColumnMapping = {
  Id: "id",
  Image: "avatar",
  Name: "FullName",
  Email: "email",
};

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"],
})
export class UsersListComponent {
  users$: Observable<IUser[]> = this.service.getAllUsers();
  mapping = RowColumnMapping;
  constructor(
    private readonly service: UsersService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  columns = [
    {
      name: "Id",
      type: "Text",
    },
    {
      name: "Image",
      type: "Image",
    },
    {
      name: "Name",
      type: "Text",
    },
    {
      name: "Email",
      type: "Text",
    },
    {
      name: "Actions",
      type: "Actions",
    },
  ];

  deleteUser(user: IUser) {
    this.users$ = this.users$.pipe(
      map((response) => {
        return response.filter((res) => res.id !== user.id);
      })
    );
  }

  viewUser(user: IUser) {
    this.router.navigate([user.id], {
      relativeTo: this.activatedRoute,
    });
  }
}
