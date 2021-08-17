<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# sapx

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Add a constant to each element in a single-precision floating-point strided array.

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-sapx
```

</section>

<section class="usage">

## Usage

```javascript
var sapx = require( '@stdlib/blas-ext-base-sapx' );
```

#### sapx( N, alpha, x, stride )

Adds a constant `alpha` to each element in a single-precision floating-point strided array `x`.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

sapx( x.length, 5.0, x, 1 );
// x => <Float32Array>[ 3.0, 6.0, 8.0, 0.0, 9.0, 5.0, 4.0, 2.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: scalar constant.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **stride**: index increment.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to add a constant to every other element

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var floor = require( '@stdlib/math-base-special-floor' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
var N = floor( x.length / 2 );

sapx( N, 5.0, x, 2 );
// x => <Float32Array>[ 3.0, 1.0, 8.0, -5.0, 9.0, 0.0, 4.0, -3.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var floor = require( '@stdlib/math-base-special-floor' );

// Initial array...
var x0 = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var N = floor( x0.length/2 );

// Add a constant to every other element...
sapx( N, 5.0, x1, 2 );
// x0 => <Float32Array>[ 1.0, 3.0, 3.0, 1.0, 5.0, -1.0 ]
```

#### sapx.ndarray( N, alpha, x, stride, offset )

Adds a constant `alpha` to each element in a single-precision floating-point strided array `x` using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

sapx.ndarray( x.length, 5.0, x, 1, 0 );
// x => <Float32Array>[ 3.0, 6.0, 8.0, 0.0, 9.0, 5.0, 4.0, 2.0 ]
```

The function has the following additional parameters:

-   **offset**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to access only the last three elements of `x`

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

sapx.ndarray( 3, 5.0, x, 1, x.length-3 );
// x => <Float32Array>[ 1.0, -2.0, 3.0, 1.0, 10.0, -1.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `x` unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var round = require( '@stdlib/math-base-special-round' );
var randu = require( '@stdlib/random-base-randu' );
var Float32Array = require( '@stdlib/array-float32' );
var sapx = require( '@stdlib/blas-ext-base-sapx' );

var rand;
var sign;
var x;
var i;

x = new Float32Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    rand = round( randu()*100.0 );
    sign = randu();
    if ( sign < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    x[ i ] = sign * rand;
}
console.log( x );

sapx( x.length, 5.0, x, 1 );
console.log( x );
```

</section>

<!-- /.examples -->


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

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-sapx.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-sapx

[test-image]: https://github.com/stdlib-js/blas-ext-base-sapx/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/blas-ext-base-sapx/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-sapx/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-sapx?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-sapx.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-sapx/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-sapx/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/stdlib

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
