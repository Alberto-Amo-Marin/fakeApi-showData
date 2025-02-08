import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FakeApiService, Data } from './fake-api.service';
import { MatPaginator } from '@angular/material/paginator';  // Importa MatPaginator
import { MatTableDataSource } from '@angular/material/table';  // Usamos MatTableDataSource para integrar la paginación

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'address', 'phone'];
  dataSource: MatTableDataSource<Data> = new MatTableDataSource();  // Usamos MatTableDataSource

  @ViewChild(MatPaginator) paginator!: MatPaginator;  // Agregamos MatPaginator como ViewChild

  constructor(private fakeApiService: FakeApiService) { }

  ngOnInit(): void {
    this.fakeApiService.getData().subscribe(data => {
      this.dataSource.data = data;  // Asignamos los datos a la tabla
    });
  }

  // Esto es lo que se asegura de que el paginator esté disponible
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;  // Asignamos el paginator a la tabla
  }

  reloadData() {
    this.fakeApiService.getData().subscribe(data => {
      this.dataSource.data = data;  // Asignamos los datos a la tabla
    });
  }
}
