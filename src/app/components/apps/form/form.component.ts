import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  hide = true;
  formData = new FormGroup({
    name: new FormControl('', Validators.required),
    phnno: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  })
  constructor(private api: ServiceService,private router:Router) {
  }

  submit() {
    // console.log(this.formData.value);
    if (this.formData.valid) {
      this.api.createUser(this.formData.value.name, this.formData.value.email
        , this.formData.value.phnno, this.formData.value.address,).subscribe((res: any) => {
        // console.log(res);
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
          title: "Submitted  successfully"
        }).then(()=>{
          this.router.navigate(['/contacts']);
        })
        
      })
    } else{
       
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
        icon: "error",
        title: "somthing went wrong"
      });
      
    }
  }

  

}
