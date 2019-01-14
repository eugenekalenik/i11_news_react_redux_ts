(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(t,e,n){t.exports=n(35)},33:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(17),c=n.n(o),i=n(1),u=n(4),l=n(5),s=n(7),p=n(6),d=n(8),h=function(t){function e(){return Object(u.a)(this,e),Object(s.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return this.props.data?this.props.data.length?r.a.createElement("div",{className:"news-list"},this.props.data.map(function(t,e){return r.a.createElement("div",{key:e,className:"news-item",style:{backgroundImage:"url(".concat(t.urlToImage,")")}},r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"date"},new Date(t.publishedAt).toDateString()),r.a.createElement("div",{className:"title"},t.title),r.a.createElement("div",{className:"author"},r.a.createElement("span",null,"Author:")," ",t.author),r.a.createElement("a",{className:"source",href:t.url},t.source.name)))})):r.a.createElement("div",{className:"no-news"},r.a.createElement("h1",null,"There are no items.")):r.a.createElement("div",{className:"loading"},r.a.createElement("h1",null,"Loading..."))}}]),e}(r.a.Component),f=Object(i.b)(function(t){return{activeTab:t.activeTab,data:t.data,sortBy:t.sortBy,sorting:t.sorting}},{})(h),m=n(9),b=n.n(m),y=n(11),v=function(t){return function(e,n){return(e[t]||"z").localeCompare(n[t]||"z")}},S=function(){window.scrollTo({top:0,behavior:"smooth"})},E=["People","Auto","Technologies","Realty"],g=function(){var t=Object(y.a)(b.a.mark(function t(e){var n,a;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat("https://newsapi.org/v2/everything?q=").concat(e,"&apiKey=").concat("700e4adb5d1248b191265b4ceb3fc20e"),t.next=3,fetch(n).then(function(t){return t.json()}).then(function(t){return t.articles});case 3:return a=t.sent,t.abrupt("return",a);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),A=function(t){return function(e){e({type:"SET_ACTIVE_TAB",payload:t})}},O=function(t){return function(){var e=Object(y.a)(b.a.mark(function e(n){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:return a=e.sent,n({type:"GET_NEWS",payload:a.sort(v("title"))}),e.abrupt("return",a);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},T=Object(i.b)(function(t){return{}},{ssf:function(){return function(t){t({type:"SHOW_SEARCH_FORM",payload:!0})}}})(function(t){var e=t.ssf;return r.a.createElement("button",{className:"search-button",onClick:function(){e()}},"Search")}),j=n(19),N=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).debouncedLoad=Object(j.debounce)(function(t){n.doSearch(t)},800),n.state={searchString:"",timeout:null},n.handleSubmit=function(t){t.preventDefault(),n.props.hideSearchForm()},n.doSearch=function(t){n.props.setActiveTab(t),n.props.getNews(t),S()},n.handleChange=function(t){n.debouncedLoad(t.currentTarget.value)},n.handleSortAZ=function(t){t.preventDefault(),n.props.setSortingAZ(n.props.sortBy),S()},n.handleSortZA=function(t){t.preventDefault(),n.props.setSortingZA(n.props.sortBy),S()},n.handleSortByTitle=function(t){t.preventDefault(),n.props.setSortingBy("title"),S()},n.handleSortByAuthor=function(t){t.preventDefault(),n.props.setSortingBy("author"),S()},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props,e=t.isSearchForm,n=t.sortBy,a=t.sorting;return!0===e?r.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("input",{type:"text",id:"sf",placeholder:"Search",onChange:this.handleChange}),r.a.createElement("span",null,"Sort by"),r.a.createElement("button",{onClick:this.handleSortByTitle,className:"title"===n?"active":""},"Title"),r.a.createElement("button",{onClick:this.handleSortByAuthor,className:"author"===n?"active":""},"Author"),"AZ"===a&&r.a.createElement("button",{onClick:this.handleSortZA},"Z-A"),"ZA"===a&&r.a.createElement("button",{onClick:this.handleSortAZ},"A-Z"),r.a.createElement("button",{type:"submit"},"Close"))):null}}]),e}(r.a.Component),_=Object(i.b)(function(t){return{data:t.data,isSearchForm:t.isSearchForm,sortBy:t.sortBy,sorting:t.sorting}},{getNews:O,hideSearchForm:function(){return function(t){t({type:"HIDE_SEARCH_FORM",payload:!1})}},setActiveTab:A,setSortingAZ:function(t){return function(e,n){e({type:"SORT_AZ",payload:"AZ"}),e({type:"SORT_NEWS",payload:n().data.sort(v(t))})}},setSortingBy:function(t){return function(e,n){e({type:"SORT_AZ",payload:"AZ"}),e({type:"SORT_BY",payload:t}),e({type:"SORT_NEWS",payload:n().data.sort(v(t))})}},setSortingZA:function(t){return function(t,e){t({type:"SORT_ZA",payload:"ZA"}),t({type:"SORT_NEWS",payload:e().data.reverse()})}}})(N),w=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(r)))).isTabActive=function(t){return n.props.activeTab===t?"active":""},n.handleClick=function(t){return function(){n.props.setActiveTab(t),n.props.getNews(t),S()}},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.props.setActiveTab(this.props.activeTab),this.props.getNews(this.props.activeTab)}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"tabs"},E.map(function(e){return r.a.createElement("div",{key:e,className:"tab ".concat(t.isTabActive(e)),onClick:t.handleClick(e)},e.toUpperCase())}))}}]),e}(r.a.Component),C=Object(i.b)(function(t){return{activeTab:t.activeTab,data:t.data}},{getNews:O,setActiveTab:A})(w),Z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement(f,null),r.a.createElement(_,null),r.a.createElement(T,null))},B=(n(33),n(2)),R=n(20),k=n(21),F=Object(B.c)({activeTab:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E[0],e=arguments.length>1?arguments[1]:void 0;return"SET_ACTIVE_TAB"===e.type?e.payload:t},data:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;return"GET_NEWS"===e.type?e.payload||[]:"SORT_NEWS"===e.type?e.payload:t},isSearchForm:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;return"SHOW_SEARCH_FORM"===e.type||"HIDE_SEARCH_FORM"===e.type?e.payload:t},sortBy:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"title",e=arguments.length>1?arguments[1]:void 0;return"SORT_BY"===e.type?e.payload:t},sorting:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"AZ",e=arguments.length>1?arguments[1]:void 0;return"SORT_AZ"===e.type?e.payload:"SORT_ZA"===e.type?e.payload:t}}),D=Object(R.createLogger)(),H=Object(B.d)(F,Object(B.a)(k.a,D));c.a.render(r.a.createElement(i.a,{store:H},r.a.createElement(Z,null)),document.getElementById("root"))}},[[22,2,1]]]);
//# sourceMappingURL=main.f0365d8e.chunk.js.map