import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  AfterViewInit {
  title = 'prueba';
  @ViewChild('enviar', {static: false}) btnEnviar: ElementRef;
  @ViewChild('iframe', {static: false}) iframeEl: ElementRef;

  constructor() {}

  ngAfterViewInit() {

    let btnClick = fromEvent<MessageEvent>(this.btnEnviar.nativeElement, 'click');

    btnClick.subscribe(r => {

      this.iframeEl.nativeElement.contentWindow.postMessage({
        action: 'save',
        key: 'keyForData',
        value: '1234'
      }, '*');

    })
  }

}
