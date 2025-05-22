import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserLoginComponent } from '../components/user-login/user-login.component';
import { StyleDirective } from '../directive/style.directive';
import { SummaryPipe } from '../pipe/summary.pipe';
import { UserApiService } from '../service/user-api.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,UserLoginComponent,StyleDirective,SummaryPipe, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'chart-project';
  longText = 'This is a very long description that should be shortened using a custom Angular pipe.';
readMore=[]

constructor(private _apiService:UserApiService){

}
  ngOnInit(): void {
    this._apiService.getUserPost().subscribe(res=>{
      console.log(res);
      this.readMore=res
  })

  
}
read(event:Event){
event.preventDefault();
}

}
