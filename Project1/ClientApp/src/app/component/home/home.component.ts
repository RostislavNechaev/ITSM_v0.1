import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  @ViewChild('sdContainer', {static: false, read: ViewContainerRef })
  public container!: ViewContainerRef;
  

  ngOnInit(): void {
  }

  public AddComponent(component: any): void
  {
    this.container.clear();
    this.container.createComponent(component);
  }

  public Clear(): void
  {
    this.container.clear();
  }
}
