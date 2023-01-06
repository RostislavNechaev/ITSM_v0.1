import { AfterViewInit, ChangeDetectorRef, Component, Injectable, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Guid } from 'guid-typescript';
import { HomeComponent } from '../home/home.component';
import { SdCreateItemComponent } from '../sd-create-item/sd-create-item.component';

@Component({
  selector: 'sd-table',
  templateUrl: './sd-table.component.html',
  styleUrls: ['./sd-table.component.css']
})

@Injectable({ providedIn: 'root' })
export class SdTableComponent implements OnInit {

  ngOnInit(): void {

  }
  private home: HomeComponent;
  private cd: ChangeDetectorRef;
  
  constructor(home: HomeComponent, cd: ChangeDetectorRef){
    this.home=home;
    this.cd=cd;
  }

  public sdList: Array<sdComponent> = 
  [
    { id: Guid.create(), name: 'test1', description: 'description' },
    { id: Guid.create(), name: 'test2', description: 'description' },
    { id: Guid.create(), name: 'test3', description: 'description' },
    { id: Guid.create(), name: 'test4', description: 'description' },
    { id: Guid.create(), name: 'test5', description: 'description' },
  ]

  public addSD(): void
  {
    this.home.AddComponent(SdCreateItemComponent);
  }  

  public addItem(item: string): void
  {
    this.sdList = [...this.sdList,{id: Guid.create(), name: item, description: 'description'}];
    this.cd.detectChanges();
    console.log(this.sdList);
  }  
}

interface sdComponent {
  id: Guid;
  name: string;
  description: string;
}