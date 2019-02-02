/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}

// fetch() polyfill for making API calls.
require('whatwg-fetch');

// symbols polyfill for compiling for ie11
require('core-js/modules/es6.symbol');

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign');

Object.entries = require('object.entries');

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
if (process.env.NODE_ENV === 'test') {
  require('raf').polyfill(global);
}

// Polyfill required to test react-slick
// https://github.com/akiran/react-slick#test-setup
if (typeof window !== 'undefined') {
    window.matchMedia = window.matchMedia || function () {
        return {
            matches: false,
            addListener: function () {},
            removeListener: function () {},
        };
    };
}

require('core-js/fn/array/find');
require('core-js/fn/array/includes');
