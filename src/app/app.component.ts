import { Component } from '@angular/core';
import {ShareService} from "./service/share.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed: boolean;
  idNum: string;
  constructor(
    private shareService: ShareService,
    private router: Router) {
    shareService.changeEmitted$.subscribe(
      body => {
        var jsonBody = JSON.parse(body);
        console.log(jsonBody);
        this.idNum = jsonBody['idNum'];
      });
  }
  ngOnInit() {
    this.idNum = 'Init NULL';
    this.isCollapsed = false;
  }
}
