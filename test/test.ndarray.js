/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var Float32Array = require( '@stdlib/array-float32' );
var sapx = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sapx, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( sapx.length, 5, 'has expected arity' );
	t.end();
});

tape( 'the function adds a constant to each strided array element', function test( t ) {
	var expected;
	var x;

	x = new Float32Array([
		4.0,
		2.0,
		-3.0,
		5.0,
		-1.0,
		2.0,
		-5.0,
		6.0
	]);
	expected = new Float32Array([
		9.0,
		7.0,
		2.0,
		10.0,
		4.0,
		7.0,
		0.0,
		11.0
	]);

	sapx( x.length, 5.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0 ] );
	expected = new Float32Array( [ 6.0, 7.0 ] );

	sapx( x.length, 5.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var x;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	out = sapx( x.length, 3.0, x, 1, 0 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', function test( t ) {
	var expected;
	var x;

	x = new Float32Array( [ 3.0, -4.0, 1.0 ] );
	expected = new Float32Array( [ 3.0, -4.0, 1.0 ] );

	sapx( 0, 10.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	sapx( -4, 10.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if `alpha` equals `0`, the function returns the input array unchanged', function test( t ) {
	var expected;
	var x;

	x = new Float32Array( [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ] );
	expected = new Float32Array( [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ] );

	sapx( x.length, 0.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var expected;
	var x;

	x = new Float32Array([
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	]);
	expected = new Float32Array([
		7.0,  // 0
		-3.0,
		0.0,  // 1
		7.0,
		11.0  // 2
	]);

	sapx( 3, 5.0, x, 2, 0 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride', function test( t ) {
	var expected;
	var x;

	x = new Float32Array([
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	]);
	expected = new Float32Array([
		7.0,  // 2
		-3.0,
		0.0,  // 1
		7.0,
		11.0  // 0
	]);

	sapx( 3, 5.0, x, -2, x.length-1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an offset parameter', function test( t ) {
	var expected;
	var x;

	x = new Float32Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	expected = new Float32Array([
		1.0,
		7.0, // 0
		3.0,
		9.0, // 1
		5.0,
		11.0 // 2
	]);

	sapx( 3, 5.0, x, 2, 1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'if `stride` is equal to `1`, the function efficiently adds a constant to each element in a strided array', function test( t ) {
	var expected;
	var alpha;
	var x;
	var i;

	alpha = 3.0;
	x = new Float32Array( 100 );
	expected = new Float32Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		expected[ i ] = x[ i ] + alpha;
	}
	sapx( x.length, alpha, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float32Array( 240 );
	expected = new Float32Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		expected[ i ] = x[ i ] + alpha;
	}
	sapx( x.length, alpha, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});
