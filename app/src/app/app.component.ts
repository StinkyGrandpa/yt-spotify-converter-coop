import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { subscribeOn, take, takeUntil } from 'rxjs/operators';
import { ErrorDTO } from './dto/error.dto';
import { HttpErrorService } from './services/http-error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private errService: HttpErrorService) {

  }
  public error: ErrorDTO = undefined;

  public async ngOnInit(): Promise<void> {
    this.errService.initError().subscribe(data => {
      this.error = data;
    })


  }



}