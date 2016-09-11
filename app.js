/**
 * @Author slashhuang
 * githubcom/slashhuang
 */
require('./src/reset.css');
require('./src/index.scss');
import source from './src/index.js';
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
$('#C_api').html(compile(source))