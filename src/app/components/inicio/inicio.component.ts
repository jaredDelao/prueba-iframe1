import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  @ViewChild('enviar', {static: false}) btnEnviar: ElementRef;
  @ViewChild('iframe', {static: false}) iframe: ElementRef;

  urls = [
    'http://localhost:3000',
    'http://localhost:3100'
  ];

  $frameMessage = fromEvent<MessageEvent>(this.iframe.nativeElement, 'message');

  constructor(public router: Router) {

    
  }
  ngOnInit(): void {
  }

}
