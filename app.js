// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
require('./src/index.scss');
var app={
  init:function() {
    $('.panda-bg').click(()=>{
      chrome.tts.speak('I am a panda');
    })
  }
}

$(document).ready(()=>{
	 app.init();
});