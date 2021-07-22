import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { IUser } from "../interfaces/user.interface";
import { UsersService } from "../services/users.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent {
  imgUrl: string = "";
  userName: string = "";
  email: string = "";
  users$: Observable<IUser> = this.service.getIndividualUsers(
    this.activatedRoute.snapshot.params.id
  );

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly service: UsersService
  ) {}
}
