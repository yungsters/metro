"use strict";(self.webpackChunkmetro_website=self.webpackChunkmetro_website||[]).push([[514,75],{38704:(e,t,a)=>{a.r(t),a.d(t,{default:()=>te});var n=a(67294),l=a(3905),r=a(46291),o=a(33516),i=a(86010),c=a(941),s=a(93783),d=a(77898),m=a(55537),u=a(87462);const p=function(e){return n.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))};var b=a(24973),h=a(63366),f=a(36742),E=a(13919),v=a(18617);const C="menuLinkText_1J2g";var g=["items"],_=["item"],N=["item","onItemClick","activePath"],k=["item","onItemClick","activePath"],S=function e(t,a){return"link"===t.type?(0,c.isSamePath)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},T=(0,n.memo)((function(e){var t=e.items,a=(0,h.Z)(e,g);return n.createElement(n.Fragment,null,t.map((function(e,t){return n.createElement(I,(0,u.Z)({key:t,item:e},a))})))}));function I(e){var t=e.item,a=(0,h.Z)(e,_);return"category"===t.type?0===t.items.length?null:n.createElement(Z,(0,u.Z)({item:t},a)):n.createElement(M,(0,u.Z)({item:t},a))}function Z(e){var t,a=e.item,l=e.onItemClick,r=e.activePath,o=(0,h.Z)(e,N),s=a.items,d=a.label,m=a.collapsible,p=S(a,r),b=(0,c.useCollapsible)({initialState:function(){return!!m&&(!p&&a.collapsed)}}),f=b.collapsed,E=b.setCollapsed,v=b.toggleCollapsed;return function(e){var t=e.isActive,a=e.collapsed,l=e.setCollapsed,r=(0,c.usePrevious)(t);(0,n.useEffect)((function(){t&&!r&&a&&l(!1)}),[t,r,a])}({isActive:p,collapsed:f,setCollapsed:E}),n.createElement("li",{className:(0,i.default)(c.ThemeClassNames.docs.docSidebarItemCategory,"menu__list-item",{"menu__list-item--collapsed":f})},n.createElement("a",(0,u.Z)({className:(0,i.default)("menu__link",(t={"menu__link--sublist":m,"menu__link--active":m&&p},t[C]=!m,t)),onClick:m?function(e){e.preventDefault(),v()}:void 0,href:m?"#":void 0},o),d),n.createElement(c.Collapsible,{lazy:!0,as:"ul",className:"menu__list",collapsed:f},n.createElement(T,{items:s,tabIndex:f?-1:0,onItemClick:l,activePath:r})))}function M(e){var t=e.item,a=e.onItemClick,l=e.activePath,r=(0,h.Z)(e,k),o=t.href,s=t.label,d=S(t,l);return n.createElement("li",{className:(0,i.default)(c.ThemeClassNames.docs.docSidebarItemLink,"menu__list-item"),key:s},n.createElement(f.default,(0,u.Z)({className:(0,i.default)("menu__link",{"menu__link--active":d}),"aria-current":d?"page":void 0,to:o},(0,E.Z)(o)&&{onClick:a},r),(0,E.Z)(o)?s:n.createElement("span",null,s,n.createElement(v.Z,null))))}const w="sidebar_15mo",y="sidebarWithHideableNavbar_267A",P="sidebarHidden_2kNb",A="sidebarLogo_3h0W",B="menu_Bmed",x="menuWithAnnouncementBar_2WvA",F="collapseSidebarButton_1CGd",H="collapseSidebarButtonIcon_3E-R";function L(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,b.translate)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,b.translate)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.default)("button button--secondary button--outline",F),onClick:t},n.createElement(p,{className:H}))}function D(e){var t,a,l=e.path,r=e.sidebar,o=e.onCollapse,s=e.isHidden,u=function(){var e=(0,c.useAnnouncementBar)().isClosed,t=(0,n.useState)(!e),a=t[0],l=t[1];return(0,d.Z)((function(t){var a=t.scrollY;e||l(0===a)})),a}(),p=(0,c.useThemeConfig)(),b=p.navbar.hideOnScroll,h=p.hideableSidebar,f=(0,c.useAnnouncementBar)().isClosed;return n.createElement("div",{className:(0,i.default)(w,(t={},t[y]=b,t[P]=s,t))},b&&n.createElement(m.Z,{tabIndex:-1,className:A}),n.createElement("nav",{className:(0,i.default)("menu thin-scrollbar",B,(a={},a[x]=!f&&u,a))},n.createElement("ul",{className:(0,i.default)(c.ThemeClassNames.docs.docSidebarMenu,"menu__list")},n.createElement(T,{items:r,activePath:l}))),h&&n.createElement(L,{onClick:o}))}var W=function(e){var t=e.toggleSidebar,a=e.sidebar,l=e.path;return n.createElement("ul",{className:(0,i.default)(c.ThemeClassNames.docs.docSidebarMenu,"menu__list")},n.createElement(T,{items:a,activePath:l,onItemClick:function(){return t()}}))};function R(e){return n.createElement(c.MobileSecondaryMenuFiller,{component:W,props:e})}var z=n.memo(D),Y=n.memo(R);function J(e){var t=(0,s.Z)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(z,e),l&&n.createElement(Y,e))}var K=a(75854),X=a.n(K),q=a(24608),G=a(5977);const O="backToTopButton_35hR",Q="backToTopButtonShow_18ls";function U(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}const V=function(){var e,t=(0,G.TH)(),a=U(),l=a.smoothScrollTop,r=a.cancelScrollToTop,o=(0,n.useState)(!1),c=o[0],s=o[1];return(0,d.Z)((function(e,t){var a=e.scrollY;if(t){var n=a<t.scrollY;if(n||r(),a<300)s(!1);else if(n){var l=document.documentElement.scrollHeight;a+window.innerHeight<l&&s(!0)}else s(!1)}}),[t]),n.createElement("button",{className:(0,i.default)("clean-btn",O,(e={},e[Q]=c,e)),type:"button",onClick:function(){return l()}},n.createElement("svg",{viewBox:"0 0 24 24",width:"28"},n.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},j={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};var $=a(99105);function ee(e){var t,a,r,s=e.currentDocRoute,d=e.versionMetadata,m=e.children,u=d.pluginId,h=d.version,f=s.sidebar,E=f?d.docsSidebars[f]:void 0,v=(0,n.useState)(!1),C=v[0],g=v[1],_=(0,n.useState)(!1),N=_[0],k=_[1],S=(0,n.useCallback)((function(){N&&k(!1),g(!C)}),[N]);return n.createElement(o.Z,{wrapperClassName:c.ThemeClassNames.wrapper.docsPages,pageClassName:c.ThemeClassNames.page.docsDocPage,searchMetadatas:{version:h,tag:(0,c.docVersionSearchTag)(u,h)}},n.createElement("div",{className:j.docPage},n.createElement(V,null),E&&n.createElement("aside",{className:(0,i.default)(j.docSidebarContainer,(t={},t[j.docSidebarContainerHidden]=C,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(j.docSidebarContainer)&&C&&k(!0)}},n.createElement(J,{key:f,sidebar:E,path:s.path,onCollapse:S,isHidden:N}),N&&n.createElement("div",{className:j.collapsedDocSidebar,title:(0,b.translate)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,b.translate)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:S,onClick:S},n.createElement(p,{className:j.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,i.default)(j.docMainContainer,(a={},a[j.docMainContainerEnhanced]=C||!E,a))},n.createElement("div",{className:(0,i.default)("container padding-top--md padding-bottom--lg",j.docItemWrapper,(r={},r[j.docItemWrapperEnhanced]=C,r))},n.createElement(l.MDXProvider,{components:X()},m)))))}const te=function(e){var t=e.route.routes,a=e.versionMetadata,l=e.location,o=t.find((function(e){return(0,G.LX)(l.pathname,e)}));return o?n.createElement(n.Fragment,null,n.createElement($.Z,null,n.createElement("html",{className:a.className})),n.createElement(ee,{currentDocRoute:o,versionMetadata:a},(0,r.Z)(t,{versionMetadata:a}))):n.createElement(q.default,e)}},24608:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(67294),l=a(33516),r=a(24973);const o=function(){return n.createElement(l.Z,{title:(0,r.translate)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(r.default,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(r.default,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(r.default,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);