import { Component, OnInit } from '@angular/core';
import { FakeApiService, Data } from './fake-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email'];
  dataSource: Data[] = [];

  constructor(private fakeApiService: FakeApiService) { }

  ngOnInit(): void {
    this.fakeApiService.getData().subscribe(data => {
      this.dataSource = data;
    });
  }
}
