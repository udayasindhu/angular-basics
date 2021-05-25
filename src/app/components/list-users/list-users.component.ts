import { Component, OnInit } from '@angular/core';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  public usersList: any;
  constructor(private fetch: FetchService) { }
  ngOnInit() {
    this.fetch.fetch().subscribe((response: any) => {
      this.usersList = response;
    });
  }
}
