import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { DialogComponent } from 'src/app/features/cliente/dialog/dialog.component';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent {

  constructor(private clienteService: ClienteService, private router: Router, public dialog: MatDialog, private route: ActivatedRoute) {}
  dataSource: MatTableDataSource<Cliente> = new MatTableDataSource<Cliente>();
  displayedColumns: string[] = ['id', 'nome', 'cognome', 'indirizzo', 'attivo', 'azioni'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getData();
  }

  openDialog(idUser: number): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: 'auto',
      data: {idUser}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.clienteService.getAllClienti().subscribe(res => {
        this.dataSource.data = res;
      })
    });
  }


  getData() {
    this.clienteService.getAllClienti().subscribe(res => {
      this.dataSource.data = res;
    });
  }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  showDetail(id: number) {
    this.router.navigate(["user/", id], {queryParams: {operation:"readOnly"}});
  }

  onClickDelete(id: number) {
    this.openDialog(id);
  }

  onClickAddNew() {
    this.router.navigate(["create"], {queryParams: {operation:"add"}});
  }

  onClickUpdate(id: number) {
    this.router.navigate(["edit/", id], {queryParams: {operation:"edit"}});
  }

}