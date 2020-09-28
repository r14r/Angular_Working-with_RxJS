^^^^# Working with reactive Frameworks

## Documentation

[Angular - The RxJS library](https://angular.io/guide/rx-library)

[RxJS - Reactive Extensions Library for JavaScript](https://rxjs-dev.firebaseapp.com/)

[Learning rxjs](https://www.learnrxjs.io/)

[ReactiveX - An API for asynchronous programming with observable streams](http://reactivex.io/)

[rxjs - a reactive programming library for JavaScript https://rxjs.dev](https://github.com/ReactiveX/rxjs)

## Adding

Bootstrap and jQuery

    npm install --save bootstrap
    npm install --save jquery

## Examples

### Examples from angular.oi

# The RxJS library

Reactive programming is an asynchronous programming paradigm concerned with data streams and the propagation of change ([Wikipedia](https://en.wikipedia.org/wiki/Reactive_programming)). RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code. See ([RxJS Docs](https://rxjs.dev/guide/overview)).

RxJS provides an implementation of the Observable type, which is needed until the type becomes part of the language and until browsers support it. The library also provides utility functions for creating and working with observables. These utility functions can be used for:

-   Converting existing code for async operations into observables
-   Iterating through the values in a stream
-   Mapping values to different types
-   Filtering streams
-   Composing multiple streams

## Observable creation functions

RxJS offers a number of functions that can be used to create new observables. These functions can simplify the process of creating observables from things such as events, timers, promises, and so on. For example: import { from } from 'rxjs'
// Create an Observable out of [a](api/router/RouterLinkWithHref) promise const data = from(fetch('/api/endpoint'))
// Subscribe to begin listening for [async](api/core/testing/async) result data.subscribe({ next(response) { console.log(response)
}, error(err) { console.error('[Error](api/core/MissingTranslationStrategy#Error): ' + err)
}, complete() { console.log('Completed')
} })

### Create an observable from a promise

      import  {  from  }  from  'rxjs'
     //Createan Observable out of [a](api/router/RouterLinkWithHref)promise  const data =  from(fetch('/api/endpoint'))
     // Subscribe to begin listening for [async](api/core/testing/async)result data.subscribe({  next(response)  { console.log(response)
      }, error(err)  { console.error('[Error](api/core/MissingTranslationStrategy#Error): '  + err)
      }, complete()  { console.log('Completed')
      }  })

        import { interval } from 'rxjs'
     // Create an Observable that will publish [a](api/router/RouterLinkWithHref) value on an interval const secondsCounter = interval(1000)
     // Subscribe to begin publishing values secondsCounter.subscribe(n => console.log(It's been ${n} seconds since subscribing!))

### Create an observable from a counter

      import  { interval }  from  'rxjs'
     //Createan Observable that will publish [a](api/router/RouterLinkWithHref)value on an interval
     const secondsCounter = interval(<span class="lit">1000)
     // Subscribe to begin publishing values

     secondsCounter.subscribe(n => console.log(It's been ${n} seconds since subscribing!))

    import { fromEvent } from 'rxjs'
     const el = document.getElementById('my-element')
     // Create an Observable that will publish mouse movements const mouseMoves = fromEvent(el, 'mousemove')
     // Subscribe to start listening for mouse-move events const [subscription](api/service-worker/SwPush#subscription) = mouseMoves.subscribe((evt: MouseEvent) => { // Log coords of mouse movements console.log(Coords: ${evt.clientX} X ${evt.clientY})
     // When the mouse is over the upper-left of the screen, // unsubscribe to stop listening for mouse movements if (evt.clientX < 40 && evt.clientY < 40) { subscription.unsubscribe()
     } })

### Create an observable from an event

      import  { fromEvent }  from  'rxjs'
      const el = document.getElementById('my-element')
     //Createan Observable that will publish mouse movements  const mouseMoves = fromEvent(el,  'mousemove')
     // Subscribe to start listening for mouse-move events  const  [subscription](api/service-worker/SwPush#subscription)  = mouseMoves.subscribe((evt:  MouseEvent)  =>  { // Log coords of mouse movements console.log(Coords: ${evt.clientX} X ${evt.clientY})
     // When the mouse is over the upper-left of the screen, // unsubscribe to stop listening for mouse movements  if  (evt.clientX <  <span class="lit">40  && evt.clientY <  <span class="lit">40)  { subscription.unsubscribe()
      }  })

        import { ajax } from 'rxjs/ajax'
     // Create an Observable that will create an AJAX [request](api/common/http/testing/TestRequest#request) const apiData = ajax('/api/data')
     // Subscribe to create the [request](api/common/http/testing/TestRequest#request) apiData.subscribe(res => console.log(res.status, res.response))

### Create an observable that creates an AJAX request

      import  { ajax }  from  'rxjs/ajax'
     //Createan Observable that will create an AJAX [request](api/common/http/testing/TestRequest#request)  const apiData = ajax('/api/data')
     // Subscribe to create the [request](api/common/http/testing/TestRequest#request) apiData.subscribe(res => console.log(res.status, res.response))

## Operators

Operators are functions that build on the observables foundation to enable sophisticated manipulation of collections. For example, RxJS defines operators such as [map()](api/core/QueryList#map), [filter()](api/core/QueryList#filter), concat(), and flatMap().

Operators take configuration options, and they return a function that takes a source observable. When executing this returned function, the operator observes the source observable’s emitted values, transforms them, and returns a new observable of those transformed values. Here is a simple example:

    import { map } from 'rxjs/operators'
     const nums = of(1, 2, 3)
     const squareValues = map((val: number) => val * val)
     const squaredNums = squareValues(nums)
     squaredNums.subscribe(x => console.log(x))
     // Logs // 1 // 4 // 9

### Map operator

      import  { map }  from  'rxjs/operators'
      const nums = of(<span class="lit">1,  <span class="lit">2,  <span class="lit">3)
      const squareValues = map((val: number)  => val * val)
      const squaredNums = squareValues(nums)
     squaredNums.subscribe(x => console.log(x))
     // Logs // 1 // 4 // 9

You can use _pipes_ to link operators together. Pipes let you combine multiple functions into a single function. The pipe() function takes as its arguments the functions you want to combine, and returns a new function that, when executed, runs the composed functions in sequence.

A set of operators applied to an observable is a recipe—that is, a set of instructions for producing the values you’re interested in. By itself, the recipe doesn’t do anything. You need to call subscribe() to produce a result through the recipe.

Here’s an example: import { filter, map } from 'rxjs/operators'
const nums = of(1, 2, 3, 4, 5)
// Create [a](api/router/RouterLinkWithHref) function that accepts an Observable. const squareOddVals = pipe( filter((n: number) => n % 2 !== 0), map(n => n \* n) )
// Create an Observable that will run the filter and map functions const squareOdd = squareOddVals(nums)
// Subscribe to run the combined functions squareOdd.subscribe(x => console.log(x))

### Standalone pipe function

      import  { filter, map }  from  'rxjs/operators'
      const nums = of(<span class="lit">1,  <span class="lit">2,  <span class="lit">3,  <span class="lit">4,  <span class="lit">5)
     //Create [a](api/router/RouterLinkWithHref)function that accepts an Observable.  const squareOddVals = pipe( filter((n: number)  => n %  <span class="lit">2  !==  <span class="lit">0), map(n => n * n)  )
     //Createan Observable that will run the filter and map functions  const squareOdd = squareOddVals(nums)
     // Subscribe to run the combined functions squareOdd.subscribe(x => console.log(x))

The pipe() function is also a method on the RxJS Observable, so you use this shorter form to define the same operation: import { filter, map } from 'rxjs/operators'
const squareOdd = of(1, 2, 3, 4, 5) .pipe( filter(n => n % 2 !== 0), map(n => n \* n) )
// Subscribe to get values squareOdd.subscribe(x => console.log(x))

### Observable.pipe function

      import  { filter, map }  from  'rxjs/operators'
      const squareOdd = of(<span class="lit">1,  <span class="lit">2,  <span class="lit">3,  <span class="lit">4,  <span class="lit">5)  .pipe( filter(n => n %  <span class="lit">2  !==  <span class="lit">0), map(n => n * n)  )
     // Subscribe to get values squareOdd.subscribe(x => console.log(x))

### Common operators

RxJS provides many operators, but only a handful are used frequently. For a list of operators and usage samples, visit the [RxJS API Documentation](https://rxjs.dev/api).

<div class="alert is-helpful">Note that, for Angular apps, we prefer combining operators with pipes, rather than chaining. Chaining is used in many RxJS examples.

<table>

<thead>

<tr>

<th align="left">Area</th>

<th align="left">Operators</th>

</tr>

</thead>

<tbody>

<tr>

<td align="left">Creation</td>

<td align="left">from,fromEvent, of</td>

</tr>

<tr>

<td align="left">Combination</td>

<td align="left">combineLatest, concat, merge, startWith , withLatestFrom, zip</td>

</tr>

<tr>

<td align="left">Filtering</td>

<td align="left">debounceTime, distinctUntilChanged, filter, take, takeUntil</td>

</tr>

<tr>

<td align="left">Transformation</td>

<td align="left">bufferTime, concatMap, map, mergeMap, scan, switchMap</td>

</tr>

<tr>

<td align="left">Utility</td>

<td align="left">tap</td>

</tr>

<tr>

<td align="left">Multicasting</td>

<td align="left">share</td>

</tr>

</tbody>

</table>

## Error handling

In addition to the [error()](api/common/http/testing/TestRequest#error) handler that you provide on subscription, RxJS provides the catchError operator that lets you handle known errors in the observable recipe.

For instance, suppose you have an observable that makes an API request and maps to the response from the server. If the server returns an error or the value doesn’t exist, an error is produced. If you catch this error and supply a default value, your stream continues to process values rather than erroring out.

Here's an example of using the catchError operator to do this:

    import { ajax } from 'rxjs/ajax'
     import { map, catchError } from 'rxjs/operators'
     // Return "response" from the API. If an error happens, // return an empty array. const apiData = ajax('/api/data').pipe( map(res => { if (!res.response) { throw new [Error](api/core/MissingTranslationStrategy#Error)('Value expected!')
     } return res.response
     }), catchError(err => of([])) )
     apiData.subscribe({ next(x) { console.log('data: ', x)
     }, error(err) { console.log('errors already caught... will not run')
     } })

### catchError operator

      import  { ajax }  from  'rxjs/ajax'
      import  { map, catchError }  from  'rxjs/operators'
     // Return "response" from the API. If an error happens, // return an empty array.  const apiData = ajax('/api/data').pipe( map(res =>  {  if  (!res.response)  {  throw  new  [Error](api/core/MissingTranslationStrategy#Error)('Value expected!')
      }  return res.response
      }), catchError(err => of([]))  )
     apiData.subscribe({  next(x)  { console.log('data: ', x)
      }, error(err)  { console.log('errors already caught... will not run')
      }  })

### Retry failed observable

Where the catchError operator provides a simple path of recovery, the retry operator lets you retry a failed request.

Use the retry operator before the catchError operator. It resubscribes to the original source observable, which can then re-run the full sequence of actions that resulted in the error. If this includes an HTTP request, it will retry that HTTP request.

The following converts the previous example to retry the request before catching the error: import { ajax } from 'rxjs/ajax'
import { map, retry, catchError } from 'rxjs/operators'
const apiData = ajax('/api/data').pipe( retry(3), // Retry up to 3 times before failing map(res => { if (!res.response) { throw new [Error](api/core/MissingTranslationStrategy#Error)('Value expected!')
} return res.response
}), catchError(err => of([])) )
apiData.subscribe({ next(x) { console.log('data: ', x)
}, error(err) { console.log('errors already caught... will not run')
} })

### retry operator

      import  { ajax }  from  'rxjs/ajax'
      import  { map,  retry, catchError }  from  'rxjs/operators'
      const apiData = ajax('/api/data').pipe(  retry(<span class="lit">3), // Retry up to 3 times before failing map(res =>  {  if  (!res.response)  {  throw  new  [Error](api/core/MissingTranslationStrategy#Error)('Value expected!')
      }  return res.response
      }), catchError(err => of([]))  )
     apiData.subscribe({  next(x)  { console.log('data: ', x)
      }, error(err)  { console.log('errors already caught... will not run')
      }  })

<div class="alert is-helpful">

Do not retry **authentication** requests, since these should only be initiated by user action. We don't want to lock out user accounts with repeated login requests that the user has not initiated.

## Naming conventions for observables

Because Angular applications are mostly written in TypeScript, you will typically know when a variable is an observable. Although the Angular framework does not enforce a naming convention for observables, you will often see observables named with a trailing “\$” sign.

This can be useful when scanning through code and looking for observable values. Also, if you want a property to store the most recent value from an observable, it can be convenient to simply use the same name with or without the “\$”.

For example: import { [Component](api/core/Component) } from '@angular/core'
import { Observable } from 'rxjs'
@[Component](api/core/Component)({ selector: 'app-stopwatch', templateUrl: './stopwatch.page.html' }) export class StopwatchComponent { stopwatchValue: number
stopwatchValue$: Observable<number>
     start() { this.stopwatchValue$.subscribe(num => this.stopwatchValue = num )
} }

### Naming observables

      import  {  [Component](api/core/Component)  }  from  '@angular/core'
      import  {  Observable  }  from  'rxjs'
      <span class="lit">@[<span class="lit">Component](api/core/Component)({ selector:  'app-stopwatch', templateUrl:  './stopwatch.page.html'  })  export  class  StopwatchComponent  { stopwatchValue: number
     stopwatchValue$:  Observable<number>
     start()  {  this.stopwatchValue$.subscribe(num =>  this.stopwatchValue = num )
      }  }
