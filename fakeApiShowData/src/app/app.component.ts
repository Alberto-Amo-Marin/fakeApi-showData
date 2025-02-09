import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FakeApiService, Data } from './fake-api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  readonly displayedColumns: string[] = ['id', 'name', 'email', 'address', 'phone'];
  dataSource = new MatTableDataSource<Data>();

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private fakeApiService: FakeApiService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  reloadData(): void {
    this.fetchData();
  }

  private fetchData(): void {
    this.fakeApiService.getData().subscribe(data => {
      this.dataSource.data = data;
      if (this.paginator) {
        this.paginator.firstPage();
      }
    });
  }
}
