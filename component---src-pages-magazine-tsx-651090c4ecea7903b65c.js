(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3gya":function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("9VmF");var a=n("q1tI"),r=n.n(a),o=n("Wbzz");t.a=function(e){var t=e.to,n=e.children,i=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["to","children"]),c=Object(a.useMemo)((function(){return["https://","http://","mailto:"].some((function(e){return t.startsWith(e)}))}),[t]);return r.a.createElement(a.Fragment,null,c?r.a.createElement("a",Object.assign({href:t,target:"_blank",rel:"noopener noreferrer"},i),n):r.a.createElement(o.Link,Object.assign({to:t},i),n))}},"5Xb1":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("k0/U"),i=n("R/WZ"),c=n("ZBNC"),l=n("Ji2X"),s=n("tRbT"),u=n("Z3vd"),m=n("A2+M"),d=Object(i.a)((function(e){return Object(c.a)({root:{"& > h2, & > h3, & > h4, & > h5":{marginTop:"1.5rem",marginBottom:"1rem"},"& h2":{fontSize:"2rem",fontWeight:"bold"},"& p":{fontSize:"1rem",lineHeight:1.8},"& code.language-text":{color:"#ff3860",backgroundColor:"#f9f1f3",padding:"1px 4px",borderRadius:"4px",fontSize:"0.85rem","&::before, &::after":{content:'""'}},"& blockquote":{position:"relative",padding:16,fontStyle:"italic",backgroundColor:"#eeeeee","&::before":{position:"absolute",top:0,left:0,width:5,height:"100%",content:'""',backgroundColor:"#dddddd"}},"& span.gatsby-resp-image-wrapper":{borderRadius:"8px",overflow:"hidden",margin:"2.5rem 0 1rem","& + small":{display:"block",color:e.palette.text.secondary,marginBottom:"2.5rem"}},"& p > a":{color:e.palette.primary.main,textDecoration:"none","&:active":{color:e.palette.primary.main},"&:hover":{textDecoration:"underline"}}}})})),p=Object(a.memo)((function(e){var t=e.contents,n=d();return r.a.createElement("div",{className:n.root},r.a.createElement(m.MDXRenderer,null,t))})),f=n("wEEd"),b=n("vT/v");n.d(t,"pageQuery",(function(){return g}));var g="3061409711",h=Object(i.a)((function(e){return Object(c.a)({root:{maxWidth:800,margin:"3rem auto"},titleWrapper:{borderBottom:"1px solid "+e.palette.action.hover,marginBottom:"2rem",paddingBottom:"2rem"},title:{fontWeight:700,color:e.palette.text.primary,marginBottom:"1rem"},date:{fontSize:"1rem",margin:0,fontWeight:300},footer:{marginTop:"5rem"},leftIcon:{marginRight:"1rem"},rightIcon:{marginLeft:"1rem"}})}));t.default=function(e){var t,n,a,i,c,m,d,g=e.data,v=e.pageContext,y=h(),O=Object(f.c)({from:{opacity:0,transform:"translateY(-30px)"},to:{opacity:1,transform:"translateY(0)"}}),x=Object(f.c)({from:{opacity:0,transform:"translateY(30px)"},to:{opacity:1,transform:"translateX(0)"},config:{duration:500},delay:400}),j=g.mdx;if(!j)return r.a.createElement("div",null,"Render Error");var E=j.frontmatter,w=j.body,k=j.excerpt,N=v.prev,R=v.next;return r.a.createElement(o.a,{pageName:E.title},r.a.createElement(b.a,{title:E.title,description:k,image:null===(t=E.thumbnail)||void 0===t?void 0:null===(n=t.childImageSharp)||void 0===n?void 0:n.fluid.src}),r.a.createElement(l.a,{"data-type":"markdown",className:y.root},r.a.createElement(s.a,{container:!0},r.a.createElement(s.a,{xs:12,sm:12,md:12,lg:12,item:!0},r.a.createElement(f.a.div,{style:O,className:y.titleWrapper},r.a.createElement("h1",{className:y.title},E.title+(E.draft?" [집필중]":"")),r.a.createElement("p",{className:y.date},E.date)),r.a.createElement(f.a.div,{style:x},r.a.createElement(p,{contents:w})))),r.a.createElement(s.a,{container:!0,className:y.footer,spacing:3,justify:"space-between"},r.a.createElement(s.a,{item:!0},R&&r.a.createElement(u.a,{fullWidth:!0,href:R.fields.path,variant:"outlined"},r.a.createElement("i",{className:"fas fa-angle-left "+y.leftIcon}),null!==(a=null===(i=R.frontmatter)||void 0===i?void 0:i.title)&&void 0!==a?a:"다음 매거진")),r.a.createElement(s.a,{item:!0},N&&r.a.createElement(u.a,{fullWidth:!0,href:null===(c=N.fields)||void 0===c?void 0:c.path,variant:"outlined"},null!==(m=null===(d=N.frontmatter)||void 0===d?void 0:d.title)&&void 0!==m?m:"이전 매거진",r.a.createElement("i",{className:"fas fa-angle-right "+y.rightIcon}))))))}},"A2+M":function(e,t,n){var a=n("X8hv");e.exports={MDXRenderer:a}},I5cv:function(e,t,n){var a=n("XKFU"),r=n("Kuth"),o=n("2OiF"),i=n("y3w9"),c=n("0/R4"),l=n("eeVq"),s=n("8MEG"),u=(n("dyZX").Reflect||{}).construct,m=l((function(){function e(){}return!(u((function(){}),[],e)instanceof e)})),d=!l((function(){u((function(){}))}));a(a.S+a.F*(m||d),"Reflect",{construct:function(e,t){o(e),i(t);var n=arguments.length<3?e:o(arguments[2]);if(d&&!m)return u(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var a=[null];return a.push.apply(a,t),new(s.apply(e,a))}var l=n.prototype,p=r(c(l)?l:Object.prototype),f=Function.apply.call(e,p,t);return c(f)?f:p}})},Ji2X:function(e,t,n){"use strict";n("0mN4"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("DNiP");var a=n("wx14"),r=n("Ff2n"),o=n("rePB"),i=n("q1tI"),c=(n("17x9"),n("iuhU")),l=n("H2TA"),s=n("NqtD"),u=i.forwardRef((function(e,t){var n=e.classes,o=e.className,l=e.component,u=void 0===l?"div":l,m=e.disableGutters,d=void 0!==m&&m,p=e.fixed,f=void 0!==p&&p,b=e.maxWidth,g=void 0===b?"lg":b,h=Object(r.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return i.createElement(u,Object(a.a)({className:Object(c.a)(n.root,o,f&&n.fixed,d&&n.disableGutters,!1!==g&&n["maxWidth".concat(Object(s.a)(String(g)))]),ref:t},h))}));t.a=Object(l.a)((function(e){return{root:Object(o.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,n){var a=e.breakpoints.values[n];return 0!==a&&(t[e.breakpoints.up(n)]={maxWidth:a}),t}),{}),maxWidthXs:Object(o.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(o.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(o.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(o.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(o.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(u)},X8hv:function(e,t,n){function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function r(e,t,n){return(r=a()?Reflect.construct:function(e,t,n){var a=[null];a.push.apply(a,t);var r=new(Function.bind.apply(e,a));return n&&o(r,n.prototype),r}).apply(null,arguments)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("jm62"),n("yt8O"),n("RW0V"),n("XfO3"),n("HEwt"),n("rE2o"),n("ioFf"),n("rGqo"),n("/SS/"),n("a1Th"),n("Btvt"),n("I5cv"),n("I5cv"),n("/SS/"),n("XfO3"),n("HEwt"),n("a1Th"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var u=n("q1tI"),m=n("7ljp"),d=m.useMDXComponents,p=m.mdx,f=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,a=e.children,o=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["scope","components","children"]),c=d(n),s=f(t),m=u.useMemo((function(){if(!a)return null;var e=l({React:u,mdx:p},s),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(i(t),[""+a])).apply(void 0,[{}].concat(i(n)))}),[a,t]);return u.createElement(m,l({components:c},o))}},bUFH:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("jxKE");function r(e,t){void 0===e&&(e="light"),void 0===t&&(t=!1);var n=t?"symbol":"logo",r="dark"===e?"light":"color";return a.b+"/logo/"+n+"-"+r+".svg"}},"k0/U":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("R/WZ"),i=n("ZBNC"),c=n("Ji2X"),l=n("wEEd"),s=(n("f3/d"),n("tUrg"),n("Wbzz")),u=n("tr08"),m=n("lopY"),d=n("tRbT"),p=[{name:"BLOGS",link:"/blogs"},{name:"MENTORING",link:"/mentoring/intro"},{name:"CONTACT",link:"mailto:lubycon@gmail.com",external:!0}],f=n("3gya"),b=n("bUFH"),g=Object(o.a)((function(e){var t,n,a;return Object(i.a)({root:{padding:"1rem"},menus:{display:"flex",padding:0,margin:0,alignItems:"center",height:"100%"},menuItems:(t={fontSize:"1rem",listStyle:"none",marginRight:e.spacing(2)},t[e.breakpoints.down("md")]={fontSize:"0.8rem",marginRight:e.spacing(1)},t),logo:(n={width:130},n[e.breakpoints.down("md")]={width:40},n),link:(a={color:e.palette.text.secondary,textDecoration:"none",transition:"color 0.2s ease-in","&:hover":{color:e.palette.primary.main}},a[e.breakpoints.down("md")]={fontSize:"0.7rem"},a)})})),h=function(){var e=g(),t=Object(u.a)(),n=Object(m.a)(t.breakpoints.down("md")),a=Object(b.a)(t.palette.type,n);return r.a.createElement("header",{className:e.root},r.a.createElement(d.a,{justify:"space-between",alignItems:"center",container:!0},r.a.createElement(d.a,{xs:"auto",item:!0},r.a.createElement(s.Link,{to:"/"},r.a.createElement("img",{className:e.logo,src:a,alt:"루비콘 로고"}))),r.a.createElement(d.a,{xs:"auto",item:!0},r.a.createElement("ul",{className:e.menus},p.map((function(t,n){return r.a.createElement("li",{key:n,className:e.menuItems},r.a.createElement(f.a,{to:t.link,className:e.link},t.name))}))))))},v=Object(o.a)((function(e){return Object(i.a)({root:{backgroundColor:e.palette.background.default,padding:"1rem",textAlign:"right",fontSize:"0.8rem"}})})),y=function(){var e=v();return r.a.createElement("footer",{className:e.root},"© 2019, Built with Lubycon")},O=n("vT/v"),x=Object(o.a)((function(e){return Object(i.a)({root:{backgroundColor:e.palette.background.default},container:{marginTop:"3rem",marginBottom:"3rem"},title:{color:e.palette.text.primary},description:{color:e.palette.text.secondary,whiteSpace:"pre-line"},fab:{position:"fixed",bottom:20,right:20,zIndex:2}})}));t.a=function(e){var t=e.children,n=e.pageName,a=e.showTitle,o=void 0!==a&&a,i=e.description,s=e.hideFooter,u=void 0!==s&&s,m=x(),d=Object(l.c)({from:{opacity:0,transform:"translateX(-30px)"},to:{opacity:1,transform:"translateX(0)"}}),p=Object(l.c)({from:{opacity:0,transform:"translateX(30px)"},to:{opacity:1,transform:"translateX(0)"}});return r.a.createElement("div",{"data-layout":"page"},r.a.createElement(O.a,{title:n}),r.a.createElement(h,null),r.a.createElement("div",{"data-page":n,className:m.root},o?r.a.createElement(c.a,{className:m.container},r.a.createElement(l.a.h1,{style:d,className:m.title},n),i&&r.a.createElement(l.a.p,{style:p,className:m.description},i)):null,r.a.createElement("main",null,t)),!u&&r.a.createElement(y,null))}},lopY:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("pIFo");var a=n("wx14"),r=n("q1tI"),o=n("aXM8"),i=n("A+CX");function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(o.a)(),c=Object(i.a)({theme:n,name:"MuiUseMediaQuery",props:{}});var l="function"==typeof e?e(n):e;l=l.replace(/^@media( ?)/m,"");var s="undefined"!=typeof window&&void 0!==window.matchMedia,u=Object(a.a)(Object(a.a)({},c),t),m=u.defaultMatches,d=void 0!==m&&m,p=u.matchMedia,f=void 0===p?s?window.matchMedia:null:p,b=u.noSsr,g=void 0!==b&&b,h=u.ssrMatchMedia,v=void 0===h?null:h,y=r.useState((function(){return g&&s?f(l).matches:v?v(l).matches:d})),O=y[0],x=y[1];return r.useEffect((function(){var e=!0;if(s){var t=f(l),n=function(){e&&x(t.matches)};return n(),t.addListener(n),function(){e=!1,t.removeListener(n)}}}),[l,f,s]),O}},tr08:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("aXM8"),r=(n("q1tI"),n("cNwE"));function o(){return Object(a.a)()||r.a}}}]);
//# sourceMappingURL=component---src-pages-magazine-tsx-651090c4ecea7903b65c.js.map