webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	var _index = __webpack_require__(4);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @Author slashhuang
	 * githubcom/slashhuang
	 */
	__webpack_require__(5);
	__webpack_require__(9);
	
	var transpileSub = function transpileSub(_sub) {
	  return _sub.reduce(function (pre, cur, index) {
	    return pre + ('<b data-href=\'' + cur['url'] + '\'>' + cur['name'] + '</b>');
	  }, '');
	};
	var compile = function compile(source) {
	  return source.reduce(function (pre, cur, index) {
	    return pre + ('<li><h1>' + cur['_name'] + '</h1>' + transpileSub(cur['sub']) + '</li>');
	  }, '');
	};
	$('#C_api').html(compile(_index2.default));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	/*
	* @Author slashhunag
	* 主页面
	*/
	var _react = {
	  _name: 'ReactJS',
	  sub: [{
	    name: 'api',
	    url: 'https://facebook.github.io/react/docs/component-api.html'
	  }, {
	    name: 'redux',
	    url: 'https://github.com/reactjs/redux'
	  }, {
	    name: 'react-native',
	    url: 'https://facebook.github.io/react-native/'
	  }] };
	var _vueJs = {
	  _name: 'VueJS',
	  sub: [{
	    name: 'api',
	    url: 'http://vuejs.org/api/'
	  }, {
	    name: 'vue-router',
	    url: 'http://router.vuejs.org/zh-cn/'
	  }]
	};
	var _webpack = {
	  _name: 'webpack',
	  sub: [{
	    name: 'api',
	    url: 'https://webpack.github.io/docs/configuration.html'
	  }, {
	    name: 'plugins',
	    url: 'https://webpack.github.io/docs/list-of-plugins.html'
	  }] };
	var _ng = {
	  _name: 'Angular',
	  sub: [{
	    name: 'ng1',
	    url: 'https://docs.angularjs.org/api'
	  }, {
	    name: 'ng2',
	    url: 'https://angular.io/docs/ts/latest/api/'
	  }]
	};
	var _const = [_react, _vueJs, _webpack, _ng];
	module.exports = _const;

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);
//# sourceMappingURL=app.js.map