import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { ServiceService } from '../service.service';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements AfterViewInit,OnInit {

    displayedColumns: string[] = ['select', 'image', 'name', 'email','phnno','address','pdf','action'];
    // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    selection = new SelectionModel<any>(true, []);
    dataSource: any;
    userData: any;
    userbyid: any;
    pdfUrl: any;
    users: any;

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    constructor(
        private _liveAnnouncer: LiveAnnouncer,
        private api:ServiceService,
        private sanitizer: DomSanitizer

    ) { }

    ngOnInit(){
        
        this.api.getUser().subscribe((res:any)=>{
            // console.log(res);
            this.userData = res;
            this.dataSource = new MatTableDataSource<any>(this.userData);
   
        })
       
    }


     deleteUser(id:any){
        // console.log(id);
          this.api.deleteUser(id).subscribe((res:any)=>{
            // console.log(res,'user deleted');
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "Selected User has been deleted successfully"
              }).then(()=>{
                window.location.reload();
              })
            
        })
     }
   
     viewfb1: any = 0;
     view01(id: any) {
        this.viewfb1 = 1;
        this.api.getUserbyId(id).subscribe((res:any)=>{
            console.log(res,'get user');
            this.userbyid = res;
           
        })
      
    }
    closeview01() {
        this.viewfb1 = 0;
        this.viewpdf = 0;
    }

    updateUser(id:any,name:any,email:any,phnno:any,address:any){
        this.api.updateUser(id,name,email,phnno,address).subscribe((res:any)=>{
            // console.log(res,"updated data");
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "Selected User has been Updated successfully"
              }).then(()=>{
                this.closeview01();
              })
            
        })
    }

      
      downloadPdf(userId: number) {
        this.api.generatePdf(userId).subscribe((pdfBlob: Blob) => {
          const downloadUrl = window.URL.createObjectURL(pdfBlob);
          const a = document.createElement('a');
          a.href = downloadUrl;
          a.download = `user_${userId}.pdf`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }, error => {
          console.error('Error downloading PDF', error);
        });
      }

      viewpdf : any = 0;
      viewPdf(userId: number) {
        this.viewpdf = 1;
        this.api.generatePdf(userId).subscribe((pdfBlob: Blob) => {
          const pdfUrl = window.URL.createObjectURL(pdfBlob);
          this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(pdfUrl);
        }, error => {
          console.error('Error viewing PDF', error);
        });
      }
      
     

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    toggleAllRows() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        // this.selection.select(...this.dataSource.data);

        // Select only the first 5 rows initially
        const firstFiveRows = this.dataSource.data.slice(0, 10);
        this.selection.select(...firstFiveRows);
    }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: any): string {
        if (!row) {
            return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }


    announceSortChange(sortState: Sort) {

        // details about the values being sorted.
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }


    
}

 