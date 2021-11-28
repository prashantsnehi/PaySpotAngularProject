import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  hide: boolean = true;
  enabled: boolean = false;
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.model);
    this.toastr.success(JSON.stringify(this.model));
  }
}