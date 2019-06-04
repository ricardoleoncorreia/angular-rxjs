import { Observable } from "rxjs";

export function createHttpObservable(url: string) {
  return Observable.create(observer => {

    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, {signal})
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          observer.error('Request failed with status code: ' + response.status);
        }
      }).then(body => {
        observer.next(body);
        observer.complete();
      }).catch(err => {
        observer.error(err);
      });

    // This is the cancellation function, it executes when unsubscribe
    return () => controller.abort();
  });
}

