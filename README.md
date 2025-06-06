<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# iterDoWhileEach

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an iterator which, while a test condition is true, invokes a function for each iterated value before returning the iterated value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/iter-do-while-each
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var iterDoWhileEach = require( '@stdlib/iter-do-while-each' );
```

#### iterDoWhileEach( iterator, predicate, fcn\[, thisArg] )

Returns an iterator which invokes a function for each iterated value before returning the iterated value until either a predicate function returns false or the iterator has iterated over all values. The condition is evaluated after executing the provided function (fcn).

```javascript
var iterDoWhileEach = require( '@stdlib/iter-do-while-each' );
var array2iterator = require( '@stdlib/array-to-iterator' );

function predicate( v ) {
    return v < 3;
}

function assert( v ) {
    if ( v !== v ) {
        throw new Error( 'should not be NaN' );
    }
}

var it = iterDoWhileEach( array2iterator( [ 1, 2, 3, 4 ] ), predicate, assert );
// returns {}

var r = it.next().value;
// returns 1

r = it.next().value;
// returns 2

r = it.next().value;
// returns undefined

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a boolean value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

Both the `predicate` function and the function to invoke for each iterated value are provided two arguments:

-   **value**: iterated value.
-   **index**: iteration index (zero-based).

```javascript
var iterDoWhileEach = require( '@stdlib/iter-do-while-each' );
var array2iterator = require( '@stdlib/array-to-iterator' );

function predicate( v ) {
    return v < 3;
}

function assert( v, i ) {
    if ( v !== v ) {
        throw new Error( 'should not be NaN' );
    }
}

var it = iterDoWhileEach( array2iterator( [ 1, 2, 3, 4 ] ), predicate, assert );
// returns <Object>

var r = it.next().value;
// returns 1

r = it.next().value;
// returns 2

r = it.next().value;
// returns undefined
// ...
```

To set the execution context for `fcn`, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
var iterDoWhileEach = require( '@stdlib/iter-do-while-each' );
var array2iterator = require( '@stdlib/array-to-iterator' );

function assert( v ) {
    this.count += 1;
    if ( v !== v ) {
        throw new Error( 'should not be NaN' );
    }
}

function predicate( v ) {
    return v < 3;
}

var ctx = {
    'count': 0
};

var iterator = array2iterator( [ 1, 2, 3 ] );
var it = iterDoWhileEach( iterator, predicate, assert, ctx );
// returns <Object>

var r = it.next().value;
// returns 1

r = it.next().value;
// returns 2

r = it.next().value;
// returns undefined

var count = ctx.count;
// returns 3
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-iter-randu' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var iterDoWhileEach = require( '@stdlib/iter-do-while-each' );

function assert( v ) {
    if ( isnan( v ) ) {
        throw new Error( 'should not be NaN' );
    }
}

function predicate( v ) {
    return v <= 0.75;
}

// Create a seeded iterator for generating pseudorandom numbers:
var rand = randu({
    'seed': 1234,
    'iter': 10
});

// Create an iterator which validates generated numbers:
var it = iterDoWhileEach( rand, predicate, assert );

// Perform manual iteration...
var r;
while ( true ) {
    r = it.next();
    if ( r.done ) {
        break;
    }
    console.log( r.value );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/iter-do-until-each`][@stdlib/iter/do-until-each]</span><span class="delimiter">: </span><span class="description">create an iterator which, while a test condition is false, invokes a function for each iterated value before returning the iterated value.</span>
-   <span class="package-name">[`@stdlib/iter-until-each`][@stdlib/iter/until-each]</span><span class="delimiter">: </span><span class="description">create an iterator which, while a test condition is false, invokes a function for each iterated value before returning the iterated value.</span>
-   <span class="package-name">[`@stdlib/iter-while-each`][@stdlib/iter/while-each]</span><span class="delimiter">: </span><span class="description">create an iterator which, while a test condition is true, invokes a function for each iterated value before returning the iterated value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/iter-do-while-each.svg
[npm-url]: https://npmjs.org/package/@stdlib/iter-do-while-each

[test-image]: https://github.com/stdlib-js/iter-do-while-each/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/iter-do-while-each/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/iter-do-while-each/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/iter-do-while-each?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/iter-do-while-each.svg
[dependencies-url]: https://david-dm.org/stdlib-js/iter-do-while-each/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/iter-do-while-each/tree/deno
[deno-readme]: https://github.com/stdlib-js/iter-do-while-each/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/iter-do-while-each/tree/umd
[umd-readme]: https://github.com/stdlib-js/iter-do-while-each/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/iter-do-while-each/tree/esm
[esm-readme]: https://github.com/stdlib-js/iter-do-while-each/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/iter-do-while-each/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/iter-do-while-each/main/LICENSE

<!-- <related-links> -->

[@stdlib/iter/do-until-each]: https://github.com/stdlib-js/iter-do-until-each

[@stdlib/iter/until-each]: https://github.com/stdlib-js/iter-until-each

[@stdlib/iter/while-each]: https://github.com/stdlib-js/iter-while-each

<!-- </related-links> -->

</section>

<!-- /.links -->
