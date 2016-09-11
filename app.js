/**
 * @Author slashhuang
 * githubcom/slashhuang
 */
require('./src/reset.css');
require('./src/index.scss');
import source from './src/index.js';
import encourager from './src/encourager.js';
let transpileSub = (_sub)=>{
            return _sub.reduce((pre,cur,index)=>{
              return pre+`<b data-href='${cur['url']}'>${cur['name']}</b>`
            },'')
          };
let compile=function(source) {
       return source.reduce((pre,cur,index)=>{
          return pre+`<li><h1>${cur['_name']}</h1>${transpileSub(cur['sub'])}</li>`
       },'')
};
let renderImg=function (source) {
	return source.map((ele)=>{
		return `<img class='encourager' alt=${ele.name} src='${ele.src}'/>`
	}).join('')
}
$('#C_api').html(compile(source))
$('#imgContainer').html(renderImg(encourager['g']));
setTimeout(function() {
	$('#imgContainer img').on('click',function() {
		let name=$(this).attr('alt');
		let word = 'hello programmer, I am'+name+', 加油';
		chrome.tts.speak(word);
	})
})