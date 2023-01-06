import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { SdTableComponent } from '../sd-table/sd-table.component';

@Component({
  selector: 'app-sd-create-item',
  templateUrl: './sd-create-item.component.html',
  styleUrls: ['./sd-create-item.component.scss']
})
export class SdCreateItemComponent implements OnInit {

  
  private home: HomeComponent;
  private table: SdTableComponent;
  
  constructor(home: HomeComponent, table: SdTableComponent){
    this.home=home;
    this.table=table;
  }

  name: string = "";

  public Save():void{
    this.table.addItem(this.name);
    this.Close();
  }

  public Close():void{
     this.home.Clear();
  }
  
  ngOnInit(): void {
  }

}
