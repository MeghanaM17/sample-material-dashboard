import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SampleService } from 'app/sample.service';

export interface empData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email'];
  dataSource : MatTableDataSource<any>;
  allData: empData[];
  users: empData[] = [];

  constructor(private service :SampleService) {
    
   }

  ngOnInit() : void {
    this.service.getEmployeeData().subscribe((res: empData[]) => {
      this.allData = res;
      // console.log(res)
      this.dataSource = new MatTableDataSource<empData>(this.allData);
      this.dataSource.data = this.allData;
      // console.log("I'm the data: ",this.dataSource);
      console.log("I'm the data inside datasource: ",this.allData);

    });
  }

}
