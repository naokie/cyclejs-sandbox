// a.js

//* @jsx hJSX

import cycle, { Rx } from '@cycle/core';
import { makeDOMDriver, hJSX } from '@cycle/dom';

function main({ DOM }) {
  const count$ = DOM.select('button').events('click').map((_, i) => i + 1).startWith(0);
  return {
    DOM: count$.map((i) => <button>{i}</button>),
  };
}

const drivers = {
  DOM: makeDOMDriver('body'),
};

cycle.run(main, drivers);
