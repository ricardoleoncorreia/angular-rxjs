
## The RxJs In Practice Course

This repository contains the code of the [RxJs In Practice Course](https://angular-university.io/course/rxjs-course).

This course repository is updated to Angular v7, and there is a  package-lock.json file available, for avoiding semantic versioning installation issues.

# Installation pre-requisites

IMPORTANT: Please use the latest Node and especially NPM, to make sure the package-lock.json is used.

For running this project we need and npm installed on our machine. These are some tutorials to install node in different operating systems:

*Its important to install the latest version of Node*

- [Install Node and NPM on Windows](https://www.youtube.com/watch?v=8ODS6RM6x7g)
- [Install Node and NPM on Linux](https://www.youtube.com/watch?v=yUdHk-Dk_BY)
- [Install Node and NPM on Mac](https://www.youtube.com/watch?v=Imj8PgG3bZU)

# Worked braches

- Observables: 1-operators
- Subjects: 2-store

# Implemented observable operators

- AbortController: Create a way to cancel an observable (follow the switchMap definition)
- concat: Concatenate two or more observables
- concatMap: Executes the second stream after the first one completes
- catchError: Handle errors, it completes the one that errored out and creates a new one. The value emitted is executed as a success
- debounceTime: waits the value to be stable to execute the last value emitted
- distinctUntilChanged: continues the stream if the new value is different than the previous one
- delayWhen: delay the values, used regulary with retryWhen and timer (as a observable returned)
- exhaustMap: No later streams are executed until the first one is completed
- filter: stream is excluded if a specified condition is not fulfilled
- finalize: it is the same as "finally" in a "try/catch block" for catchError
- first: observable is completed after the first value gets emitted
- forkJoin: waits for combined streams to be completed to emit only one value with all stream values and then completes
- fromPromise: converts a promise into an observable
- fromEvent: converts an event (eg: click) into an observable
- Interval: Creates an Observable that emits sequential numbers every specified interval of time
- map: helps you to convert observable content
- merge: Merge two or more observables
- mergeMap: Executes all followed streams in parallel
- noop: No operator ( () => {} )
- Observable.create: creates an observer from scratch
- of: emits a value an completes
- retryWhen: each time the stream errors out, it creates a new stream with some conditions
- shareReplay: share observable content for many different child observables (eg: filter courses by category)
- startWith: initialize the stream with a default value
- switchMap: When a new stream appears, the previous one is cancelled
- take: after n values emitted, the observable completes
- tap: use observable content without saving results
- throttle: limit number of values being emitted in a period of time, used with interval
- throttleTime: it is like throttle but it only requires the time as a argument
- throwError: Returns an observable that errors out
- Timer: Creates an Observable that starts emitting after an dueTime and emits ever increasing numbers after each period of time thereafter
- withLatestFrom: emits the value with the last one emitted from a second one

# Subjects

- AsyncSubject: Used for long running calculations. When it completes, it emits the last value of the stream before the completion
- BehaviorSubject: A subject with an initial value
- ReplaySubject: Is like AsyncSubject but it emits all intermidiate values
- Subject: it is an observable and an observer at the same time