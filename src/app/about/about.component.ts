import { Component, OnInit } from '@angular/core';
import { interval, timer, fromEvent } from 'rxjs';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  
  observableExamples() {
    // This is only a definition
    const interval$ = interval(1000);
    // To transform it into a Stream, you should subscribe to it
    const sub = interval$.subscribe(val => console.log("Stream 1 => " + val));
    setTimeout(() => sub.unsubscribe(), 5000);
  
    const intervalTimer$ = timer(3000, 1000);
    intervalTimer$.subscribe(val => console.log("Stream 2 => " + val));
  
    const click$ = fromEvent(document, 'click');
    click$.subscribe(
      evt => console.log(evt),
      err => console.log(err),
      () => console.log('completed')
    );
  }

}
