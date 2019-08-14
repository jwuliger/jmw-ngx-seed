# Remaining Project Work

## Tools to Use

## SubSink

**RxJS subscription sink for unsubscribing gracefully in a component.**

SubSink is a dead simple class to absorb RxJS subscriptions in an array.

Call `unsubscribe()` to unsubscribe all of them, as you would do
in your component library's `unmount`/`onDestroy` lifecycle event.

## Installation

`npm install subsink --save`

## Example

```javascript
export class SomeComponent implements OnDestroy {
  private subs = new SubSink();

  ...

  this.subs.sink = observable$.subscribe(...); // easy syntax

  this.subs.add(observable$.subscribe(...)); // if you insist

  this.subs.add( // can add multiple subscriptions
    observable$.subscribe(...),
    anotherObservable$.subscribe(...)
  );

  ...

  // Unsubscribe when the component dies
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
```

Source: <https://github.com/wardbell/subsink>

---
