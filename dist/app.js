webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {// Copyright (c) 2014 The Chromium Authors. All rights reserved.
	// Use of this source code is governed by a BSD-style license that can be
	// found in the LICENSE file.
	
	/**
	 * Get the current URL.
	 *
	 * @param {function(string)} callback - called when the URL of the current tab
	 *   is found.
	 */
	__webpack_require__(3);
	var app = {
	  init: function () {
	    $('.panda-bg').click(() => {
	      chrome.tts.speak('I am a panda');
	    });
	  }
	};
	
	$(document).ready(() => {
	  app.init();
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);
//# sourceMappingURL=app.js.map