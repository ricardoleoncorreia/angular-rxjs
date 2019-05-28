import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { interval, timer, fromEvent, Observable, noop } from 'rxjs';
import { createHttpObservable } from '../common/util';
import { map } from 'rxjs/operators';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const http$ = createHttpObservable('/api/courses');

    const courses$ = http$
      .pipe(
        map(res => Object.values(res['payload']))
      );

    courses$.subscribe(
      courses => console.log(courses),
      noop,
      () => console.log('completed')
    );

  }
  
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
