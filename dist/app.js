webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	var _index = __webpack_require__(4);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _encourager = __webpack_require__(12);
	
	var _encourager2 = _interopRequireDefault(_encourager);
	
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
	var renderImg = function renderImg(source, gender) {
		return source.map(function (ele) {
			return '<img class=\'encourager\' alt=' + ele.name + ' data-gender=' + gender + ' src=\'' + ele.src + '\'/>';
		}).join('');
	};
	$('#C_api').html(compile(_index2.default));
	$('#imgContainer').html(renderImg(_encourager2.default['g'], 'female') + renderImg(_encourager2.default['m'], 'male'));
	setTimeout(function () {
		$('#C_api b').on('click', function (ele) {
			chrome.tabs.create({ url: $(this).data('href') });
		});
	});
	setTimeout(function () {
		$('#imgContainer img').on('click', function () {
			var m_option = {
				'lang': 'en-GB',
				'rate': 0.7,
				'pitch': 2.0
			};
			var g_options = {
				'rate': 0.8,
				'pitch': 1.4
			};
			var name = $(this).attr('alt');
			var gender = $(this).data('gender');
			var word = 'hello , smart , I am ' + name + ', work hard and ,  be happy';
			switch (gender) {
				case 'male':
					chrome.tts.speak('hello , smart , go on coding , marry bai fu mei', m_option);
					break;
				default:
					chrome.tts.speak(word, g_options);
			}
		});
	});
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
	var _github = {
	  _name: 'nodeJS',
	  sub: [{
	    name: 'api',
	    url: 'https://github.com/slashhuang/node/tree/master/doc/api'
	  }]
	};
	var _const = [_react, _vueJs, _webpack, _ng, _github];
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

/***/ },
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	/*
	* @Author slashhunag
	* 鼓励师
	*/
	var g_e = [{
	  name: '苍进空',
	  y: 'cang jing kong',
	  src: 'encourager/cjk.jpg'
	}, {
	  name: '奥黛丽赫本',
	  src: 'encourager/hebe.jpg'
	}, {
	  name: '林志玲',
	  src: 'encourager/lzl.jpg'
	}];
	var m_e = [{
	  name: '吴彦祖',
	  src: 'encourager/wlz.jpg'
	}, {
	  name: '汤姆科鲁兹',
	  src: 'encourager/tom.jpg'
	}, {
	  name: '冯德伦',
	  src: 'encourager/fdl.jpg'
	}];
	var encourager = {
	  g: g_e,
	  m: m_e
	};
	module.exports = encourager;

/***/ }
]);
//# sourceMappingURL=app.js.map