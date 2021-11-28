import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  login(f: NgForm) {
    console.log(this.model);
    f.valid ? this.toastr.success(JSON.stringify(this.model)) : this.toastr.error('invalid Username and Password');
  }
}