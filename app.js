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
let renderImg=function (source,gender) {
	return source.map((ele)=>{
		return `<img class='encourager' alt=${ele.name} data-gender=${gender} src='${ele.src}'/>`
	}).join('')
}
$('#C_api').html(compile(source))
$('#imgContainer').html(renderImg(encourager['g'],'female')+renderImg(encourager['m'],'male'));
$('#author').on('click',function(e) {
	$('#author img').toggle();
});
setTimeout(()=>{
	$('#C_api b').on('click',function (ele) {
		chrome.tabs.create({url: $(this).data('href')});
		chrome.tts.speak('u are great, I love you',{rate:0.5,pitch:1.2})
	})
})
setTimeout(function() {
	$('#imgContainer img').on('click',function() {
		let m_option={
			'lang': 'en-GB',
			'rate': 0.7,
	 	    'pitch': 2.0,
		};
		var g_options = {
		  'rate': 0.8,
		  'pitch': 1.4
		}
		let name=$(this).attr('alt');
		let gender=$(this).data('gender');
		let word = 'hello , smart , I am '+name+', work hard and ,  be happy';
		switch(gender){
			case 'male':
				chrome.tts.speak('hello , smart , go on coding , marry bai fu mei',m_option);
				break;
			default :
				chrome.tts.speak(word,g_options);	
		}		
	})
})