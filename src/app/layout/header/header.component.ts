import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'ingegnati';
  motto = 'Una comunità di sviluppatori che si ingegna';

  constructor() { }

  ngOnInit() {
  }

}
