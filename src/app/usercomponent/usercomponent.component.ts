import { Component, OnInit } from '@angular/core';
// inyeccion dependencia.
import { UserService } from '../user.service';

@Component({
  selector: 'app-usercomponent',
  templateUrl: './usercomponent.component.html',
  styleUrls: ['./usercomponent.component.css']
})
export class UsercomponentComponent implements OnInit {

  userName:string;
  constructor(private user: UserService) {
   }

  ngOnInit() {
    this.user.setUserName("Juan Topo");
    //asignamos el valor al atributo userName.
    this.userName = this.user.getUserName();
  }

}
