import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'prueba';
  @ViewChild('enviar', {static: false}) btnEnviar: ElementRef;
  @ViewChild('iframe', {static: false}) iframeEl: ElementRef;

  msg = fromEvent<MessageEvent>(window, 'message');

  urls = [
    'http://localhost:4200', 
    'http://localhost:3000'
  ];


  constructor(public router: Router) {
  }

  ngOnInit() {

    // localStorage.setItem('token', '1234');

  }


  ngAfterViewInit() {

    let receptor = this.iframeEl.nativeElement.contentWindow;
    let btnClick = fromEvent<MessageEvent>(this.btnEnviar.nativeElement, 'click');

    btnClick.subscribe(r => {


      

      this.iframeEl.nativeElement.contentWindow.postMessage({
        action: 'save',
        key: 'keyForData',
        value: 'pruebaa'
      }, '*');


      // receptor.postMessage ('Hola Treehouse!', '*');
      // console.log(receptor);

      // window.top.postMessage('Hello Parent Frame!', '*');
       
    })

  }

}
