import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {concat, fromEvent, interval, noop, observable, Observable, of, timer, merge, BehaviorSubject, Subject, AsyncSubject, ReplaySubject} from 'rxjs';
import {delayWhen, filter, map, take, timeout} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';


@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    ngOnInit() {

    }

    subjectExample() {
        /*
            A simple stream. It will emit values when the next method
            is called
        */
        const subject = new Subject();
        const series$ = subject.asObservable();
        series$.subscribe(val => console.log('first sub: ' + val));

        subject.next(1);
        subject.next(2);
        subject.next(3);

        subject.complete();

    }

    behaviorSubjectExample() {
        /*
            The difference between Subject and BehaviorSubject is that the last one have
            memory and late subcribers receive always the last emitted value
        */
        const subject = new BehaviorSubject(0);
        const series$ = subject.asObservable();
        series$.subscribe(val => console.log('first sub: ' + val));

        subject.next(1);
        subject.next(2);
        subject.next(3);

        setTimeout(() => {
            series$.subscribe(val => console.log('late sub: ' + val));
            subject.next(4);
        }, 3000)

    }

    asyncSubjectExample() {
        /*
            Waits for completion to emit the last
            value in the stream. You can subscribe
            after the completion to get that value
        */
        const subject = new AsyncSubject();
        const series$ = subject.asObservable();
        series$.subscribe(val => console.log('first sub: ' + val));

        subject.next(1);
        subject.next(2);
        subject.next(3);

        subject.complete();

        setTimeout(() => {
            series$.subscribe(val => console.log('second sub: ' + val));
        }, 3000);
    }

    replaySubjectExample() {
        /*
            It is the same like async subject but it returns
            all emitted value but not only the last
        */
        const subject = new ReplaySubject();
        const series$ = subject.asObservable();
        series$.subscribe(val => console.log('first sub: ' + val));

        subject.next(1);
        subject.next(2);
        subject.next(3);

        // subject.complete();

        setTimeout(() => {
            series$.subscribe(val => console.log('second sub: ' + val));
            subject.next(4);
            series$.subscribe(val => console.log('third sub: ' + val));
        }, 3000);
    }

}






