(function(){"use strict";var e={9795:function(e,t,n){var i=n(9242),l=n(3396),c=n(7139);const o={id:"app m-0 p-0"},s={class:"bg-blue-200 h-20 flex font-semibold align-center justify-around"},r=(0,l._)("h4",{class:"bg-blue-300 h-12 mr-16 mt-4"}," Edamam API ",-1),a={class:"flex align-center justify-between"},d={class:"h-0"},p={class:"h-0"};function u(e,t,n,i,u,h){const g=(0,l.up)("router-link"),f=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)("div",o,[(0,l._)("div",s,[r,(0,l._)("div",a,[(0,l.Wm)(g,{to:"/",class:"mt-4 mr-16 p-2 h-12 hover:text-white transition duration-300 rounded-lg flex justify-center align-center"},{default:(0,l.w5)((()=>[(0,l._)("div",d,(0,c.zw)(e.$t("home")),1)])),_:1}),(0,l.Wm)(g,{to:"/posts",class:"mt-4 mr-16 h-12 p-2 hover:text-white transition duration-300 rounded-lg flex justify-center align-center"},{default:(0,l.w5)((()=>[(0,l._)("div",p,(0,c.zw)(e.$t("posts")),1)])),_:1}),(0,l.Wm)(g,{to:"/search",class:"mt-4 mr-16 h-12 p-2 hover:text-white transition duration-300 rounded-lg flex justify-center align-center"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,c.zw)(e.$t("search")),1)])),_:1})])]),(0,l.Wm)(f)])}var h=n(1373);const g=(0,h.Z)();var f=g,m={name:"App",created(){f.on("languageChanged",(e=>{this.$i18n.locale=e}))}},b=n(89);const w=(0,b.Z)(m,[["render",u]]);var v=w,_=n(2483);const y={class:"h-100 mt-52 flex flex-col align-center items-center text-5xl"},x=(0,l._)("br",null,null,-1),k=(0,l._)("br",null,null,-1),R=(0,l._)("br",null,null,-1),$=(0,l._)("br",null,null,-1),z=(0,l._)("svg",{class:"animate-bounce w-6 h-32 text-gray-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 8"},[(0,l._)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"})],-1);function j(e,t,n,i,o,s){const r=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",null,[(0,l._)("div",y,[(0,l._)("h1",null,(0,c.zw)(e.$t("greeting")),1),(0,l._)("h2",null,(0,c.zw)(e.$t("description")),1),(0,l.Uk)(),x,(0,l.Uk)(),k,(0,l._)("h2",null,(0,c.zw)(e.$t("button")),1),R,(0,l.Uk)(),$,z,(0,l._)("button",{class:"border border-solid border-gray-800 bg-orange-300 p-8 hover:bg-orange-500",onClick:t[0]||(t[0]=(...e)=>s.changeLanguage&&s.changeLanguage(...e))},(0,c.zw)(e.$t("buttonText")),1)])]),(0,l.Wm)(r)],64)}var C={methods:{changeLanguage(){const e="en"===this.$i18n.locale?"ru":"en";this.$i18n.locale=e,f.emit("languageChanged",e)}}};const M=(0,b.Z)(C,[["render",j]]);var O=M;const D={class:"m-32"},q={class:"text-2xl font-bold mb-4"},P={key:0,class:"text-center mt-4"},Z={type:"button",class:"",disabled:""},H=(0,l._)("svg",{class:"animate-spin h-5 w-5 mr-3 ...",viewBox:"0 0 24 24"},null,-1),V={class:"flex flex-wrap -mx-4"},S={class:"m-32"},T={class:"text-2xl font-bold mb-4"},W={key:0,class:"text-center mt-4"},Y={type:"button",class:"",disabled:""},B=(0,l._)("svg",{class:"animate-spin h-5 w-5 mr-3 ...",viewBox:"0 0 24 24"},null,-1),E={class:"flex flex-wrap -mx-4"};function U(e,t,n,i,o,s){const r=(0,l.up)("recipe-card"),a=(0,l.up)("recipe-modal");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",D,[(0,l._)("h1",q,(0,c.zw)(e.$t("chickenRecipes")),1),o.loading?((0,l.wg)(),(0,l.iD)("div",P,[(0,l._)("button",Z,[H,(0,l.Uk)(" "+(0,c.zw)(e.$t("loading")),1)])])):(0,l.kq)("",!0),(0,l._)("div",V,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.chickenRecipes,((e,t)=>((0,l.wg)(),(0,l.j4)(r,{key:t,recipe:e,onClick:t=>s.openModal(e)},null,8,["recipe","onClick"])))),128))])]),(0,l._)("div",S,[(0,l._)("h1",T,(0,c.zw)(e.$t("beefRecipes")),1),o.loading?((0,l.wg)(),(0,l.iD)("div",W,[(0,l._)("button",Y,[B,(0,l.Uk)(" "+(0,c.zw)(e.$t("loading")),1)])])):(0,l.kq)("",!0),(0,l._)("div",E,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.beefrecipes,((e,t)=>((0,l.wg)(),(0,l.j4)(r,{key:t,recipe:e,onClick:t=>s.openModal(e)},null,8,["recipe","onClick"])))),128))])]),(0,l.Wm)(a,{"selected-recipe":o.selectedRecipe,"show-modal":o.modalVisible,onCloseModal:s.closeModal},null,8,["selected-recipe","show-modal","onCloseModal"])],64)}const L={class:"w-full md:w-1/2 lg:w-1/4 p-4"},K={class:"bg-white rounded-lg overflow-hidden shadow-md"},I=["src","alt"],A={class:"p-4"},J={class:"text-xl font-semibold mb-2"},N={class:"text-gray-600"};function F(e,t,n,i,o,s){return(0,l.wg)(),(0,l.iD)("div",L,[(0,l._)("div",K,[(0,l._)("img",{src:n.recipe.recipe.image,alt:n.recipe.recipe.label,class:"w-full h-40 object-cover object-center"},null,8,I),(0,l._)("div",A,[(0,l._)("h2",J,(0,c.zw)(n.recipe.recipe.label),1),(0,l._)("p",N,(0,c.zw)(n.recipe.recipe.cuisineType[0])+" cuisine",1)])])])}var G={props:["recipe"]};const Q=(0,b.Z)(G,[["render",F]]);var X=Q;const ee={key:0,class:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"},te={class:"bg-white p-8 rounded-md max-w-md"},ne={class:"text-2xl font-bold mb-4"},ie=["src","alt"],le={class:"text-gray-600"},ce={class:"mt-4"},oe={class:"text-lg font-semibold mb-2"};function se(e,t,n,i,o,s){return n.showModal?((0,l.wg)(),(0,l.iD)("div",ee,[(0,l._)("div",te,[(0,l._)("h2",ne,(0,c.zw)(n.selectedRecipe.recipe.label),1),(0,l._)("img",{src:n.selectedRecipe.recipe.image,alt:n.selectedRecipe.recipe.label,class:"w-full h-40 object-cover object-center mb-4"},null,8,ie),(0,l._)("p",le,(0,c.zw)(n.selectedRecipe.recipe.calories)+" "+(0,c.zw)(e.$t("calories")),1),(0,l._)("div",ce,[(0,l._)("h3",oe,(0,c.zw)(e.$t("ingredients")),1),(0,l._)("ul",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.selectedRecipe.recipe.ingredientLines,((e,t)=>((0,l.wg)(),(0,l.iD)("li",{key:t,class:"mb-2"},(0,c.zw)(e),1)))),128))])]),(0,l._)("button",{onClick:t[0]||(t[0]=(...e)=>s.closeModal&&s.closeModal(...e)),class:"mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"},(0,c.zw)(e.$t("close")),1)])])):(0,l.kq)("",!0)}var re={props:["selectedRecipe","showModal"],methods:{closeModal(){this.$emit("close-modal")}},created(){f.on("languageChanged",(e=>{this.$i18n.locale=e}))}};const ae=(0,b.Z)(re,[["render",se]]);var de=ae,pe=n(1076),ue={components:{"recipe-card":X,"recipe-modal":de},data(){return{chickenRecipes:[],beefrecipes:[],selectedRecipe:null,modalVisible:!1,loading:!0}},mounted(){this.fetchChickenRecipes(),this.fetchBeefRecipes()},created(){f.on("languageChanged",(e=>{this.$i18n.locale=e}))},methods:{async fetchChickenRecipes(){try{const e="c0f59f00",t="a733c1babf786123172c50cd769f573a",n=await pe.Z.get(`https://api.edamam.com/search?q="chicken"&app_id=${e}&app_key=${t}`);this.chickenRecipes=n.data.hits,console.log(this.chickenRecipes)}catch(e){console.error("Error fetching shipped products:",e)}finally{this.loading=!1}},async fetchBeefRecipes(){try{const e="c0f59f00",t="a733c1babf786123172c50cd769f573a",n=await pe.Z.get(`https://api.edamam.com/search?q="beef"&app_id=${e}&app_key=${t}`);this.beefrecipes=n.data.hits}catch(e){console.error("Error fetching shipped products:",e)}finally{this.loading=!1}},openModal(e){this.selectedRecipe=e,this.modalVisible=!0},closeModal(){this.modalVisible=!1,this.selectedRecipe=null}}};const he=(0,b.Z)(ue,[["render",U]]);var ge=he;const fe={id:"app",class:"p-8"},me={class:"text-3xl font-bold mb-4"},be={class:"mb-4"},we={key:0,class:"text-center"},ve={class:"flex flex-wrap -mx-4"},_e={key:1,class:"text-red-500"};function ye(e,t,n,o,s,r){const a=(0,l.up)("recipe-card"),d=(0,l.up)("recipe-modal");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",fe,[(0,l._)("h1",me,(0,c.zw)(e.$t("search")),1),(0,l._)("div",be,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>s.query=e),onInput:t[1]||(t[1]=(...e)=>r.searchRecipes&&r.searchRecipes(...e)),type:"text",class:"p-2 border rounded-md",pplaceholder:"$t('placeholder')"},null,544),[[i.nr,s.query]])]),s.loading?((0,l.wg)(),(0,l.iD)("div",we,(0,c.zw)(e.$t("loading")),1)):(0,l.kq)("",!0),(0,l._)("div",ve,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.recipes,((e,t)=>((0,l.wg)(),(0,l.j4)(a,{key:t,recipe:e,onClick:t=>r.openModal(e)},null,8,["recipe","onClick"])))),128))]),s.error?((0,l.wg)(),(0,l.iD)("div",_e,(0,c.zw)(s.error),1)):(0,l.kq)("",!0)]),(0,l.Wm)(d,{"selected-recipe":s.selectedRecipe,"show-modal":s.modalVisible,onCloseModal:r.closeModal},null,8,["selected-recipe","show-modal","onCloseModal"])],64)}var xe={components:{"recipe-card":X,"recipe-modal":de},data(){return{query:"",recipes:[],loading:!1,error:null,selectedRecipe:null,modalVisible:!1}},created(){f.on("languageChanged",(e=>{this.$i18n.locale=e}))},methods:{async searchRecipes(){this.loading=!0,this.error=null;try{const e="c0f59f00",t="a733c1babf786123172c50cd769f573a",n=await pe.Z.get(`https://api.edamam.com/search?q=${this.query}&app_id=${e}&app_key=${t}`);this.recipes=n.data.hits}catch(e){console.error("Error fetching recipes:",e),this.error="Error fetching recipes. Please try again."}finally{this.loading=!1}},openModal(e){this.selectedRecipe=e,this.modalVisible=!0},closeModal(){this.modalVisible=!1,this.selectedRecipe=null}}};const ke=(0,b.Z)(xe,[["render",ye]]);var Re=ke;const $e=[{path:"/",component:O},{path:"/posts",component:ge},{path:"/search",component:Re}],ze=(0,_.p7)({routes:$e,history:(0,_.PO)()});var je=ze,Ce=n(7853),Me=JSON.parse('{"greeting":"Welcome to the Receipts Blog Page!","description":"Here you will be able to see receipts with photos and just have some fun","button":"You can switch the language here","home":"Home","posts":"Posts","search":"Search","chickenRecipes":"Chicken Recipes","beefRecipes":"Beef Recipes","loading":"Loading...","buttonText":"click","placeholder":"Enter ingredients or recipe name","calories":"calories","ingredients":"Ingredients","close":"close"}'),Oe=JSON.parse('{"greeting":"Добро пожаловать на страницу блога рецептов!","description":"Здесь вы сможете посмотреть рецепты с фото и просто развлечься","button":"Здесь вы можете переключить язык","home":"Дом","posts":"Посты","search":"Поиск","chickenRecipes":"Рецепты с курицей","beefRecipes":"Pецепты с говядиной","loading":"3агрузка...","buttonText":"клик","placeholder":"Введите ингредиенты или блюдо","calories":"калории","ingredients":"Ингредиенты","close":"Закрыть"}');const De=(0,Ce.o)({locale:"en",messages:{en:Me,ru:Oe}}),qe=(0,i.ri)(v);qe.use(je),qe.use(De),qe.mount("#app")}},t={};function n(i){var l=t[i];if(void 0!==l)return l.exports;var c=t[i]={exports:{}};return e[i].call(c.exports,c,c.exports,n),c.exports}n.m=e,function(){var e=[];n.O=function(t,i,l,c){if(!i){var o=1/0;for(d=0;d<e.length;d++){i=e[d][0],l=e[d][1],c=e[d][2];for(var s=!0,r=0;r<i.length;r++)(!1&c||o>=c)&&Object.keys(n.O).every((function(e){return n.O[e](i[r])}))?i.splice(r--,1):(s=!1,c<o&&(o=c));if(s){e.splice(d--,1);var a=l();void 0!==a&&(t=a)}}return t}c=c||0;for(var d=e.length;d>0&&e[d-1][2]>c;d--)e[d]=e[d-1];e[d]=[i,l,c]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var l,c,o=i[0],s=i[1],r=i[2],a=0;if(o.some((function(t){return 0!==e[t]}))){for(l in s)n.o(s,l)&&(n.m[l]=s[l]);if(r)var d=r(n)}for(t&&t(i);a<o.length;a++)c=o[a],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return n.O(d)},i=self["webpackChunktz_app"]=self["webpackChunktz_app"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(9795)}));i=n.O(i)})();
//# sourceMappingURL=app.87b455be.js.map