(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/Header.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "container": "Header-module-scss-module__t7BEda__container",
  "header": "Header-module-scss-module__t7BEda__header",
  "hidden": "Header-module-scss-module__t7BEda__hidden",
  "languageSelect": "Header-module-scss-module__t7BEda__languageSelect",
  "languageSelector": "Header-module-scss-module__t7BEda__languageSelector",
  "logo": "Header-module-scss-module__t7BEda__logo",
  "logoButton": "Header-module-scss-module__t7BEda__logoButton",
  "logoImage": "Header-module-scss-module__t7BEda__logoImage",
  "logoSubtext": "Header-module-scss-module__t7BEda__logoSubtext",
  "logoText": "Header-module-scss-module__t7BEda__logoText",
  "mobileMenuToggle": "Header-module-scss-module__t7BEda__mobileMenuToggle",
  "nav": "Header-module-scss-module__t7BEda__nav",
  "navItem": "Header-module-scss-module__t7BEda__navItem",
  "navList": "Header-module-scss-module__t7BEda__navList",
  "visible": "Header-module-scss-module__t7BEda__visible",
  "wrapper": "Header-module-scss-module__t7BEda__wrapper",
});
}}),
"[project]/src/components/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Header.module.scss.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Header({ language, onLanguageChange }) {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lastScrollY, setLastScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>{
                    const currentScrollY = window.scrollY;
                    // Show header when at top of page
                    if (currentScrollY < 10) {
                        setIsVisible(true);
                    } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                        // Hide header when scrolling down (after 100px)
                        setIsVisible(false);
                    } else if (currentScrollY < lastScrollY) {
                        // Show header when scrolling up
                        setIsVisible(true);
                    }
                    setLastScrollY(currentScrollY);
                }
            }["Header.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        lastScrollY
    ]);
    const scrollToSection = (sectionId)=>{
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    const getNavText = ()=>{
        switch(language){
            case 'pt':
                return {
                    home: 'Início',
                    about: 'Sobre',
                    services: 'Terapia',
                    partnerships: 'Aconselhamento',
                    contact: 'Contato'
                };
            case 'de':
                return {
                    home: 'Home',
                    about: 'Über mich',
                    services: 'Therapie',
                    partnerships: 'Beratung',
                    contact: 'Kontakt'
                };
            default:
                return {
                    home: 'Home',
                    about: 'About',
                    services: 'Therapy',
                    partnerships: 'Counselling',
                    contact: 'Contact'
                };
        }
    };
    const navText = getNavText();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header} ${isVisible ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visible : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hidden}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container} container`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoButton,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/balao-sombra.svg",
                                alt: "Logo",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoImage
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navList,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scrollToSection('hero'),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem,
                                        children: navText.home
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scrollToSection('about'),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem,
                                        children: navText.about
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scrollToSection('products'),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem,
                                        children: navText.services
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scrollToSection('partnerships'),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem,
                                        children: navText.partnerships
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scrollToSection('footer'),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem,
                                        children: navText.contact
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].languageSelector,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: language,
                            onChange: (e)=>onLanguageChange(e.target.value),
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].languageSelect,
                            "aria-label": "Select language",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "en",
                                    children: "EN"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "pt",
                                    children: "PT"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "de",
                                    children: "DE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(Header, "Js1tKTlc8juSz5SapYVpqaMgF34=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Footer.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "balao": "Footer-module-scss-module__DkSkqG__balao",
  "balaoContainer": "Footer-module-scss-module__DkSkqG__balaoContainer",
  "copyright": "Footer-module-scss-module__DkSkqG__copyright",
  "credentials": "Footer-module-scss-module__DkSkqG__credentials",
  "footer": "Footer-module-scss-module__DkSkqG__footer",
  "footerBottom": "Footer-module-scss-module__DkSkqG__footerBottom",
  "footerContent": "Footer-module-scss-module__DkSkqG__footerContent",
  "logoContainer": "Footer-module-scss-module__DkSkqG__logoContainer",
});
}}),
"[project]/src/components/Footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Footer.module.scss.module.css [app-client] (css module)");
'use client';
;
;
;
function Footer({}) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        id: "footer",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footerContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoContainer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].balaoContainer,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].balao,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/logo-footer.svg",
                                    alt: "Logo"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 20,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footerBottom,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].copyright,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "© ",
                                        new Date().getFullYear(),
                                        " Tatiana Cooke Munkes Speech Therapy. All rights reserved."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].credentials,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Recognized by the Health Department of Hamburg, Germany"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/content.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "siteContent": (()=>siteContent)
});
const siteContent = {
    en: {
        hero: {
            tagline: "Multilingual Speech Language Therapist",
            title: "Two Languages Are Better Than One!",
            description: "Welcome to my bilingual and multilingual speech therapy clinic!<br><br> The main objective of my therapies is to welcome patients through their mother tongue. The therapist-patient bond is established in a special way when patients realize they are understood in what they say, think, and feel. When patients feel safer and more welcomed, they consequently show better motivation, directly impacting their therapeutic prognosis. <br><br> This is undoubtedly the great advantage or the 'Golden Key' of bilingual or multilingual therapy.",
            cta: {
                whatsapp: "WhatsApp",
                email: "Email",
                schedule: "Schedule"
            }
        },
        overview: {
            items: [
                {
                    title: "Bilingual or Multilingual Therapy",
                    description: "Specialized therapy that welcomes the patient through their mother tongue, creating a special Therapist & Patient bond for better development.",
                    fullDescription: "What is the objective of my bilingual/multilingual therapy?<br><br>My bilingual and multilingual therapy has as its main objective welcoming the patient through their mother tongue. The Therapist & Patient bond is established in a welcoming way when the patient realizes they are understood in what they SPEAK, THINK and FEEL! Every patient who feels safer and more welcomed consequently presents better motivation, POSITIVELY impacting their therapeutic prognosis. This is undoubtedly the great advantage or the 'Golden Key' of bilingual or multilingual therapy.<br><br> How is bilingual/multilingual therapy performed?<br><br>For bilingual and multilingual patients, the languages that will be used during therapy will be determined according to the needs of each patient and their families. <br><br>Parents, family members and caregivers will be made aware of therapy programs and methods, as well as rehabilitation objectives, thus being able to support therapy at home. With family cooperation, we can achieve therapy objectives more quickly.",
                    slug: "bilingual-multilingual-therapy",
                    heroImage: "terapia.jpg"
                },
                {
                    title: "Assessment",
                    description: "Differentiated and specialized assessment for bilingual and multilingual patients, considering unique cultural and linguistic aspects.",
                    fullDescription: "How is speech-language assessment performed in general?<br><br> The assessment will be performed through standardized tests and observations of all Speech-Language areas (vocabulary, grammar, reading, writing, speech, comprehension and fluency), if possible in all languages/idioms the patient communicates in.<br><br>Specific tests to evaluate swallowing and functionality of orofacial organs will also be performed when necessary.<br><br> How does bilingual/multilingual assessment differ from monolingual assessments?<br><br>Bilingual or multilingual assessment is a differentiated assessment, as it will mostly not include standardized tests, which can negatively interfere with clinical interpretations of each clinical condition. Bilingual and multilingual children should not be assessed with the same tests used for monolingual children. Assessment will be performed through precise analysis of an entire bilingual and multilingual developmental context. Cultural factors such as origin of exposed languages and family aspects will be valued. Situational aspects, such as date of first contact with spoken languages, daily exposure, means of exposure to various languages, dominant language and a complete analysis of how languages are used at school, at home, and in each patient's environment will be extremely important to reach a safer diagnosis of speech and language disorders in each patient.",
                    slug: "assessment",
                    heroImage: "aconselhamento.jpeg"
                },
                {
                    title: "Counseling",
                    description: "Counseling sessions for families about bilingual development, late talkers and speech and language disorders.",
                    fullDescription: "<h3>Counseling # 1: Helping your child grow bilingual or multilingual</h3><p><em>(Multibag included in material)</em></p><p>This counseling session was designed to provide clear, evidence-based guidance on how your child develops speech and language in multiple languages and how you can confidently support them at home.</p><p><strong>Some frequently asked questions answered in this counseling:</strong></p><ol><li>Can my child learn more than one language, even with difficulties?</li><li>What is normal to expect in bilingual/multilingual language development?</li><li>How can I help at home? What materials and toys should I use?</li><li>When should I worry? What is pathological?</li><li>What about children with special needs, how to stimulate multiple languages?</li></ol><br><h3>Counseling # 2: Bilingualism, Multilingualism and Late Talkers</h3><p>This counseling session is for families raising a bilingual/multilingual child with speech delay in more than one language.</p><ol><li>Who is a Late Talker?</li><li>Can a Late Talker become bilingual or multilingual?</li><li>What is normal in a bilingual/multilingual Late Talker vs. what is not?</li><li>When to worry?</li><li>What can parents do at home?</li><li>What about children with special needs?</li></ol><br><h3>Counseling # 3: Understanding bilingualism/multilingualism and speech and language disorders</h3><p>This counseling session is for bilingual and multilingual families who have children with any type of speech and language alteration and who want to better understand how possible limitations will impact the development of bilingualism and multilingualism at home, in school and in the environment.</p><ol><li>Speech and language disorders in bilingual/multilingual children</li><li>How bilingual and multilingual assessment is performed</li><li>How to maintain the mother tongue</li><li>Language support at home, school and community</li><li>When to seek help</li><li>Reassurance for parents</li><li>Myths vs. Facts: Paying attention to myths and truths in bilingual and multilingual education</li></ol>",
                    slug: "counseling",
                    heroImage: "counseling.jpeg"
                },
                {
                    title: "Workshops for Schools and Teachers",
                    description: "Training for educators on bilingual development, identifying difficulties and classroom support strategies.",
                    fullDescription: "<h3>Workshop # 1: \"Understanding and supporting bilingual speech and language development in the classroom\"</h3><p><strong>Course objective:</strong> Many bilingual and multilingual students are misidentified in terms of learning and language development. Therefore, not referred for speech therapy. Teachers will learn to recognize normal and delayed speech and language development in bilingual students.</p><ol><li>Understand typical stages of bilingual child language development.</li><li>Recognize the difference between \"normal\" language development and language disorder.</li><li>Identify warning signs for speech or language delays in bilingual students.</li><li>Apply classroom strategies to effectively support bilingual students.</li></ol><br><h3>Workshop # 2: \"Recognizing the most common speech and language disorders in schools\"</h3><p>This workshop is designed for educators who want to better understand the main communication disorders that can affect students' school performance.</p><ol><li>Overview of speech, language and communication</li><li>Difference between speech and language disorders</li><li>Red flags and classroom manifestations</li><li>Articulation disorders (e.g.: lisp)</li><li>Phonological deviations</li><li>Childhood Apraxia of Speech (CAS)</li><li>Fluency disorders (e.g., stuttering)</li><li>Receptive language disorders (difficulty understanding instructions, vocabulary or questions)</li><li>Expressive language disorders (limited vocabulary, use of short phrases, grammatical problems)</li><li>Pragmatic language disorders (social communication challenges)</li><li>Language delay vs. disorder</li></ol><br><h2>Workshop Benefits</h2><p>Our workshops provide educators with practical tools to:</p><ul><li><strong>Early identify</strong> possible communication difficulties</li><li><strong>Implement strategies</strong> for classroom support</li><li><strong>Understand</strong> the specific needs of bilingual students</li><li><strong>Collaborate effectively</strong> with speech therapists and families</li><li><strong>Create inclusive environments</strong> that benefit all students</li></ul>",
                    slug: "workshops",
                    heroImage: "workshop.jpeg"
                }
            ]
        },
        products: {
            title: "Therapy Services",
            subtitle: "Comprehensive multilingual speech and language therapy services"
        },
        about: {
            title: "About Me",
            name: "Tatiana Cooke Munkes",
            description: "I am a multilingual speech language therapist recognized by the health department authorities of the state of Hamburg, Germany. I have 30 years of professional experience acquired in Brazil, England, Switzerland, USA and Germany, as a speech therapist and psychopedagogist. I offer assessment, therapy and counseling in Portuguese, German and English for bilingual and multilingual families.",
            experience: "30+ years of experience in multilingual therapy and education",
            personalNote: "I have two children that I have been educating together with my husband in these three languages for more than 20 years. The opportunity to live in several countries expanded our understanding of the true meaning of integration into society respecting its linguistic and sociocultural aspects.",
            countries: [
                {
                    id: 1,
                    country: "Germany",
                    location: "Hamburg",
                    period: "Current",
                    flag: "🇩🇪",
                    isActive: true,
                    experiences: [
                        {
                            company: "Two Languages Are Better Than One",
                            position: "Speech and Language Therapy Clinic for Bilingual and Multilingual Children and Adults",
                            description: "Bilingual and multilingual therapies for students with oral communication, reading and writing difficulties."
                        },
                        {
                            company: "ISH - International School of Hamburg",
                            position: "Speech Language Therapist",
                            description: "Bilingual and multilingual therapies for students with oral communication, reading and writing difficulties."
                        },
                        {
                            company: "Karen Grosstück Speech Therapy Clinic",
                            position: "Home Speech Therapist",
                            description: "Home therapy for geriatric patients with speech, language and swallowing difficulties due to neurological problems and cerebral palsy."
                        }
                    ]
                },
                {
                    id: 2,
                    country: "Switzerland",
                    location: "Zug",
                    period: "Previous",
                    flag: "🇨🇭",
                    isActive: false,
                    experiences: [
                        {
                            company: "Work & Life (International Kindergarten)",
                            position: "Speech Language Therapist",
                            description: "Therapy for bilingual and multilingual children with speech and language difficulties."
                        }
                    ]
                },
                {
                    id: 3,
                    country: "England",
                    location: "Birmingham",
                    period: "Previous",
                    flag: "🇬🇧",
                    isActive: false,
                    experiences: [
                        {
                            company: "Fox Hollies School (Special Needs School)",
                            position: "Speech Language Therapy Training",
                            description: "Training in the speech and language therapy sector with students with special needs."
                        }
                    ]
                },
                {
                    id: 4,
                    country: "USA",
                    location: "New York City",
                    period: "Previous",
                    flag: "🇺🇸",
                    isActive: false,
                    experiences: [
                        {
                            company: "New York Eye & Ear Infirmary Hospital",
                            position: "Bilingual Speech Language Therapy Training",
                            description: "Training in the bilingual speech and language therapy sector (English and Spanish)."
                        }
                    ]
                },
                {
                    id: 5,
                    country: "Brazil",
                    location: "Rio de Janeiro & Espírito Santo",
                    period: "Previous",
                    flag: "🇧🇷",
                    isActive: false,
                    experiences: [
                        {
                            company: "A.B.B.R Brazilian Beneficent Rehabilitation Association",
                            position: "Speech Language Therapist (Rio de Janeiro)",
                            description: "Speech and language therapy for adults and children with neurological disorders. Therapy and psychopedagogical counseling to parents."
                        },
                        {
                            company: "C.R.E.F.E.S. Physical Rehabilitation Center of Espírito Santo State",
                            position: "Speech Language Therapist (Espírito Santo)",
                            description: "Therapy for adults with neurological disorders: aphasia, dysarthria and dysphagia; Therapy for children with cerebral palsy and other neurological disorders."
                        }
                    ]
                }
            ]
        },
        therapyServices: [
            {
                id: "language",
                title: "Language",
                description: "Language development and multilingual support",
                link: "/en/language",
                detailedContent: {
                    overview: "When your child communicates with you orally through words, they are using their verbal expressive language. If they use gestures or pointing, they are trying to communicate, but in a non-verbal way.",
                    receptive: "When your child understands what is being said, they are using various receptive language skills to understand conversation and dialogue.",
                    disorders: "When expressive language (verbal and non-verbal) and receptive language (comprehension) are not developing adequately, your child may present communication difficulties and possible disorders in both expressive and receptive language.",
                    signs: [
                        "Shows difficulties explaining desires and needs due to lack of vocabulary",
                        "Is two years old and speaks less than 50 words",
                        "Speaks isolated words or phrases with only two words",
                        "Presents grammatical errors when trying to explain something",
                        "Has difficulty sequencing ideas and putting them into a narrative",
                        "Speaks only with certain people and in certain places; reluctant to communicate",
                        "Has difficulty understanding what you say",
                        "Has difficulties in social communication with friends at school",
                        "Has difficulties understanding social communication rules (e.g.: respecting turns to speak, good eye contact, body language)"
                    ],
                    treatment: "If your child presents some of the signs mentioned above, you can request a prescription (Verordnung) from the pediatrician for speech therapy (Logopädische Behandlung).",
                    germanTerms: "In Germany we call this condition Sprachentwicklungsstörung (Language Development Disorder) or Sprachentwicklungsverzögerung (Language Delay)."
                }
            },
            {
                id: "speech",
                title: "Speech",
                description: "Speech therapy for articulation and communication",
                link: "/en/speech",
                detailedContent: {
                    overview: "Speech refers to the articulation of phonemes or sounds of words when your child communicates. Speech alterations can be phonetic and/or phonological.",
                    phoneticAlterations: "Phonetic (articulatory) speech alterations are characterized by difficulty performing the correct movement of a specific phoneme. The child says 'suva', 'Socolate' instead of 'chuva', 'chocolate'.",
                    phonologicalAlterations: "Phonological alterations involve difficulty or immaturity in phonological awareness of sounds. The child does not make proper auditory discrimination between sounds.",
                    ageGuidelines: "Children should pronounce sounds correctly around 3 years and 6 months. We generally advise parents of bilingual and multilingual children to give a 6-month margin beyond the average age for speech sound acquisition.",
                    developmentChart: {
                        "1y6m": "/b/ ball; /m/ mommy",
                        "2y": "/p/ daddy; /t/ turtle; /d/ finger; /n/ baby",
                        "2y6m": "/k/ horse; /g/ cat; 'nh' truck",
                        "3y": "/f/ fairy; /v/ cow; /s/ frog; /z/ zebra",
                        "3y6m": "'ch' rain; 'x' pineapple; 'j' alligator, 'g' gelatin",
                        "4y": "'r' (strong sound) rat",
                        "5y": "'r' (soft sound) parrot"
                    },
                    germanTerms: "In the medical prescription, Speech Disorders should be mentioned in German as Aussprachstörung or Phonetische-Phonologische Störung."
                }
            },
            {
                id: "orofacial",
                title: "Orofacial",
                description: "Orofacial therapy for muscle function and coordination",
                link: "/en/orofacial",
                detailedContent: {
                    overview: "The speech organs (face, lips, tongue, teeth, palate, maxilla, mandible) are responsible for the proper functioning of primary functions: breathing and swallowing, as well as the secondary function: speech.",
                    disorders: "When these organs present some alteration in their structure and functionality, difficulties may occur in swallowing, breathing, and speech.",
                    commonIssues: [
                        "Poor tongue position within the oral cavity",
                        "Tongue positioned wide in the lower part of the mouth and slightly forward (protruded)",
                        "Mouth breathing as a consequence",
                        "Tongue projection when swallowing or speaking"
                    ],
                    signs: [
                        "Mouth breathing and open lips most of the time",
                        "Snoring, apnea, sleep problems due to mouth breathing and open lips",
                        "Difficulties closing lips during swallowing",
                        "Limited tongue movements",
                        "Alterations in dental arches, teeth, and jaw",
                        "Difficulties chewing and swallowing with proper lip and tongue positioning",
                        "Excessive drooling and saliva above age 2",
                        "Tongue projection during speech"
                    ],
                    treatment: "Treatment aims for body posture balance, as well as good mobility, strength, tone, and sensitivity of speech organs.",
                    germanTerms: "In the medical prescription it should be written in German: Myofunktionelle Störung."
                }
            },
            {
                id: "auditory",
                title: "Auditory Processing",
                description: "Evaluation and therapy for auditory processing disorders",
                link: "/en/auditory-processing",
                detailedContent: {
                    overview: "Imagine for a minute the frustration of not understanding what is being said. Think that you have no hearing problem, hear perfectly, and are intelligent. Why can't you understand?",
                    condition: "This is the frustration of patients with auditory processing disorder. The ears and brain are not synchronized, and the brain doesn't understand what is spoken.",
                    problem: "Sound is not registered usefully and much auditory information is not processed correctly. Six basic skills may be prevented from developing adequately in auditory processing.",
                    skills: [
                        "Auditory attention and vigilance",
                        "Auditory discrimination",
                        "Auditory memory",
                        "Auditory sequencing",
                        "Auditory processing speed",
                        "Auditory comprehension"
                    ],
                    importance: "Auditory processing disorder must be treated so children can have good communication with others, learn new information at school, and perform auditory tasks with fewer difficulties.",
                    germanTerms: "In the medical prescription, the pediatrician should inform the diagnosis of Central Auditory Processing Disorder (Auditive Verarbeitungs- und Wahrnehmungsstörungen-AVWS) in German."
                }
            },
            {
                id: "swallowing",
                title: "Swallowing & Feeding",
                description: "Assessment and treatment of swallowing and feeding disorders",
                link: "/en/swallowing-feeding",
                detailedContent: {
                    overview: "Dysphagia or difficulty swallowing liquid, pasty, or solid foods can occur in babies, children, adolescents, and adults. We also find cases of selectivity and food refusal.",
                    risks: [
                        "Lack of weight gain and growth",
                        "Dehydration and malnutrition",
                        "Food and liquids aspirated into airways (lungs)",
                        "Pneumonia and other respiratory diseases"
                    ],
                    selectivity: "Selectivity and food refusal may be associated with pain, frustration, embarrassment, food disinterest, sensory difficulties, and lack of appetite.",
                    signs: [
                        "Has problems with sucking and swallowing during breastfeeding",
                        "Cries, gets irritated during meals",
                        "Sleeps during breastfeeding; gets tired easily when sucking",
                        "Tenses body altering spine posture during feeding",
                        "Has breathing difficulties while eating and drinking",
                        "Refuses to eat and drink",
                        "Eats only some consistencies",
                        "Takes a very long time to eat",
                        "Keeps food residue in oral cavity",
                        "Has problems chewing; unilateral chewing",
                        "Presents choking, coughing, or gag reflex",
                        "Produces a lot of saliva, or liquids drip from mouth or nose",
                        "Presents voice changes during or after meals",
                        "Occurrence of vomiting and need to spit during meals",
                        "Feels extremely satisfied, heavy, fatigued during meals"
                    ],
                    germanTerms: "In the medical prescription, the pediatrician should mention the diagnosis Dysphagia (Dysphagie) or Swallowing Disorder (Schluckstörung). For Selectivity and Food Refusal: Fütterstörung."
                }
            },
            {
                id: "stuttering",
                title: "Stuttering",
                description: "Treatment for stuttering and fluency disorders",
                link: "/en/stuttering",
                detailedContent: {
                    overview: "The efficiency of oral communication is largely determined by our ability to produce fluent speech. Speech fluency can be affected by disfluencies in various ways.",
                    normalDisfluency: "We all present disfluent speech sometimes. We repeat words or use interjections like 'um', 'uh' among others. When some speech disfluencies persist longer and manifest involuntarily, we call these disfluencies developmental stuttering.",
                    impact: "Stuttering not only includes aspects of disfluent speech but can also cause body tension and interfere with the quality of life of the child and person.",
                    signs: [
                        "Sound repetition: 'Do you want to eat iiiiice cream?'; 'Did you sssssee the dog?'",
                        "Syllable repetition: 'I like babababananas'. 'The cacacat belongs to my aunt.'",
                        "Sound prolongation: 'Goooooo away quickly'; 'I want ssssssome water.'",
                        "Blocks: 'I want (pause) to eat.'"
                    ],
                    strategies: "Refusals to speak on the phone and attempts to hide stuttering are frequently observed strategies.",
                    germanTerms: "In the medical prescription, the pediatrician should inform the diagnosis of Stuttering (Stottern) in German."
                }
            }
        ],
        contact: {
            title: "Contact",
            address: "Gluckstraße 57, 22081 - Hamburg",
            phone: "+49 1514 6538687",
            email: "tcmunkes@gmail.com"
        },
        multilingualism: {
            title: "Multilingualism",
            subtitle: "Workshop & Counseling",
            description: "The experience of raising my children in three languages together with my husband has been a very exciting and rewarding one. There were many times during the development of our children, when we felt insecure and had questions for instance about their multilingual speech-language development and their reading and writing skills in each of the languages. It has not been easy for us parents to raise our children in three languages, however we have always been aware that TWO LANGUAGES ARE BETTER THAN ONE!",
            questions: [
                "Will my child be overwhelmed with too many languages?",
                "Should I give up speaking my mother tongue to support the local language?",
                "Why doesn't my child want to speak his/her mother language? Is this just a phase?",
                "Is it normal that my child mixes different languages in one sentence?",
                "Could my child have difficulties in school because of multilingualism?",
                "How do I stimulate the language(s) development/progress effectively?",
                "What is considered normal and what is a disability in the language process?"
            ]
        },
        pageContent: {
            "bilingual-multilingual-therapy": {
                hero: {
                    tagline: "Specialized Therapy",
                    title: "Bilingual or Multilingual Therapy",
                    description: "The main objective of my bilingual and multilingual therapy is to welcome the patient through their mother tongue. The Therapist & Patient bond is established in a special way when the patient realizes they are understood in what they say, think and feel.",
                    backgroundImage: "terapia.jpg",
                    imagePosition: "center"
                },
                content: `
          <h2>What is the objective of my bilingual/multilingual therapy?</h2>
          <p>My bilingual and multilingual therapy has as its main objective the welcoming of the patient through their mother tongue. The Therapist & Patient bond is established in a welcoming way when the patient realizes they are understood in what they SPEAK, THINK and FEEL!</p>
          
          <p>Every patient who feels safer and more welcomed consequently presents better motivation, POSITIVELY impacting their therapeutic prognosis. This is undoubtedly the great advantage or the 'Golden Key' of bilingual or multilingual therapy.</p>

          <h2>How is bilingual/multilingual therapy performed?</h2>
          <p>For bilingual and multilingual patients, the languages that will be used during therapy will be determined according to the needs of each patient and their families.</p>
          
          <p>Parents, family members and caregivers will be made aware of therapy programs and methods, as well as rehabilitation objectives, thus being able to support therapy at home. With family cooperation, we can achieve therapy objectives more quickly.</p>

          <h2>How does bilingual/multilingual therapy differ?</h2>
          <p>Bilingual and multilingual therapy differs from common therapies, as it will offer a therapy plan respecting the sociocultural and intercultural aspects of each patient.</p>
          
          <p>In my therapy I will also use international speech-language methods together with my knowledge of clinical psychopedagogy.</p>

          <h2>What is needed for bilingual/multilingual therapy here in Germany?</h2>
          <ul>
            <li>Valid medical prescription</li>
            <li>Doctor's signature and stamp (not assistants) on the prescription</li>
            <li>The medical prescription must provide data about the diagnosis and session time</li>
          </ul>
        `
            },
            "assessment": {
                hero: {
                    tagline: "Professional Assessment",
                    title: "Assessment",
                    description: "Differentiated and specialized assessment for bilingual and multilingual patients, considering unique cultural and linguistic aspects.",
                    backgroundImage: "aconselhamento.jpeg",
                    imagePosition: "center"
                },
                content: `
          <h2>How is speech-language assessment performed in general?</h2>
          <p>The assessment will be performed through standardized tests and observations of all Speech-Language areas (vocabulary, grammar, reading, writing, speech, comprehension and fluency), if possible in all languages/idioms the patient communicates in.</p>
          
          <p>Specific tests to evaluate swallowing and functionality of orofacial organs will also be performed when necessary.</p>

          <h2>How does bilingual/multilingual assessment differ from monolingual assessments?</h2>
          <p>Bilingual or multilingual assessment is a differentiated assessment, as it will mostly not include standardized tests, which can negatively interfere with clinical interpretations of each clinical condition.</p>
          
          <p><strong>Bilingual and multilingual children should not be assessed with the same tests used for monolingual children.</strong></p>

          <p>Assessment will be performed through precise analysis of an entire bilingual and multilingual developmental context. Cultural factors such as origin of exposed languages and family aspects will be valued.</p>

          <h2>Important aspects in assessment</h2>
          <p>Situational aspects will be extremely important to reach a safer diagnosis of speech and language disorders in each patient:</p>
          <ul>
            <li>Date of first contact with spoken languages</li>
            <li>Daily exposure to different languages</li>
            <li>Means of exposure to various languages</li>
            <li>Dominant language</li>
            <li>Complete analysis of how languages are used at school, at home, and in each patient's environment</li>
          </ul>
        `
            },
            "counseling": {
                hero: {
                    tagline: "Family Support",
                    title: "Counseling",
                    description: "Counseling sessions for families about bilingual development, late talkers and speech and language disorders.",
                    backgroundImage: "counseling.jpeg",
                    imagePosition: "bottom"
                },
                content: `
          <h2>Counseling # 1: Helping your child grow bilingual or multilingual</h2>
          <p><em>(Multibag included in material)</em></p>
          <p>This counseling session was designed to provide clear, evidence-based guidance on how your child develops speech and language in multiple languages and how you can confidently support them at home.</p>
          
          <p><strong>Some frequently asked questions answered in this counseling:</strong></p>
          <ul>
            <li>Can my child learn more than one language, even with difficulties?</li>
            <li>What is normal to expect in bilingual/multilingual language development?</li>
            <li>How can I help at home? What materials and toys should I use?</li>
            <li>When should I worry? What is pathological?</li>
            <li>What about children with special needs, how to stimulate multiple languages?</li>
          </ul>

          <h2>Counseling # 2: Bilingualism, Multilingualism and Late Talkers</h2>
          <p>This counseling session is for families raising a bilingual/multilingual child with speech delay in more than one language.</p>
          <ul>
            <li>Who is a Late Talker?</li>
            <li>Can a Late Talker become bilingual or multilingual?</li>
            <li>What is normal in a bilingual/multilingual Late Talker vs. what is not?</li>
            <li>When to worry?</li>
            <li>What can parents do at home?</li>
            <li>What about children with special needs?</li>
          </ul>

          <h2>Counseling # 3: Understanding bilingualism/multilingualism and speech and language disorders</h2>
          <p>This counseling session is for bilingual and multilingual families who have children with any type of speech and language alteration and who want to better understand how possible limitations will impact the development of bilingualism and multilingualism at home, in school and in the environment.</p>
          <ul>
            <li>Speech and language disorders in bilingual/multilingual children</li>
            <li>How bilingual and multilingual assessment is performed</li>
            <li>How to maintain the mother tongue</li>
            <li>Language support at home, school and community</li>
            <li>When to seek help</li>
            <li>Reassurance for parents</li>
            <li>Myths vs. Facts: Paying attention to myths and truths in bilingual and multilingual education</li>
          </ul>
        `
            },
            "workshops": {
                hero: {
                    tagline: "Professional Training",
                    title: "Workshops for Schools and Teachers",
                    description: "Training for educators on bilingual development, identifying difficulties and classroom support strategies.",
                    backgroundImage: "workshop.jpeg",
                    imagePosition: "top"
                },
                content: `
          <h2>Workshop # 1: "Understanding and supporting bilingual speech and language development in the classroom"</h2>
          <p><strong>Course objective:</strong> Many bilingual and multilingual students are misidentified in terms of learning and language development. Therefore, not referred for speech therapy. Teachers will learn to recognize normal and delayed speech and language development in bilingual students.</p>
          
          <ul>
            <li>Understand typical stages of bilingual child language development.</li>
            <li>Recognize the difference between "normal" language development and language disorder.</li>
            <li>Identify warning signs for speech or language delays in bilingual students.</li>
            <li>Apply classroom strategies to effectively support bilingual students.</li>
          </ul>

          <h2>Workshop # 2: "Recognizing the most common speech and language disorders in schools"</h2>
          <p>This workshop is designed for educators who want to better understand the main communication disorders that can affect students' school performance.</p>
          
          <ul>
            <li>Overview of speech, language and communication</li>
            <li>Difference between speech and language disorders</li>
            <li>Red flags and classroom manifestations</li>
            <li>Articulation disorders (e.g.: lisp)</li>
            <li>Phonological deviations</li>
            <li>Childhood Apraxia of Speech (CAS)</li>
            <li>Fluency disorders (e.g., stuttering)</li>
            <li>Receptive language disorders (difficulty understanding instructions, vocabulary or questions)</li>
            <li>Expressive language disorders (limited vocabulary, use of short phrases, grammatical problems)</li>
            <li>Pragmatic language disorders (social communication challenges)</li>
            <li>Language delay vs. disorder</li>
          </ul>

          <h2>Workshop Benefits</h2>
          <p>Our workshops provide educators with practical tools to:</p>
          <ul>
            <li><strong>Early identify</strong> possible communication difficulties</li>
            <li><strong>Implement strategies</strong> for classroom support</li>
            <li><strong>Understand</strong> the specific needs of bilingual students</li>
            <li><strong>Collaborate effectively</strong> with speech therapists and families</li>
            <li><strong>Create inclusive environments</strong> that benefit all students</li>
          </ul>
        `
            }
        }
    },
    pt: {
        hero: {
            tagline: "Fonoaudióloga Multilíngue",
            title: "Two Languages Are Better Than One!",
            description: "Seja muito bem-vindo às terapias da minha clínica bilíngue e multilíngue!<br><br> O objetivo principal das minhas terapias é o acolhimento do paciente através da sua língua materna. O vínculo Terapeuta & Paciente é estabelecido de forma especial quando o paciente percebe que é compreendido no que diz, pensa e sente. Quando o paciente se sente mais seguro e acolhido apresenta consequentemente uma melhor motivação, impactando diretamente no seu prognóstico terapêutico. <br><br> Isto é sem dúvida a grande vantagem ou a 'Chave de Ouro' da terapia bilíngue ou multilíngue.",
            cta: {
                whatsapp: "WhatsApp",
                email: "Email",
                schedule: "Agendar"
            }
        },
        overview: {
            items: [
                {
                    title: "Terapia Bilíngue ou Multilíngue",
                    description: "Terapia especializada que acolhe o paciente através da sua língua materna, criando um vínculo especial Terapeuta & Paciente para melhor desenvolvimento.",
                    fullDescription: "Qual o objetivo da minha terapia bilíngue/multilíngue?<br><br>A minha terapia bilíngue e multilíngue tem como objetivo principal o acolhimento do paciente através da sua língua materna. O vínculo Terapeuta & Paciente é estabelecido de forma acolhedora quando o paciente percebe que é compreendido no que FALA, PENSA e SENTE! Todo paciente que se sente mais seguro e acolhido apresenta consequentemente uma melhor motivação, impactando POSITIVAMENTE no seu prognóstico terapêutico. Isto é sem dúvida a grande vantagem ou a 'Chave de Ouro' da terapia bilíngue ou multilíngue.<br><br> Como é realizada a terapia bilíngue/multilíngue?<br><br>Para pacientes bilíngues e multilíngues as línguas que serão utilizadas durante a terapia serão determinadas de acordo com as necessidades de cada paciente e seus familiares. <br><br>Pais, familiares e responsáveis serão conscientizados sobre os programas e métodos de terapia, assim como objetivos da reabilitação, podendo desta forma apoiar a terapia em casa. Com a cooperação familiar poderemos alcançar os objetivos de terapia mais rapidamente.<br><br>No que se diferencia a terapia bilíngue/multilíngue?<br><br>A terapia bilíngue e multilíngue se diferencia das terapias comuns, pois nesta será oferecido um plano de terapia respeitando os aspectos socioculturais e interculturais de cada paciente. Na minha terapia usarei também métodos internacionais de fala-linguagem juntamente com os meus conhecimentos da psicopedagogia clínica.<br><br>O que é necessário para a terapia bilíngue/multilíngue aqui na Alemanha?<br><br>• Prescrição médica válida;<br>• Assinatura e carimbo do médico (não dos assistentes) na prescrição;<br>• A prescrição médica deverá informar dados sobre o diagnóstico e tempo da sessão;",
                    slug: "bilingual-multilingual-therapy",
                    heroImage: "terapia.jpg"
                },
                {
                    title: "Avaliação",
                    description: "Avaliação diferenciada e especializada para pacientes bilíngues e multilíngues, considerando aspectos culturais e linguísticos únicos.",
                    fullDescription: "Como é feita a avaliação fonoaudiológica em geral?<br><br>A avaliação será feita através de testes padronizados e observações de todas as áreas da Fala-Linguagem (vocabulário, gramática, leitura, escrita, fala, compreensão e fluência), se possível em todas as línguas/idiomas que o paciente se comunicar.<br><br>Testes específicos para avaliar a deglutição e funcionalidade dos órgãos orofaciais também serão realizadas nos casos necessários.<br><br> Como a avaliação bilíngue/multilíngue se diferencia das avaliações monolíngues?<br><br>A avaliação bilíngue ou multilíngue é uma avaliação diferenciada, pois nela na maioria das vezes não será incluído testes padronizados, que podem interferir negativamente nas interpretações clínicas de cada quadro clínico.<br><br>Crianças bilíngues e multilíngues não devem ser avaliadas com os mesmos testes usados para crianças monolíngues. Avaliação será feita através da análise precisa de todo um contexto desenvolvimento bilíngue e multilíngue. Fatores culturais como origem das línguas expostas e aspectos familiares serão valorizados. Aspectos situacionais, como por exemplo data do primeiro contato com as línguas faladas, exposição diária, meios de exposição a diversas línguas, língua dominante e uma análise completa de como as línguas são usadas na escola, na casa, e no ambiente de cada paciente serão extremamente importantes para se chegar a um diagnóstico mais seguro dos transtornos de fala e linguagem de cada paciente.",
                    slug: "assessment",
                    heroImage: "aconselhamento.jpeg"
                },
                {
                    title: "Aconselhamento",
                    description: "Sessões de aconselhamento para famílias sobre desenvolvimento bilíngue, late talkers e distúrbios de fala e linguagem.",
                    fullDescription: "<h3>Aconselhamento # 1: Ajudando seu filho a crescer bilíngue ou multilíngue</h3><p><em>(Multibag incluída no material)</em></p><p>Esta sessão de aconselhamento foi projetada para fornecer orientações claras e baseadas em evidências sobre como seu filho desenvolve a fala e a linguagem em vários idiomas e como você pode apoiá-lo com confiança em casa.</p><p><strong>Algumas perguntas frequentes respondidas neste aconselhamento:</strong></p><ol><li>Meu filho pode aprender mais de um idioma, mesmo apresentando dificuldades?</li><li>O que é normal esperar no desenvolvimento da linguagem bilíngue/multilíngue?</li><li>Como posso ajudar em casa? Quais materiais e brinquedos devo usar?</li><li>Quando devo me preocupar? O que é patológico?</li><li>E as crianças com necessidades especiais, como estimular várias línguas?</li></ol><br><h3>Aconselhamento # 2: Bilinguismo, Multilinguismo e Late Talkers</h3><p>Esta sessão de aconselhamento é para famílias que criam uma criança bilíngue/multilíngue com atraso na fala em mais de um idioma.</p><ol><li>Quem é um Late Talker?</li><li>Um Late Talker pode se tornar bilíngue ou multilíngue?</li><li>O que é normal em um Late Talker bilíngue / multilíngue X o que não é?</li><li>Quando se preocupar?</li><li>O que os pais podem fazer em casa?</li><li>E as crianças com necessidades especiais?</li></ol><br><h3>Aconselhamento # 3: Compreendendo o bilinguismo/multilinguismo e os distúrbios da fala e da linguagem</h3><p>Esta sessão de aconselhamento destina-se a famílias bilíngues e multilíngues, que têm filhos com qualquer tipo de alteração da fala e da linguagem e que pretendem compreender melhor como as possíveis limitações irão impactar o desenvolvimento do bilinguismo e do multilinguismo dentro de casa, em ambiente escolar e no ambiente.</p><ol><li>Distúrbios da fala e da linguagem em crianças bilíngues/multilíngues</li><li>Como é realizada a avaliação bilíngue e multilíngue</li><li>Como manter a língua materna</li><li>Linguagem de apoio em casa, na escola e na comunidade</li><li>Quando procurar ajuda</li><li>Tranquilidade para os pais</li><li>Mitos vs. Fatos: Prestar atenção nos mitos e nas verdades da educação bilíngue e multilíngue</li></ol>",
                    slug: "counseling",
                    heroImage: "counseling.jpeg"
                },
                {
                    title: "Workshops para Escolas e Professores",
                    description: "Capacitação para educadores sobre desenvolvimento bilíngue, identificação de dificuldades e estratégias de apoio em sala de aula.",
                    fullDescription: "<h3>Workshop # 1: \"Compreendendo e apoiando o desenvolvimento da fala e da linguagem bilíngue na sala de aula\"</h3><p><strong>Objetivo do curso:</strong> Muitos alunos bilíngues e multilíngues são identificados erroneamente em termos de aprendizado e desenvolvimento de idiomas. Portanto, não encaminhado para terapia fonoaudiológica. Os professores aprenderão a reconhecer o desenvolvimento normal e atrasado da fala e da linguagem do estudante bilíngue.</p><ol><li>Compreender os estágios típicos do desenvolvimento de linguagem da criança bilíngue.</li><li>Reconheça a diferença entre o desenvolvimento \"normal\" da linguagem e o distúrbio da linguagem.</li><li>Identifique sinais de alerta para atrasos de fala ou linguagem em alunos bilíngues.</li><li>Aplique estratégias de sala de aula para apoiar alunos bilíngues de forma eficaz.</li></ol><br><h3>Workshop # 2: \"Reconhecendo os distúrbios de fala e linguagem mais comuns nas escolas\"</h3><p>Este workshop é destinado a educadores que desejam compreender melhor os principais distúrbios de comunicação que podem afetar o desempenho escolar dos alunos.</p><ol><li>Visão geral da fala, linguagem e comunicação</li><li>Diferença entre distúrbios de fala e linguagem</li><li>Bandeiras vermelhas e manifestações em sala de aula</li><li>Distúrbios da articulação (por exemplo: ceceio)</li><li>Desvio fonológicos</li><li>Apraxia de Fala na Infância (CAS)</li><li>Distúrbios da fluência (por exemplo, gagueira)</li><li>Distúrbios da linguagem receptiva (dificuldade em entender instruções, vocabulário ou perguntas)</li><li>Distúrbios da linguagem expressiva (vocabulário limitado, uso de frases curtas, problemas gramaticais)</li><li>Distúrbios pragmáticos da linguagem (desafios da comunicação social)</li><li>Atraso de linguagem vs. transtorno</li></ol><br><h2>Benefícios dos Workshops</h2><p>Nossos workshops oferecem aos educadores ferramentas práticas para:</p><ul><li><strong>Identificar precocemente</strong> possíveis dificuldades de comunicação</li><li><strong>Implementar estratégias</strong> de apoio em sala de aula</li><li><strong>Compreender</strong> as necessidades específicas de alunos bilíngues</li><li><strong>Colaborar efetivamente</strong> com fonoaudiólogos e famílias</li><li><strong>Criar ambientes inclusivos</strong> que beneficiem todos os alunos</li></ul>",
                    slug: "workshops",
                    heroImage: "workshop.jpeg"
                }
            ]
        },
        products: {
            title: "Serviços de Terapia",
            subtitle: "Serviços completos de terapia de fala e linguagem multilíngue"
        },
        about: {
            title: "Sobre Mim",
            name: "Tatiana Cooke Munkes",
            description: "Sou fonoaudióloga / terapeuta da fala multilíngue reconhecida pelas autoridades do departamento de saúde do estado de Hamburgo, Alemanha. Tenho 30 anos de experiência profissional adquiridos no Brasil, Inglaterra, Suíça, USA e Alemanha, como fonoaudióloga e psicopedagoga. Ofereço avaliação, terapia e aconselhamento em português, alemão e inglês para famílias bilíngues e multilíngues.",
            experience: "Mais de 30 anos de experiência em terapia e educação multilíngue",
            personalNote: "Tenho dois filhos que educo juntamente com meu marido nestas três línguas há mais de 20 anos. A oportunidade de morar em vários países expandiu a nossa compreensão do verdadeiro significado de uma integração na sociedade respeitando seus aspectos linguísticos e socioculturais.",
            countries: [
                {
                    id: 1,
                    country: "Alemanha",
                    location: "Hamburgo",
                    period: "Atual",
                    flag: "🇩🇪",
                    isActive: true,
                    experiences: [
                        {
                            company: "Two Languages Are Better Than One",
                            position: "Consultório de Terapia da Fala e Linguagem para Crianças e Adultos bilíngues e multilíngues",
                            description: "Terapias bilingue e multilíngue para estudantes com dificuldades de comunicação oral, leitura e escrita."
                        },
                        {
                            company: "ISH - International School of Hamburg",
                            position: "Fonoaudióloga",
                            description: "Terapias bilingue e multilíngue para estudantes com dificuldades de comunicação oral, leitura e escrita."
                        },
                        {
                            company: "Clínica de terapia da fala Karen Grosstück",
                            position: "Fonoaudióloga Domiciliar",
                            description: "Terapia domiciliar a pacientes geriátricos com dificuldades de fala, linguagem e deglutição devido a problemas neurológicos e paralisia cerebral."
                        }
                    ]
                },
                {
                    id: 2,
                    country: "Suíça",
                    location: "Zug",
                    period: "Anterior",
                    flag: "🇨🇭",
                    isActive: false,
                    experiences: [
                        {
                            company: "Work &amp; Life (International Kindergarten)",
                            position: "Fonoaudióloga",
                            description: "Terapia para crianças bilingues e multilíngues com dificuldade de fala e linguagem."
                        }
                    ]
                },
                {
                    id: 3,
                    country: "Inglaterra",
                    location: "Birmingham",
                    period: "Anterior",
                    flag: "🇬🇧",
                    isActive: false,
                    experiences: [
                        {
                            company: "Fox Hollies School (Special Needs School)",
                            position: "Treinamento em Fonoaudiologia",
                            description: "Treinamento no setor de terapia da fala e linguagem com estudantes com dificuldades especiais."
                        }
                    ]
                },
                {
                    id: 4,
                    country: "USA",
                    location: "New York City",
                    period: "Anterior",
                    flag: "🇺🇸",
                    isActive: false,
                    experiences: [
                        {
                            company: "New York Eye & Ear Infirmary Hospital",
                            position: "Treinamento em Terapia Bilíngue",
                            description: "Treinamento no setor bilíngue de terapia de fala e linguagem (Inglês e Espanhol)."
                        }
                    ]
                },
                {
                    id: 5,
                    country: "Brasil",
                    location: "Rio de Janeiro & Espírito Santo",
                    period: "Anterior",
                    flag: "🇧🇷",
                    isActive: false,
                    experiences: [
                        {
                            company: "A.B.B.R Associação Brasileira Beneficente de Reabilitação",
                            position: "Fonoaudióloga (Rio de Janeiro)",
                            description: "Terapia de fala e linguagem para adultos e crianças com distúrbios neurológicos. Terapia e aconselhamento psicopedagógico a pais."
                        },
                        {
                            company: "C.R.E.F.E.S. Centro de Reabilitação Física do Estado do Espírito Santo",
                            position: "Fonoaudióloga (Espírito Santo)",
                            description: "Terapia para adultos com distúrbios neurológicos: afasia, disartria e disfagias; Terapia para crianças com paralisia cerebral e outros distúrbios neurológicos."
                        }
                    ]
                }
            ]
        },
        therapyServices: [
            {
                id: "language",
                title: "Linguagem",
                description: "Desenvolvimento da linguagem e suporte multilíngue",
                link: "/pt/linguagem",
                detailedContent: {
                    overview: "Quando seu filho se comunica com você oralmente através de palavras, está usando sua linguagem expressiva verbal. Se usar gestos ou apontar, está tentando se comunicar, mas de forma não verbal.",
                    receptive: "Quando seu filho entende o que está sendo dito, está usando várias habilidades de linguagem receptiva para entender conversas e diálogos.",
                    disorders: "Quando a linguagem expressiva (verbal e não verbal) e a linguagem receptiva (compreensão) não estão se desenvolvendo adequadamente, seu filho pode apresentar dificuldades de comunicação e possíveis distúrbios tanto na linguagem expressiva quanto na receptiva.",
                    signs: [
                        "Mostra dificuldades para explicar desejos e necessidades devido à falta de vocabulário",
                        "Tem dois anos de idade e fala menos de 50 palavras",
                        "Fala palavras isoladas ou frases com apenas duas palavras",
                        "Apresenta erros gramaticais ao tentar explicar algo",
                        "Tem dificuldade para sequenciar ideias e colocá-las em uma narrativa",
                        "Fala apenas com certas pessoas e em certos lugares; relutante em se comunicar",
                        "Tem dificuldade para entender o que você diz",
                        "Tem dificuldades na comunicação social com amigos na escola",
                        "Tem dificuldades para entender regras de comunicação social (ex.: respeitar turnos para falar, bom contato visual, linguagem corporal)"
                    ],
                    treatment: "Se seu filho apresentar alguns dos sinais mencionados acima, você pode solicitar uma prescrição (Verordnung) do pediatra para terapia da fala (Logopädische Behandlung).",
                    germanTerms: "Na Alemanha, chamamos essa condição de Sprachentwicklungsstörung (Distúrbio do Desenvolvimento da Linguagem) ou Sprachentwicklungsverzögerung (Atraso no Desenvolvimento da Linguagem)."
                }
            },
            {
                id: "speech",
                title: "Fala",
                description: "Terapia da fala para articulação e comunicação",
                link: "/pt/fala",
                detailedContent: {
                    overview: "A fala refere-se à articulação de fonemas ou sons das palavras quando seu filho se comunica. As alterações da fala podem ser fonéticas e/ou fonológicas.",
                    phoneticAlterations: "As alterações fonéticas (articulatórias) da fala são caracterizadas pela dificuldade de realizar o movimento correto de um fonema específico. A criança diz 'suva', 'Socolate' em vez de 'chuva', 'chocolate'.",
                    phonologicalAlterations: "As alterações fonológicas envolvem dificuldade ou imaturidade na consciência fonológica dos sons. A criança não faz discriminação auditiva adequada entre os sons.",
                    ageGuidelines: "As crianças devem pronunciar os sons corretamente por volta de 3 anos e 6 meses. Geralmente aconselhamos os pais de crianças bilíngues e multilíngues a dar uma margem de 6 meses além da idade média para a aquisição dos sons da fala.",
                    developmentChart: {
                        "1a6m": "/b/ bola; /m/ mamãe",
                        "2a": "/p/ papai; /t/ tatu; /d/ dedo; /n/ nenê",
                        "2a6m": "/k/ cavalo; /g/ gato; 'nh' caminhão",
                        "3a": "/f/ fada; /v/ vaca; /s/ sapo; /z/ zebra",
                        "3a6m": "'ch' chuva; 'x' abacaxi; 'j' jacaré, 'g' gelatina",
                        "4a": "'r' (som forte) rato",
                        "5a": "'r' (som suave) papagaio"
                    },
                    germanTerms: "Na prescrição médica, os Distúrbios da Fala devem ser mencionados em alemão como Aussprachstörung ou Phonetische-Phonologische Störung."
                }
            },
            {
                id: "orofacial",
                title: "Orofacial",
                description: "Terapia orofacial para função muscular e coordenação",
                link: "/pt/orofacial",
                detailedContent: {
                    overview: "Os órgãos da fala (face, lábios, língua, dentes, palato, maxila, mandíbula) são responsáveis pelo funcionamento adequado das funções primárias: respiração e deglutição, bem como da função secundária: fala.",
                    disorders: "Quando esses órgãos apresentam alguma alteração em sua estrutura e funcionalidade, podem ocorrer dificuldades na deglutição, respiração e fala.",
                    commonIssues: [
                        "Posição inadequada da língua dentro da cavidade oral",
                        "Língua posicionada de forma ampla na parte inferior da boca e ligeiramente para frente (projetada)",
                        "Respiração bucal como consequência",
                        "Projeção da língua ao engolir ou falar"
                    ],
                    signs: [
                        "Respiração bucal e lábios abertos na maior parte do tempo",
                        "Ronco, apneia, problemas de sono devido à respiração bucal e lábios abertos",
                        "Dificuldades para fechar os lábios durante a deglutição",
                        "Movimentos limitados da língua",
                        "Alterações nos arcos dentários, dentes e mandíbula",
                        "Dificuldades para mastigar e engolir com posicionamento adequado dos lábios e língua",
                        "Salivação excessiva acima de 2 anos de idade",
                        "Projeção da língua durante a fala"
                    ],
                    treatment: "O tratamento visa o equilíbrio da postura corporal, bem como boa mobilidade, força, tônus e sensibilidade dos órgãos da fala.",
                    germanTerms: "Na prescrição médica deve ser escrito em alemão: Myofunktionelle Störung."
                }
            },
            {
                id: "auditory",
                title: "Processamento Auditivo",
                description: "Avaliação e terapia para distúrbios do processamento auditivo",
                link: "/pt/processamento-auditivo",
                detailedContent: {
                    overview: "Imagine por um minuto a frustração de não entender o que está sendo dito. Pense que você não tem problema de audição, ouve perfeitamente e é inteligente. Por que você não consegue entender?",
                    condition: "Esta é a frustração de pacientes com distúrbio do processamento auditivo. Os ouvidos e o cérebro não estão sincronizados, e o cérebro não entende o que é falado.",
                    problem: "O som não é registrado de forma útil e muitas informações auditivas não são processadas corretamente. Seis habilidades básicas podem ser impedidas de se desenvolver adequadamente no processamento auditivo.",
                    skills: [
                        "Atenção e vigilância auditiva",
                        "Discriminação auditiva",
                        "Memória auditiva",
                        "Sequenciamento auditivo",
                        "Velocidade de processamento auditivo",
                        "Compreensão auditiva"
                    ],
                    importance: "O distúrbio do processamento auditivo deve ser tratado para que as crianças possam ter boa comunicação com os outros, aprender novas informações na escola e realizar tarefas auditivas com menos dificuldades.",
                    germanTerms: "Na prescrição médica, o pediatra deve informar o diagnóstico de Distúrbio do Processamento Auditivo Central (Auditive Verarbeitungs- und Wahrnehmungsstörungen-AVWS) em alemão."
                }
            },
            {
                id: "swallowing",
                title: "Deglutição & Alimentação",
                description: "Avaliação e tratamento de distúrbios de deglutição e alimentação",
                link: "/pt/degluticao-alimentacao",
                detailedContent: {
                    overview: "Disfagia ou dificuldade para engolir alimentos líquidos, pastosos ou sólidos pode ocorrer em bebês, crianças, adolescentes e adultos. Também encontramos casos de seletividade e recusa alimentar.",
                    risks: [
                        "Falta de ganho de peso e crescimento",
                        "Desidratação e desnutrição",
                        "Alimentos e líquidos aspirados para as vias aéreas (pulmões)",
                        "Pneumonia e outras doenças respiratórias"
                    ],
                    selectivity: "A seletividade e recusa alimentar podem estar associadas a dor, frustração, constrangimento, desinteresse por alimentos, dificuldades sensoriais e falta de apetite.",
                    signs: [
                        "Tem problemas com sucção e deglutição durante a amamentação",
                        "Chora, fica irritado durante as refeições",
                        "Dorme durante a amamentação; fica facilmente cansado ao sugar",
                        "Tensiona o corpo alterando a postura da coluna durante a alimentação",
                        "Tem dificuldades respiratórias ao comer e beber",
                        "Recusa-se a comer e beber",
                        "Come apenas algumas consistências",
                        "Demora muito tempo para comer",
                        "Mantém resíduos de comida na cavidade oral",
                        "Tem problemas para mastigar; mastigação unilateral",
                        "Apresenta engasgo, tosse ou reflexo de vômito",
                        "Produz muita saliva, ou líquidos escorrem da boca ou nariz",
                        "Apresenta alterações na voz durante ou após as refeições",
                        "Ocorrência de vômitos e necessidade de cuspir durante as refeições",
                        "Sente-se extremamente satisfeito, pesado, fatigado durante as refeições"
                    ],
                    germanTerms: "Na prescrição médica, o pediatra deve mencionar o diagnóstico Disfagia (Dysphagie) ou Distúrbio de Deglutição (Schluckstörung). Para Seletividade e Recusa Alimentar: Fütterstörung."
                }
            },
            {
                id: "stuttering",
                title: "Gagueira",
                description: "Tratamento para gagueira e distúrbios de fluência",
                link: "/pt/gagueira",
                detailedContent: {
                    overview: "A eficiência da comunicação oral é amplamente determinada pela nossa capacidade de produzir fala fluente. A fluência da fala pode ser afetada por disfluências de várias maneiras.",
                    normalDisfluency: "Todos nós apresentamos fala disfluente às vezes. Repetimos palavras ou usamos interjeições como 'é', 'ah' entre outras. Quando algumas disfluências da fala persistem por mais tempo e se manifestam involuntariamente, chamamos essas disfluências de gagueira do desenvolvimento.",
                    impact: "A gagueira não apenas inclui aspectos da fala disfluente, mas também pode causar tensão corporal e interferir na qualidade de vida da criança e da pessoa.",
                    signs: [
                        "Repetição de sons: 'Você quer comeeeer sorvete?'; 'Você viu o caaaachorro?'",
                        "Repetição de sílabas: 'Eu gosto de bananaaanas'. 'O gaaato pertence à minha tia.'",
                        "Prolongamento de sons: 'Vaaai embora rápido'; 'Eu quero ááágua.'",
                        "Bloqueios: 'Eu quero (pausa) comer.'"
                    ],
                    strategies: "Recusas para falar ao telefone e tentativas de esconder a gagueira são estratégias frequentemente observadas.",
                    germanTerms: "Na prescrição médica, o pediatra deve informar o diagnóstico de Gagueira (Stottern) em alemão."
                }
            }
        ],
        contact: {
            title: "Contato",
            address: "Gluckstraße 57, 22081 - Hamburg",
            phone: "+49 1514 6538687",
            email: "tcmunkes@gmail.com"
        },
        multilingualism: {
            title: "Multilinguismo",
            subtitle: "Workshop & Aconselhamento",
            description: "A experiência de criar meus filhos em três línguas junto com meu marido tem sido muito emocionante e gratificante. Houve muitas vezes durante o desenvolvimento de nossos filhos em que nos sentimos inseguros e tivemos perguntas, por exemplo, sobre o desenvolvimento multilíngue da fala e linguagem deles e suas habilidades de leitura e escrita em cada uma das línguas. Não tem sido fácil para nós, pais, criar nossos filhos em três línguas, porém sempre estivemos cientes de que DUAS LÍNGUAS SÃO MELHORES DO QUE UMA!",
            questions: [
                "Meu filho ficará sobrecarregado com muitas línguas?",
                "Devo desistir de falar minha língua materna para apoiar a língua local?",
                "Por que meu filho não quer falar sua/sua língua materna? Isso é apenas uma fase?",
                "É normal que meu filho misture diferentes línguas em uma frase?",
                "Meu filho poderia ter dificuldades na escola por causa do multilinguismo?",
                "Como estimulo o desenvolvimento/progresso da(s) língua(s) de forma eficaz?",
                "O que é considerado normal e o que é uma deficiência no processo de linguagem?"
            ]
        },
        pageContent: {
            "bilingual-multilingual-therapy": {
                hero: {
                    tagline: "Terapia Especializada",
                    title: "Terapia Bilíngue ou Multilíngue",
                    description: "O objetivo principal da minha terapia bilíngue e multilíngue é o acolhimento do paciente através da sua língua materna. O vínculo Terapeuta-Paciente é estabelecido de forma especial quando o paciente percebe que é compreendido no que diz, pensa e sente.",
                    backgroundImage: "terapia.jpg",
                    imagePosition: "center"
                },
                content: `
          <h2>Qual o objetivo da minha terapia bilíngue/multilíngue?</h2>
          <p>A minha terapia bilíngue e multilíngue tem como objetivo principal o acolhimento do paciente através da sua língua materna. O vínculo Terapeuta-Paciente é estabelecido de forma acolhedora quando o paciente percebe que é compreendido no que FALA, PENSA e SENTE!</p>
          
          <p>Todo paciente que se sente mais seguro e acolhido apresenta consequentemente uma melhor motivação, impactando POSITIVAMENTE no seu prognóstico terapêutico. Isto é sem dúvida a grande vantagem ou a 'Chave de Ouro' da terapia bilíngue ou multilíngue.</p>

          <h2>Como é realizada a terapia bilíngue/multilíngue?</h2>
          <p>Para pacientes bilíngues e multilíngues, as línguas que serão utilizadas durante a terapia serão determinadas de acordo com as necessidades de cada paciente e seus familiares.</p>
          
          <p>Pais, familiares e responsáveis serão conscientizados sobre os programas e métodos de terapia, assim como objetivos da reabilitação, podendo desta forma apoiar a terapia em casa. Com a cooperação da família, podemos alcançar os objetivos da terapia mais rapidamente.</p>

          <h2>Como a terapia bilíngue/multilíngue se diferencia?</h2>
          <p>A terapia bilíngue e multilíngue se diferencia das terapias comuns, pois oferece um plano de terapia que respeita os aspectos socioculturais e interculturais de cada paciente.</p>
          
          <p>Na minha terapia, também utilizarei métodos internacionais de fala e linguagem junto com meu conhecimento sobre psicopedagogia clínica.</p>

          <h2>O que é necessário para a terapia bilíngue/multilíngue aqui na Alemanha?</h2>
          <ul>
            <li>Prescrição médica válida</li>
            <li>Assinatura e carimbo do médico (não dos assistentes) na prescrição</li>
            <li>A prescrição médica deve conter dados sobre o diagnóstico e tempo de sessão</li>
          </ul>
        `
            },
            "assessment": {
                hero: {
                    tagline: "Avaliação Profissional",
                    title: "Avaliação",
                    description: "Avaliação diferenciada e especializada para pacientes bilíngues e multilíngues, considerando aspectos culturais e linguísticos únicos.",
                    backgroundImage: "aconselhamento.jpeg",
                    imagePosition: "center"
                },
                content: `
          <h2>Como é realizada a avaliação de fala e linguagem em geral?</h2>
          <p>A avaliação será realizada através de testes padronizados e observações de todas as áreas de Fala e Linguagem (vocabulário, gramática, leitura, escrita, fala, compreensão e fluência), se possível em todos os idiomas/línguas que o paciente se comunica.</p>
          
          <p>Testes específicos para avaliar a deglutição e funcionalidade dos órgãos orofaciais também serão realizados quando necessário.</p>

          <h2>Como a avaliação bilíngue/multilíngue difere das avaliações monolíngues?</h2>
          <p>A avaliação bilíngue ou multilíngue é uma avaliação diferenciada, pois na maioria das vezes não incluirá testes padronizados, que podem interferir negativamente nas interpretações clínicas de cada condição clínica.</p>
          
          <p><strong>Crianças bilíngues e multilíngues não devem ser avaliadas com os mesmos testes usados para crianças monolíngues.</strong></p>

          <p>A avaliação será realizada através de análise precisa de todo um contexto de desenvolvimento bilíngue e multilíngue. Fatores culturais como origem das línguas expostas e aspectos familiares serão valorizados.</p>

          <h2>Aspectos importantes na avaliação</h2>
          <p>Aspectos situacionais serão extremamente importantes para alcançar um diagnóstico mais seguro de distúrbios de fala e linguagem em cada paciente:</p>
          <ul>
            <li>Data do primeiro contato com as línguas faladas</li>
            <li>Exposição diária a diferentes línguas</li>
            <li>Meios de exposição a várias línguas</li>
            <li>Língua dominante</li>
            <li>Análise completa de como as línguas são usadas na escola, em casa e no ambiente de cada paciente</li>
          </ul>
        `
            },
            "counseling": {
                hero: {
                    tagline: "Suporte Familiar",
                    title: "Aconselhamento",
                    description: "Sessões de aconselhamento para famílias sobre desenvolvimento bilíngue, late talkers e distúrbios de fala e linguagem.",
                    backgroundImage: "counseling.jpeg",
                    imagePosition: "bottom"
                },
                content: `
          <h2>Aconselhamento # 1: Ajudando seu filho a crescer bilíngue ou multilíngue</h2>
          <p><em>(Multibag incluída no material)</em></p>
          <p>Esta sessão de aconselhamento foi projetada para fornecer orientações claras e baseadas em evidências sobre como seu filho desenvolve a fala e a linguagem em vários idiomas e como você pode apoiá-lo com confiança em casa.</p>
          
          <p><strong>Algumas perguntas frequentes respondidas neste aconselhamento:</strong></p>
          <ul>
            <li>Meu filho pode aprender mais de um idioma, mesmo apresentando dificuldades?</li>
            <li>O que é normal esperar no desenvolvimento da linguagem bilíngue/multilíngue?</li>
            <li>Como posso ajudar em casa? Quais materiais e brinquedos devo usar?</li>
            <li>Quando devo me preocupar? O que é patológico?</li>
            <li>E as crianças com necessidades especiais, como estimular várias línguas?</li>
          </ul>

          <h2>Aconselhamento # 2: Bilinguismo, Multilinguismo e Late Talkers</h2>
          <p>Esta sessão de aconselhamento é para famílias que criam uma criança bilíngue/multilíngue com atraso na fala em mais de um idioma.</p>
          <ul>
            <li>Quem é um Late Talker?</li>
            <li>Um Late Talker pode se tornar bilíngue ou multilíngue?</li>
            <li>O que é normal em um Late Talker bilíngue/multilíngue vs. o que não é?</li>
            <li>Quando se preocupar?</li>
            <li>O que os pais podem fazer em casa?</li>
            <li>E as crianças com necessidades especiais?</li>
          </ul>

          <h2>Aconselhamento # 3: Compreendendo bilinguismo/multilinguismo e distúrbios de fala e linguagem</h2>
          <p>Esta sessão de aconselhamento é para famílias bilíngues e multilíngues que têm filhos com qualquer tipo de alteração de fala e linguagem e que querem entender melhor como possíveis limitações impactarão o desenvolvimento do bilinguismo e multilinguismo em casa, na escola e no ambiente.</p>
          <ul>
            <li>Distúrbios de fala e linguagem em crianças bilíngues/multilíngues</li>
            <li>Como a avaliação bilíngue e multilíngue é realizada</li>
            <li>Como manter a língua materna</li>
            <li>Suporte linguístico em casa, na escola e na comunidade</li>
            <li>Quando procurar ajuda</li>
            <li>Tranquilização para os pais</li>
            <li>Mitos vs. Fatos: Prestando atenção a mitos e verdades na educação bilíngue e multilíngue</li>
          </ul>
        `
            },
            "workshops": {
                hero: {
                    tagline: "Treinamento Profissional",
                    title: "Workshops para Escolas e Professores",
                    description: "Capacitação para educadores sobre desenvolvimento bilíngue, identificação de dificuldades e estratégias de apoio em sala de aula.",
                    backgroundImage: "workshop.jpeg",
                    imagePosition: "top"
                },
                content: `
          <h2>Workshop # 1: "Compreendendo e apoiando o desenvolvimento da fala e da linguagem bilíngue na sala de aula"</h2>
          <p><strong>Objetivo do curso:</strong> Muitos alunos bilíngues e multilíngues são identificados erroneamente em termos de aprendizado e desenvolvimento de idiomas. Portanto, não encaminhado para terapia fonoaudiológica. Os professores aprenderão a reconhecer o desenvolvimento normal e atrasado da fala e da linguagem do estudante bilíngue.</p>
          
          <ul>
            <li>Compreender os estágios típicos do desenvolvimento de linguagem da criança bilíngue.</li>
            <li>Reconhecer a diferença entre o desenvolvimento "normal" da linguagem e o distúrbio da linguagem.</li>
            <li>Identificar sinais de alerta para atrasos de fala ou linguagem em alunos bilíngues.</li>
            <li>Aplicar estratégias de sala de aula para apoiar alunos bilíngues de forma eficaz.</li>
          </ul>

          <h2>Workshop # 2: "Reconhecendo os distúrbios de fala e linguagem mais comuns nas escolas"</h2>
          <p>Este workshop é destinado a educadores que desejam compreender melhor os principais distúrbios de comunicação que podem afetar o desempenho escolar dos alunos.</p>
          
          <ul>
            <li>Visão geral da fala, linguagem e comunicação</li>
            <li>Diferença entre distúrbios de fala e linguagem</li>
            <li>Bandeiras vermelhas e manifestações em sala de aula</li>
            <li>Distúrbios da articulação (por exemplo: ceceio)</li>
            <li>Desvios fonológicos</li>
            <li>Apraxia de Fala na Infância (CAS)</li>
            <li>Distúrbios da fluência (por exemplo, gagueira)</li>
            <li>Distúrbios da linguagem receptiva (dificuldade em entender instruções, vocabulário ou perguntas)</li>
            <li>Distúrbios da linguagem expressiva (vocabulário limitado, uso de frases curtas, problemas gramaticais)</li>
            <li>Distúrbios pragmáticos da linguagem (desafios da comunicação social)</li>
            <li>Atraso de linguagem vs. transtorno</li>
          </ul>

          <h2>Benefícios dos Workshops</h2>
          <p>Nossos workshops oferecem aos educadores ferramentas práticas para:</p>
          <ul>
            <li><strong>Identificar precocemente</strong> possíveis dificuldades de comunicação</li>
            <li><strong>Implementar estratégias</strong> de apoio em sala de aula</li>
            <li><strong>Compreender</strong> as necessidades específicas de alunos bilíngues</li>
            <li><strong>Colaborar efetivamente</strong> com fonoaudiólogos e famílias</li>
            <li><strong>Criar ambientes inclusivos</strong> que beneficiem todos os alunos</li>
          </ul>
        `
            }
        }
    },
    de: {
        hero: {
            tagline: "Mehrsprachige Sprachtherapeutin",
            title: "Two Languages Are Better Than One!",
            description: "Herzlich willkommen zu den Therapien meiner zweisprachigen und mehrsprachigen Klinik!<br><br> Das Hauptziel meiner Therapien ist die Aufnahme des Patienten durch seine Muttersprache. Die Therapeut-Patient-Bindung wird auf besondere Weise aufgebaut, wenn der Patient merkt, dass er in dem verstanden wird, was er sagt, denkt und fühlt. Wenn sich der Patient sicherer und aufgenommener fühlt, zeigt er folglich eine bessere Motivation, was sich direkt auf seine therapeutische Prognose auswirkt. <br><br> Dies ist zweifellos der große Vorteil oder der 'Goldene Schlüssel' der zweisprachigen oder mehrsprachigen Therapie.",
            cta: {
                whatsapp: "WhatsApp",
                email: "E-Mail",
                schedule: "Termin"
            }
        },
        overview: {
            items: [
                {
                    title: "Zweisprachige oder Mehrsprachige Therapie",
                    description: "Spezialisierte Therapie, die den Patienten durch seine Muttersprache aufnimmt und eine besondere Therapeut-Patient-Bindung für bessere Entwicklung schafft.",
                    fullDescription: "Was ist das Ziel meiner zweisprachigen/mehrsprachigen Therapie?<br><br>Meine zweisprachige und mehrsprachige Therapie hat als Hauptziel die Aufnahme des Patienten durch seine Muttersprache. Die Therapeut-Patient-Bindung wird auf aufnehmende Weise aufgebaut, wenn der Patient merkt, dass er in dem verstanden wird, was er SPRICHT, DENKT und FÜHLT! Jeder Patient, der sich sicherer und aufgenommener fühlt, zeigt folglich eine bessere Motivation, was sich POSITIV auf seine therapeutische Prognose auswirkt. Dies ist zweifellos der große Vorteil oder der 'Goldene Schlüssel' der zweisprachigen oder mehrsprachigen Therapie. <br><br> Wie wird die zweisprachige/mehrsprachige Therapie durchgeführt?<br><br>Für zweisprachige und mehrsprachige Patienten werden die Sprachen, die während der Therapie verwendet werden, entsprechend den Bedürfnissen jedes Patienten und seiner Familien bestimmt. <br><br>Eltern, Familienmitglieder und Betreuer werden über Therapieprogramme und -methoden sowie Rehabilitationsziele informiert und können so die Therapie zu Hause unterstützen. Mit familiärer Zusammenarbeit können wir Therapieziele schneller erreichen. <br><br>Wie unterscheidet sich die zweisprachige/mehrsprachige Therapie?<br><br>Die zweisprachige und mehrsprachige Therapie unterscheidet sich von gewöhnlichen Therapien, da sie einen Therapieplan anbietet, der die soziokulturellen und interkulturellen Aspekte jedes Patienten respektiert. In meiner Therapie werde ich auch internationale Sprach-Sprach-Methoden zusammen mit meinem Wissen über klinische Psychopädagogik verwenden. <br><br>Was wird für die zweisprachige/mehrsprachige Therapie hier in Deutschland benötigt?<br><br>• Gültige ärztliche Verordnung;<br>• Unterschrift und Stempel des Arztes (nicht der Assistenten) auf der Verordnung;<br>• Die ärztliche Verordnung muss Daten über die Diagnose und Sitzungszeit enthalten;",
                    slug: "bilingual-multilingual-therapy",
                    heroImage: "terapia.jpg"
                },
                {
                    title: "Bewertung",
                    description: "Differenzierte und spezialisierte Bewertung für zweisprachige und mehrsprachige Patienten unter Berücksichtigung einzigartiger kultureller und sprachlicher Aspekte.",
                    fullDescription: "Wie wird die Sprach-Sprach-Bewertung allgemein durchgeführt?<br><br> Die Bewertung wird durch standardisierte Tests und Beobachtungen aller Sprach-Sprach-Bereiche (Wortschatz, Grammatik, Lesen, Schreiben, Sprechen, Verständnis und Flüssigkeit) durchgeführt, wenn möglich in allen Sprachen/Idiomen, in denen der Patient kommuniziert.<br><br>Spezifische Tests zur Bewertung des Schluckens und der Funktionalität der orofazialen Organe werden ebenfalls bei Bedarf durchgeführt.<br><br> Wie unterscheidet sich die zweisprachige/mehrsprachige Bewertung von einsprachigen Bewertungen?<br><br>Die zweisprachige oder mehrsprachige Bewertung ist eine differenzierte Bewertung, da sie meistens keine standardisierten Tests enthält, die negativ in die klinischen Interpretationen jedes klinischen Zustands eingreifen können. Zweisprachige und mehrsprachige Kinder sollten nicht mit denselben Tests bewertet werden, die für einsprachige Kinder verwendet werden. Die Bewertung wird durch präzise Analyse eines gesamten zweisprachigen und mehrsprachigen Entwicklungskontexts durchgeführt. Kulturelle Faktoren wie Herkunft der ausgesetzten Sprachen und familiäre Aspekte werden geschätzt. Situative Aspekte, wie Datum des ersten Kontakts mit gesprochenen Sprachen, tägliche Exposition, Mittel der Exposition gegenüber verschiedenen Sprachen, dominante Sprache und eine vollständige Analyse, wie Sprachen in der Schule, zu Hause und in der Umgebung jedes Patienten verwendet werden, sind äußerst wichtig, um eine sicherere Diagnose von Sprach- und Sprachstörungen bei jedem Patienten zu erreichen.",
                    slug: "assessment",
                    heroImage: "aconselhamento.jpeg"
                },
                {
                    title: "Beratung",
                    description: "Beratungssitzungen für Familien über zweisprachige Entwicklung, Late Talkers und Sprach- und Sprachstörungen.",
                    fullDescription: "<h3>Beratung # 1: Ihrem Kind helfen, zweisprachig oder mehrsprachig aufzuwachsen</h3><p><em>(Multibag im Material enthalten)</em></p><p>Diese Beratungssitzung wurde entwickelt, um klare, evidenzbasierte Anleitungen zu geben, wie Ihr Kind Sprache und Sprache in mehreren Sprachen entwickelt und wie Sie es zu Hause selbstbewusst unterstützen können.</p><p><strong>Einige häufig gestellte Fragen, die in dieser Beratung beantwortet werden:</strong></p><ol><li>Kann mein Kind mehr als eine Sprache lernen, auch mit Schwierigkeiten?</li><li>Was ist normal in der zweisprachigen/mehrsprachigen Sprachentwicklung zu erwarten?</li><li>Wie kann ich zu Hause helfen? Welche Materialien und Spielzeuge sollte ich verwenden?</li><li>Wann sollte ich mir Sorgen machen? Was ist pathologisch?</li><li>Was ist mit Kindern mit besonderen Bedürfnissen, wie mehrere Sprachen stimulieren?</li></ol><br><h3>Beratung # 2: Zweisprachigkeit, Mehrsprachigkeit und Late Talkers</h3><p>Diese Beratungssitzung ist für Familien, die ein zweisprachiges/mehrsprachiges Kind mit Sprachverzögerung in mehr als einer Sprache großziehen.</p><ol><li>Wer ist ein Late Talker?</li><li>Kann ein Late Talker zweisprachig oder mehrsprachig werden?</li><li>Was ist normal bei einem zweisprachigen/mehrsprachigen Late Talker vs. was nicht?</li><li>Wann sich Sorgen machen?</li><li>Was können Eltern zu Hause tun?</li><li>Was ist mit Kindern mit besonderen Bedürfnissen?</li></ol><br><h3>Beratung # 3: Zweisprachigkeit/Mehrsprachigkeit und Sprach- und Sprachstörungen verstehen</h3><p>Diese Beratungssitzung ist für zweisprachige und mehrsprachige Familien, die Kinder mit jeder Art von Sprach- und Sprachveränderung haben und die besser verstehen möchten, wie mögliche Einschränkungen die Entwicklung von Zweisprachigkeit und Mehrsprachigkeit zu Hause, in der Schule und in der Umgebung beeinflussen werden.</p><ol><li>Sprach- und Sprachstörungen bei zweisprachigen/mehrsprachigen Kindern</li><li>Wie zweisprachige und mehrsprachige Bewertung durchgeführt wird</li><li>Wie die Muttersprache beibehalten wird</li><li>Sprachunterstützung zu Hause, in der Schule und in der Gemeinschaft</li><li>Wann Hilfe suchen</li><li>Beruhigung für Eltern</li><li>Mythen vs. Fakten: Aufmerksamkeit auf Mythen und Wahrheiten in der zweisprachigen und mehrsprachigen Bildung richten</li></ol>",
                    slug: "counseling",
                    heroImage: "counseling.jpeg"
                },
                {
                    title: "Workshops für Schulen und Lehrer",
                    description: "Schulung für Pädagogen über zweisprachige Entwicklung, Identifizierung von Schwierigkeiten und Unterstützungsstrategien im Klassenzimmer.",
                    fullDescription: "<h3>Workshop # 1: \"Verstehen und Unterstützen der zweisprachigen Sprach- und Sprachentwicklung im Klassenzimmer\"</h3><p><strong>Kursziel:</strong> Viele zweisprachige und mehrsprachige Schüler werden in Bezug auf Lernen und Sprachentwicklung falsch identifiziert. Daher nicht für Sprachtherapie überwiesen. Lehrer lernen, normale und verzögerte Sprach- und Sprachentwicklung bei zweisprachigen Schülern zu erkennen.</p><ol><li>Typische Phasen der zweisprachigen Kindersprachentwicklung verstehen.</li><li>Den Unterschied zwischen \"normaler\" Sprachentwicklung und Sprachstörung erkennen.</li><li>Warnzeichen für Sprach- oder Sprachverzögerungen bei zweisprachigen Schülern identifizieren.</li><li>Klassenzimmerstrategien anwenden, um zweisprachige Schüler effektiv zu unterstützen.</li></ol><br><h3>Workshop # 2: \"Die häufigsten Sprach- und Sprachstörungen in Schulen erkennen\"</h3><p>Dieser Workshop ist für Pädagogen gedacht, die die wichtigsten Kommunikationsstörungen besser verstehen möchten, die die schulische Leistung der Schüler beeinträchtigen können.</p><ol><li>Überblick über Sprache, Sprache und Kommunikation</li><li>Unterschied zwischen Sprach- und Sprachstörungen</li><li>Rote Flaggen und Klassenzimmermanifestationen</li><li>Artikulationsstörungen (z.B.: Lispeln)</li><li>Phonologische Abweichungen</li><li>Kindliche Sprechapraxie (CAS)</li><li>Flüssigkeitsstörungen (z.B. Stottern)</li><li>Rezeptive Sprachstörungen (Schwierigkeiten beim Verstehen von Anweisungen, Wortschatz oder Fragen)</li><li>Expressive Sprachstörungen (begrenzter Wortschatz, Verwendung kurzer Phrasen, grammatische Probleme)</li><li>Pragmatische Sprachstörungen (Herausforderungen der sozialen Kommunikation)</li><li>Sprachverzögerung vs. Störung</li></ol><br><h2>Workshop-Vorteile</h2><p>Unsere Workshops bieten Pädagogen praktische Werkzeuge, um:</p><ul><li><strong>Frühzeitig</strong> mögliche Kommunikationsschwierigkeiten zu identifizieren</li><li><strong>Strategien</strong> für Klassenzimmerunterstützung zu implementieren</li><li><strong>Verstehen</strong> der spezifischen Bedürfnisse zweisprachiger Schüler</li><li><strong>Effektiv zusammenarbeiten</strong> mit Sprachtherapeuten und Familien</li><li><strong>Inklusive Umgebungen</strong> zu schaffen, die allen Schülern zugute kommen</li></ul>",
                    slug: "workshops",
                    heroImage: "workshop.jpeg"
                }
            ]
        },
        products: {
            title: "Therapie-Services",
            subtitle: "Umfassende mehrsprachige Sprach- und Sprachtherapie-Services"
        },
        about: {
            title: "Über Mich",
            name: "Tatiana Cooke Munkes",
            description: "Ich bin eine mehrsprachige Sprachtherapeutin, die von den Gesundheitsbehörden des Bundeslandes Hamburg, Deutschland, anerkannt ist. Ich habe 30 Jahre Berufserfahrung in Brasilien, England, der Schweiz, den Vereinigten Staaten und Deutschland als Sprachtherapeutin und Psychopädagogin gesammelt. Ich biete Bewertung, Therapie und Beratung auf Portugiesisch, Deutsch und Englisch für zweisprachige und mehrsprachige Familien an.",
            experience: "Über 30 Jahre Erfahrung in mehrsprachiger Therapie und Bildung",
            personalNote: "Ich habe zwei Kinder, die ich zusammen mit meinem Mann seit mehr als 20 Jahren in diesen drei Sprachen erziehe. Die Gelegenheit, in mehreren Ländern zu leben, erweiterte unser Verständnis der wahren Bedeutung der Integration in die Gesellschaft unter Beachtung ihrer sprachlichen und soziokulturellen Aspekte.",
            countries: [
                {
                    id: 1,
                    country: "Deutschland",
                    location: "Hamburg",
                    period: "Aktuell",
                    flag: "🇩🇪",
                    isActive: true,
                    experiences: [
                        {
                            company: "Two Languages Are Better Than One",
                            position: "Sprach- und Sprachtherapie-Klinik für zweisprachige und mehrsprachige Kinder und Erwachsene",
                            description: "Zweisprachige und mehrsprachige Therapien für Studenten mit mündlichen Kommunikations-, Lese- und Schreibschwierigkeiten."
                        },
                        {
                            company: "ISH - International School of Hamburg",
                            position: "Sprachtherapeutin",
                            description: "Zweisprachige und mehrsprachige Therapien für Studenten mit mündlichen Kommunikations-, Lese- und Schreibschwierigkeiten."
                        },
                        {
                            company: "Karen Grosstück Sprachtherapie-Klinik",
                            position: "Hausbesuch Sprachtherapeutin",
                            description: "Haustherapie für geriatrische Patienten mit Sprach-, Sprech- und Schluckbeschwerden aufgrund neurologischer Probleme und Zerebralparese."
                        }
                    ]
                },
                {
                    id: 2,
                    country: "Schweiz",
                    location: "Zug",
                    period: "Früher",
                    flag: "🇨🇭",
                    isActive: false,
                    experiences: [
                        {
                            company: "Work & Life (International Kindergarten)",
                            position: "Sprachtherapeutin",
                            description: "Therapie für zweisprachige und mehrsprachige Kinder mit Sprach- und Sprechschwierigkeiten."
                        }
                    ]
                },
                {
                    id: 3,
                    country: "England",
                    location: "Birmingham",
                    period: "Früher",
                    flag: "🇬🇧",
                    isActive: false,
                    experiences: [
                        {
                            company: "Fox Hollies School (Special Needs School)",
                            position: "Sprachtherapie-Ausbildung",
                            description: "Ausbildung im Bereich Sprachtherapie mit Studenten mit besonderen Bedürfnissen."
                        }
                    ]
                },
                {
                    id: 4,
                    country: "USA",
                    location: "New York City",
                    period: "Früher",
                    flag: "🇺🇸",
                    isActive: false,
                    experiences: [
                        {
                            company: "New York Eye & Ear Infirmary Hospital",
                            position: "Zweisprachige Sprachtherapie-Ausbildung",
                            description: "Ausbildung im zweisprachigen Sprachtherapie-Bereich (Englisch und Spanisch)."
                        }
                    ]
                },
                {
                    id: 5,
                    country: "Brasilien",
                    location: "Rio de Janeiro & Espírito Santo",
                    period: "Früher",
                    flag: "🇧🇷",
                    isActive: false,
                    experiences: [
                        {
                            company: "A.B.B.R Brasilianische Wohlfahrts-Rehabilitationsvereinigung",
                            position: "Sprachtherapeutin (Rio de Janeiro)",
                            description: "Sprach- und Sprachtherapie für Erwachsene und Kinder mit neurologischen Störungen. Therapie und psychopädagogische Beratung für Eltern."
                        },
                        {
                            company: "C.R.E.F.E.S. Zentrum für körperliche Rehabilitation des Staates Espírito Santo",
                            position: "Sprachtherapeutin (Espírito Santo)",
                            description: "Therapie für Erwachsene mit neurologischen Störungen: Aphasie, Dysarthrie und Dysphagie; Therapie für Kinder mit Zerebralparese und anderen neurologischen Störungen."
                        }
                    ]
                }
            ]
        },
        therapyServices: [
            {
                id: "language",
                title: "Sprache",
                description: "Sprachentwicklung und mehrsprachige Unterstützung",
                link: "/de/sprachentwicklung",
                detailedContent: {
                    overview: "Wenn Ihr Kind mündlich durch Worte mit Ihnen kommuniziert, verwendet es seine verbale expressive Sprache. Wenn es Gesten verwendet oder zeigt, versucht es zu kommunizieren, aber auf non-verbale Weise.",
                    receptive: "Wenn Ihr Kind versteht, was gesagt wird, nutzt es verschiedene rezeptive Sprachfähigkeiten, um Gespräche und Dialoge zu verstehen.",
                    disorders: "Wenn expressive Sprache (verbal und non-verbal) und rezeptive Sprache (Verständnis) sich nicht angemessen entwickeln, kann Ihr Kind Kommunikationsschwierigkeiten und mögliche Störungen zeigen.",
                    signs: [
                        "Zeigt Schwierigkeiten, Wünsche und Bedürfnisse aufgrund von Vokabelmangel zu erklären",
                        "Ist zwei Jahre alt und spricht weniger als 50 Wörter",
                        "Spricht isolierte Wörter oder Phrasen mit nur zwei Wörtern",
                        "Zeigt grammatische Fehler beim Versuch, etwas zu erklären",
                        "Hat Schwierigkeiten, Ideen zu sequenzieren und in eine Erzählung zu bringen",
                        "Spricht nur mit bestimmten Personen und an bestimmten Orten; zögert zu kommunizieren",
                        "Hat Schwierigkeiten zu verstehen, was Sie sagen",
                        "Hat Schwierigkeiten in der sozialen Kommunikation mit Freunden in der Schule",
                        "Hat Schwierigkeiten, soziale Kommunikationsregeln zu verstehen (z.B.: Gesprächsturnus respektieren, guter Augenkontakt, Körpersprache)"
                    ],
                    treatment: "Wenn Ihr Kind einige der oben genannten Anzeichen zeigt, können Sie beim Kinderarzt eine Verschreibung (Verordnung) für Sprachtherapie (Logopädische Behandlung) anfordern.",
                    germanTerms: "In Deutschland nennen wir diesen Zustand Sprachentwicklungsstörung oder Sprachentwicklungsverzögerung."
                }
            },
            {
                id: "speech",
                title: "Sprache",
                description: "Sprachtherapie für Artikulation und Kommunikation",
                link: "/de/sprache",
                detailedContent: {
                    overview: "Sprache bezieht sich auf die Artikulation von Phonemen oder Lauten von Wörtern, wenn Ihr Kind kommuniziert. Sprachveränderungen können phonetisch und/oder phonologisch sein.",
                    phoneticAlterations: "Phonetische (artikulatorische) Sprachveränderungen sind durch Schwierigkeiten gekennzeichnet, die korrekte Bewegung eines bestimmten Phonems auszuführen. Das Kind sagt 'Suva', 'Socolate' anstatt 'Chuva', 'Chocolate'.",
                    phonologicalAlterations: "Phonologische Veränderungen beinhalten Schwierigkeiten oder Unreife im phonologischen Bewusstsein dieser Laute. Das Kind macht keine angemessene auditive Diskrimination zwischen Lauten.",
                    ageGuidelines: "Kinder sollten Laute korrekt um 3 Jahre und 6 Monate aussprechen. Wir raten Eltern von zweisprachigen und mehrsprachigen Kindern im Allgemeinen, eine Marge von 6 Monaten über das Durchschnittsalter hinaus zu geben.",
                    developmentChart: {
                        "1J6M": "/b/ Ball; /m/ Mama",
                        "2J": "/p/ Papa; /t/ Tatu; /d/ Finger; /n/ Baby",
                        "2J6M": "/k/ Pferd; /g/ Katze; 'nh' LKW",
                        "3J": "/f/ Fee; /v/ Kuh; /s/ Frosch; /z/ Zebra",
                        "3J6M": "'ch' Regen; 'x' Ananas; 'j' Alligator, 'g' Gelatine",
                        "4J": "'r' (starker Klang) Ratte",
                        "5J": "'r' (weicher Klang) Papagei"
                    },
                    germanTerms: "In der ärztlichen Verschreibung sollten Sprachstörungen auf Deutsch als Aussprachstörung oder Phonetische-Phonologische Störung erwähnt werden."
                }
            },
            {
                id: "orofacial",
                title: "Orofazial",
                description: "Orofaziale Therapie für Muskelfunktion und Koordination",
                link: "/de/orofazial",
                detailedContent: {
                    overview: "Die Sprechorgane (Gesicht, Lippen, Zunge, Zähne, Gaumen, Oberkiefer, Unterkiefer) sind für das ordnungsgemäße Funktionieren der primären Funktionen verantwortlich: Atmung und Schlucken sowie die sekundäre Funktion: Sprechen.",
                    disorders: "Wenn diese Organe Veränderungen in ihrer Struktur und Funktionalität aufweisen, können Schwierigkeiten beim Schlucken, Atmen und Sprechen auftreten.",
                    commonIssues: [
                        "Schlechte Zungenposition innerhalb der Mundhöhle",
                        "Zunge breit im unteren Teil des Mundes und leicht nach vorne positioniert (vorstehend)",
                        "Mundatmung als Folge",
                        "Zungenprojektion beim Schlucken oder Sprechen"
                    ],
                    signs: [
                        "Mundatmung und offene Lippen die meiste Zeit",
                        "Schnarchen, Apnoe, Schlafprobleme aufgrund von Mundatmung und offenen Lippen",
                        "Schwierigkeiten beim Verschließen der Lippen während des Schluckens",
                        "Begrenzte Zungenbewegungen",
                        "Veränderungen in den Zahnbögen, Zähnen und Kiefer",
                        "Schwierigkeiten beim Kauen und Schlucken mit guter Lippen- und Zungenpositionierung",
                        "Übermäßiger Speichelfluss über das Alter von 2 Jahren",
                        "Zungenprojektion während des Sprechens"
                    ],
                    treatment: "Die Behandlung zielt auf das Gleichgewicht der Körperhaltung sowie gute Beweglichkeit, Kraft, Tonus und Sensibilität der Sprechorgane ab.",
                    germanTerms: "In der ärztlichen Verschreibung sollte auf Deutsch geschrieben werden: Myofunktionelle Störung."
                }
            },
            {
                id: "auditory",
                title: "Auditive Verarbeitung",
                description: "Bewertung und Therapie für auditive Verarbeitungsstörungen",
                link: "/de/auditive-verarbeitung",
                detailedContent: {
                    overview: "Stellen Sie sich für eine Minute die Frustration vor, nicht zu verstehen, was gesagt wird. Denken Sie auch daran, dass Sie kein Hörproblem haben, perfekt hören und intelligent sind. Warum können Sie nicht verstehen?",
                    condition: "Das ist die Frustration von Patienten mit auditiver Verarbeitungsstörung. Die Ohren und das Gehirn sind nicht synchronisiert, und das Gehirn versteht nicht, was gesprochen wird.",
                    problem: "Ton wird nicht nützlich registriert und viele auditive Informationen werden nicht korrekt verarbeitet. Sechs grundlegende Fähigkeiten können daran gehindert werden, sich in der auditiven Verarbeitung angemessen zu entwickeln.",
                    skills: [
                        "Auditive Aufmerksamkeit und Wachsamkeit",
                        "Auditive Diskrimination",
                        "Auditives Gedächtnis",
                        "Auditive Sequenzierung",
                        "Geschwindigkeit der auditiven Verarbeitung",
                        "Auditives Verständnis"
                    ],
                    importance: "Auditive Verarbeitungsstörungen müssen behandelt werden, damit Kinder gute Kommunikation mit anderen haben, neue Informationen in der Schule lernen und auditive Aufgaben mit weniger Schwierigkeiten ausführen können.",
                    germanTerms: "In der ärztlichen Verschreibung sollte der Kinderarzt die Diagnose Zentrale Auditive Verarbeitungs- und Wahrnehmungsstörungen (AVWS) auf Deutsch angeben."
                }
            },
            {
                id: "swallowing",
                title: "Schlucken & Ernährung",
                description: "Bewertung und Behandlung von Schluck- und Fütterungsstörungen",
                link: "/de/schlucken-ernaehrung",
                detailedContent: {
                    overview: "Dysphagie oder Schwierigkeiten beim Schlucken von flüssigen, pastösen oder festen Nahrungsmitteln können bei Babys, Kindern, Jugendlichen und Erwachsenen auftreten. Wir finden auch Fälle von Selektivität und Nahrungsverweigerung.",
                    risks: [
                        "Mangel an Gewichtszunahme und Wachstum",
                        "Dehydrierung und Unterernährung",
                        "Nahrung und Flüssigkeiten in die Atemwege aspiriert (Lungen)",
                        "Pneumonien und andere Atemwegserkrankungen"
                    ],
                    selectivity: "Selektivität und Nahrungsverweigerung können mit Schmerzen, Frustration, Verlegenheit, Nahrungsdesinteresse, sensorischen Schwierigkeiten und Appetitlosigkeit verbunden sein.",
                    signs: [
                        "Hat Probleme beim Saugen und Schlucken während des Stillens",
                        "Weint, wird während der Mahlzeiten gereizt",
                        "Schläft während des Stillens; wird beim Saugen an der Brust oder Flasche leicht müde",
                        "Spannt den Körper an und verändert die Wirbelsäulenhaltung während der Fütterung",
                        "Hat Atemprobleme beim Essen und Trinken",
                        "Verweigert zu essen und zu trinken",
                        "Isst nur bestimmte Konsistenzen",
                        "Braucht sehr lange zum Essen",
                        "Behält Nahrungsreste in der Mundhöhle",
                        "Hat Probleme beim Kauen; einseitiges Kauen",
                        "Zeigt Ersticken, Husten oder Würgereflex",
                        "Produziert viel Speichel oder Flüssigkeiten tropfen aus Mund oder Nase",
                        "Zeigt Stimmveränderungen während oder nach den Mahlzeiten",
                        "Erbrechen und Notwendigkeit zu spucken während der Mahlzeiten",
                        "Fühlt sich extrem satt, schwer, müde während der Mahlzeiten"
                    ],
                    germanTerms: "In der ärztlichen Verschreibung sollte der Kinderarzt die Diagnose Dysphagie oder Schluckstörung auf Deutsch erwähnen. Bei Selektivität und Nahrungsverweigerung: Fütterstörung."
                }
            },
            {
                id: "stuttering",
                title: "Stottern",
                description: "Behandlung von Stottern und Redeflussstörungen",
                link: "/de/stottern",
                detailedContent: {
                    overview: "Die Effizienz der mündlichen Kommunikation wird größtenteils durch unsere Fähigkeit bestimmt, flüssige Sprache zu produzieren. Sprachflüssigkeit kann durch Disfluenzen auf verschiedene Weise beeinträchtigt werden.",
                    normalDisfluency: "Wir alle zeigen manchmal disfluente Sprache. Wir wiederholen Wörter oder verwenden Füllwörter wie 'äh', 'ähm' unter anderem. Wenn einige Sprachdisfluenzen länger anhalten und sich unwillkürlich manifestieren, nennen wir diese Disfluenzen Entwicklungsstottern.",
                    impact: "Stottern umfasst nicht nur Aspekte disfluenter Sprache, sondern kann auch Körperspannungen verursachen und die Lebensqualität des Kindes und der Person beeinträchtigen.",
                    signs: [
                        "Lautwiederholung: 'Willst du Eeeeeis essen?'; 'Hast du den Huhuhuhund gesehen?'",
                        "Silbenwiederholung: 'Ich mag Babababananen'. 'Die Kakakakkatze gehört meiner Tante.'",
                        "Lautverlängerung: 'Gehehehe schnell weg'; 'Ich will Wassssser.'",
                        "Blockierungen: 'Ich will (Pause) essen.'"
                    ],
                    strategies: "Verweigerungen, beispielsweise am Telefon zu sprechen, und Versuche, das Stottern zu verbergen, sind häufig beobachtete Strategien.",
                    germanTerms: "In der ärztlichen Verschreibung sollte der Kinderarzt die Diagnose Stottern auf Deutsch angeben."
                }
            }
        ],
        contact: {
            title: "Kontakt",
            address: "Gluckstraße 57, 22081 - Hamburg",
            phone: "+49 1514 6538687",
            email: "tcmunkes@gmail.com"
        },
        multilingualism: {
            title: "Mehrsprachigkeit",
            subtitle: "Workshop & Beratung",
            description: "Die Erfahrung, meine Kinder zusammen mit meinem Mann in drei Sprachen zu erziehen, war sehr aufregend und bereichernd. Es gab viele Zeiten während der Entwicklung unserer Kinder, in denen wir uns unsicher fühlten und Fragen hatten, zum Beispiel über ihre mehrsprachige Sprach- und Sprachentwicklung und ihre Lese- und Schreibfähigkeiten in jeder der Sprachen. Es war nicht einfach für uns Eltern, unsere Kinder in drei Sprachen zu erziehen, jedoch waren wir uns immer bewusst, dass ZWEI SPRACHEN BESSER SIND ALS EINE!",
            questions: [
                "Wird mein Kind von zu vielen Sprachen überfordert sein?",
                "Sollte ich aufhören, meine Muttersprache zu sprechen, um die Landessprache zu unterstützen?",
                "Warum will mein Kind seine/ihre Muttersprache nicht sprechen? Ist das nur eine Phase?",
                "Ist es normal, dass mein Kind verschiedene Sprachen in einem Satz mischt?",
                "Könnte mein Kind Schwierigkeiten in der Schule wegen der Mehrsprachigkeit haben?",
                "Wie stimuliere ich die Sprach(en)entwicklung/den Fortschritt effektiv?",
                "Was gilt als normal und was ist eine Behinderung im Sprachprozess?"
            ]
        },
        pageContent: {
            "bilingual-multilingual-therapy": {
                hero: {
                    tagline: "Spezialisierte Therapie",
                    title: "Zweisprachige oder Mehrsprachige Therapie",
                    description: "Das Hauptziel meiner zweisprachigen und mehrsprachigen Therapie ist die Aufnahme des Patienten durch seine Muttersprache. Die Therapeut-Patient-Bindung wird auf besondere Weise aufgebaut, wenn der Patient merkt, dass er in dem verstanden wird, was er sagt, denkt und fühlt.",
                    backgroundImage: "terapia.jpg",
                    imagePosition: "center"
                },
                content: `
          <h2>Was ist das Ziel meiner zweisprachigen/mehrsprachigen Therapie?</h2>
          <p>Meine zweisprachige und mehrsprachige Therapie hat als Hauptziel die Aufnahme des Patienten durch seine Muttersprache. Die Therapeut-Patient-Bindung wird auf aufnehmende Weise aufgebaut, wenn der Patient merkt, dass er in dem verstanden wird, was er SPRICHT, DENKT und FÜHLT!</p>
          
          <p>Jeder Patient, der sich sicherer und aufgenommener fühlt, zeigt folglich eine bessere Motivation, was sich POSITIV auf seine therapeutische Prognose auswirkt. Dies ist zweifellos der große Vorteil oder der 'Goldene Schlüssel' der zweisprachigen oder mehrsprachigen Therapie.</p>

          <h2>Wie wird die zweisprachige/mehrsprachige Therapie durchgeführt?</h2>
          <p>Für zweisprachige und mehrsprachige Patienten werden die Sprachen, die während der Therapie verwendet werden, entsprechend den Bedürfnissen jedes Patienten und seiner Familien bestimmt.</p>
          
          <p>Eltern, Familienmitglieder und Betreuer werden über Therapieprogramme und -methoden sowie Rehabilitationsziele informiert und können so die Therapie zu Hause unterstützen. Mit familiärer Zusammenarbeit können wir Therapieziele schneller erreichen.</p>

          <h2>Wie unterscheidet sich die zweisprachige/mehrsprachige Therapie?</h2>
          <p>Die zweisprachige und mehrsprachige Therapie unterscheidet sich von gewöhnlichen Therapien, da sie einen Therapieplan anbietet, der die soziokulturellen und interkulturellen Aspekte jedes Patienten respektiert.</p>
          
          <p>In meiner Therapie werde ich auch internationale Sprach-Sprach-Methoden zusammen mit meinem Wissen über klinische Psychopädagogik verwenden.</p>

          <h2>Was wird für die zweisprachige/mehrsprachige Therapie hier in Deutschland benötigt?</h2>
          <ul>
            <li>Gültige ärztliche Verordnung</li>
            <li>Unterschrift und Stempel des Arztes (nicht der Assistenten) auf der Verordnung</li>
            <li>Die ärztliche Verordnung muss Daten über die Diagnose und Sitzungszeit enthalten</li>
          </ul>
        `
            },
            "assessment": {
                hero: {
                    tagline: "Professionelle Bewertung",
                    title: "Bewertung",
                    description: "Differenzierte und spezialisierte Bewertung für zweisprachige und mehrsprachige Patienten unter Berücksichtigung einzigartiger kultureller und sprachlicher Aspekte.",
                    backgroundImage: "aconselhamento.jpeg",
                    imagePosition: "center"
                },
                content: `
          <h2>Wie wird die Sprach-Sprach-Bewertung allgemein durchgeführt?</h2>
          <p>Die Bewertung wird durch standardisierte Tests und Beobachtungen aller Sprach-Sprach-Bereiche (Wortschatz, Grammatik, Lesen, Schreiben, Sprechen, Verständnis und Flüssigkeit) durchgeführt, wenn möglich in allen Sprachen/Idiomen, in denen der Patient kommuniziert.</p>
          
          <p>Spezifische Tests zur Bewertung des Schluckens und der Funktionalität der orofazialen Organe werden ebenfalls bei Bedarf durchgeführt.</p>

          <h2>Wie unterscheidet sich die zweisprachige/mehrsprachige Bewertung von einsprachigen Bewertungen?</h2>
          <p>Die zweisprachige oder mehrsprachige Bewertung ist eine differenzierte Bewertung, da sie meistens keine standardisierten Tests enthält, die negativ in die klinischen Interpretationen jedes klinischen Zustands eingreifen können.</p>
          
          <p><strong>Zweisprachige und mehrsprachige Kinder sollten nicht mit denselben Tests bewertet werden, die für einsprachige Kinder verwendet werden.</strong></p>

          <p>Die Bewertung wird durch präzise Analyse eines gesamten zweisprachigen und mehrsprachigen Entwicklungskontexts durchgeführt. Kulturelle Faktoren wie Herkunft der ausgesetzten Sprachen und familiäre Aspekte werden geschätzt.</p>

          <h2>Wichtige Aspekte bei der Bewertung</h2>
          <p>Situative Aspekte werden äußerst wichtig sein, um eine sicherere Diagnose von Sprach- und Sprachstörungen bei jedem Patienten zu erreichen:</p>
          <ul>
            <li>Datum des ersten Kontakts mit gesprochenen Sprachen</li>
            <li>Tägliche Exposition gegenüber verschiedenen Sprachen</li>
            <li>Mittel der Exposition gegenüber verschiedenen Sprachen</li>
            <li>Dominante Sprache</li>
            <li>Vollständige Analyse, wie Sprachen in der Schule, zu Hause und in der Umgebung jedes Patienten verwendet werden</li>
          </ul>
        `
            },
            "counseling": {
                hero: {
                    tagline: "Familienunterstützung",
                    title: "Beratung",
                    description: "Beratungssitzungen für Familien über zweisprachige Entwicklung, Late Talkers und Sprach- und Sprachstörungen.",
                    backgroundImage: "counseling.jpeg",
                    imagePosition: "bottom"
                },
                content: `
          <h2>Beratung # 1: Ihrem Kind helfen, zweisprachig oder mehrsprachig aufzuwachsen</h2>
          <p><em>(Multibag im Material enthalten)</em></p>
          <p>Diese Beratungssitzung wurde entwickelt, um klare, evidenzbasierte Anleitungen zu geben, wie Ihr Kind Sprache und Sprache in mehreren Sprachen entwickelt und wie Sie es zu Hause selbstbewusst unterstützen können.</p>
          
          <p><strong>Einige häufig gestellte Fragen, die in dieser Beratung beantwortet werden:</strong></p>
          <ul>
            <li>Kann mein Kind mehr als eine Sprache lernen, auch mit Schwierigkeiten?</li>
            <li>Was ist normal in der zweisprachigen/mehrsprachigen Sprachentwicklung zu erwarten?</li>
            <li>Wie kann ich zu Hause helfen? Welche Materialien und Spielzeuge sollte ich verwenden?</li>
            <li>Wann sollte ich mir Sorgen machen? Was ist pathologisch?</li>
            <li>Was ist mit Kindern mit besonderen Bedürfnissen, wie mehrere Sprachen stimulieren?</li>
          </ul>

          <h2>Beratung # 2: Zweisprachigkeit, Mehrsprachigkeit und Late Talkers</h2>
          <p>Diese Beratungssitzung ist für Familien, die ein zweisprachiges/mehrsprachiges Kind mit Sprachverzögerung in mehr als einer Sprache großziehen.</p>
          <ul>
            <li>Wer ist ein Late Talker?</li>
            <li>Kann ein Late Talker zweisprachig oder mehrsprachig werden?</li>
            <li>Was ist normal bei einem zweisprachigen/mehrsprachigen Late Talker vs. was nicht?</li>
            <li>Wann sich Sorgen machen?</li>
            <li>Was können Eltern zu Hause tun?</li>
            <li>Was ist mit Kindern mit besonderen Bedürfnissen?</li>
          </ul>

          <h2>Beratung # 3: Zweisprachigkeit/Mehrsprachigkeit und Sprach- und Sprachstörungen verstehen</h2>
          <p>Diese Beratungssitzung ist für zweisprachige und mehrsprachige Familien, die Kinder mit jeder Art von Sprach- und Sprachveränderung haben und die besser verstehen möchten, wie mögliche Einschränkungen die Entwicklung von Zweisprachigkeit und Mehrsprachigkeit zu Hause, in der Schule und in der Umgebung beeinflussen werden.</p>
          <ul>
            <li>Sprach- und Sprachstörungen bei zweisprachigen/mehrsprachigen Kindern</li>
            <li>Wie zweisprachige und mehrsprachige Bewertung durchgeführt wird</li>
            <li>Wie die Muttersprache beibehalten wird</li>
            <li>Sprachunterstützung zu Hause, in der Schule und in der Gemeinschaft</li>
            <li>Wann Hilfe suchen</li>
            <li>Beruhigung für Eltern</li>
            <li>Mythen vs. Fatos: Aufmerksamkeit auf Mythen und Wahrheiten in der zweisprachigen und mehrsprachigen Bildung richten</li>
          </ul>
        `
            },
            "workshops": {
                hero: {
                    tagline: "Professionelle Schulung",
                    title: "Workshops für Schulen und Lehrer",
                    description: "Schulung für Pädagogen über zweisprachige Entwicklung, Identifizierung von Schwierigkeiten und Unterstützungsstrategien im Klassenzimmer.",
                    backgroundImage: "workshop.jpeg",
                    imagePosition: "top"
                },
                content: `
          <h2>Workshop # 1: "Verstehen und Unterstützen der zweisprachigen Sprach- und Sprachentwicklung im Klassenzimmer"</h2>
          <p><strong>Kursziel:</strong> Viele zweisprachige und mehrsprachige Schüler werden in Bezug auf Lernen und Sprachentwicklung falsch identifiziert. Daher nicht für Sprachtherapie überwiesen. Lehrer lernen, normale und verzögerte Sprach- und Sprachentwicklung bei zweisprachigen Schülern zu erkennen.</p>
          
          <ul>
            <li>Typische Phasen der zweisprachigen Kindersprachentwicklung verstehen.</li>
            <li>Den Unterschied zwischen "normaler" Sprachentwicklung und Sprachstörung erkennen.</li>
            <li>Warnzeichen für Sprach- oder Sprachverzögerungen bei zweisprachigen Schülern identifizieren.</li>
            <li>Klassenzimmerstrategien anwenden, um zweisprachige Schüler effektiv zu unterstützen.</li>
          </ul>

          <h2>Workshop # 2: "Die häufigsten Sprach- und Sprachstörungen in Schulen erkennen"</h2>
          <p>Dieser Workshop richtet sich an Pädagogen, die die wichtigsten Kommunikationsstörungen besser verstehen möchten, die die schulische Leistung der Schüler beeinträchtigen können.</p>
          
          <ul>
            <li>Überblick über Sprache, Sprache und Kommunikation</li>
            <li>Unterschied zwischen Sprach- und Sprachstörungen</li>
            <li>Rote Flaggen und Klassenzimmermanifestationen</li>
            <li>Artikulationsstörungen (z.B.: Lispeln)</li>
            <li>Phonologische Abweichungen</li>
            <li>Kindliche Sprechapraxie (CAS)</li>
            <li>Flüssigkeitsstörungen (z.B. Stottern)</li>
            <li>Rezeptive Sprachstörungen (Schwierigkeiten beim Verstehen von Anweisungen, Wortschatz oder Fragen)</li>
            <li>Expressive Sprachstörungen (begrenzter Wortschatz, Verwendung kurzer Phrasen, grammatische Probleme)</li>
            <li>Pragmatische Sprachstörungen (Herausforderungen der sozialen Kommunikation)</li>
            <li>Sprachverzögerung vs. Störung</li>
          </ul>

          <h2>Workshop-Vorteile</h2>
          <p>Unsere Workshops bieten Pädagogen praktische Werkzeuge, um:</p>
          <ul>
            <li><strong>Frühzeitig identifizieren</strong> mögliche Kommunikationsschwierigkeiten</li>
            <li><strong>Strategien implementieren</strong> für Klassenzimmerunterstützung</li>
            <li><strong>Verstehen</strong> die spezifischen Bedürfnisse zweisprachiger Schüler</li>
            <li><strong>Effektiv zusammenarbeiten</strong> mit Sprachtherapeuten und Familien</li>
            <li><strong>Inklusive Umgebungen schaffen</strong> die allen Schülern zugute kommen</li>
          </ul>
        `
            }
        }
    }
}; // para ABOUT ME, Substituir por uma timeline com:
 // Sou fonoaudióloga / terapeuta da fala multilíngue reconhecida pelas autoridades do departamento de
 // saúde do estado de Hamburgo, Alemanha.
 // Tenho 30 anos de experiência profissional adquiridos no Brasil, Inglaterra, Suíça, USA e
 // Alemanha, como fonoaudióloga e psicopedagoga.
 // Ofereço avaliação, terapia e aconselhamento em português, alemão e inglês para famílias bilingues e
 // multilíngues.
 // ​
 // ​Tenho dois filhos que educo juntamente com meu marido nestas três línguas há mais de 20 anos. A
 // oportunidade de morar em vários países expandiu a nossa compreensão do verdadeiro significado de
 // uma integração na sociedade respeitando seus aspectos linguísticos e socioculturais. 
 // 1. Hamburgo: Alemanha
 //  Two Languages Are Better Than One
 // Consultório de Terapia da Fala e Linguagem para Crianças e Adultos bilíngues e multilíngues
 //  ISH - International School of Hamburg
 // Terapias bilingue e multilíngue para estudantes com dificuldades de comunicação oral, leitura e
 // escrita.
 //  Clínica de terapia da fala Karen Grosstück
 // Terapia domiciliar a pacientes geriátricos com dificuldades de fala, linguagem e deglutição devido a
 // problemas neurológicos e paralisia cerebral.
 // 2. Zug: Suíça
 //  Work &amp; Life (International Kindergarten)
 // Terapia para crianças bilingues e multilíngues com dificuldade de fala e linguagem.
 // 3. Birmingham, Inglaterra
 //  Fox Hollies School (Special Needs School)
 // Treinamento no setor de terapia da fala e linguagem com estudantes com dificuldades especiais.
 // 4. New York City, EUA
 // New York Eye &amp; Ear Infirmary Hospital
 // Treinamento no setor bilingue de terapia de fala e linguagem (Inglês e Espanhol).
 // 5. Rio de Janeiro, Brasil
 //  A.B.B.R Associação Brasileira Beneficente de Reabilitação
 // Terapia de fala e linguagem para adultos e crianças com distúrbios neurológicos. Terapia e
 // aconselhamento psicopedagógico a pais.
 // 6. Espírito Santo, Brasil
 //  C.R.E.F.E.S. Centro de Reabilitação Física do Estado do Estado do Espírito Santo
 // Terapia para adultos com distúrbios neurológicos: afasia, disartria e disfagias; Terapia para crianças com
 // paralisia cerebral e outros distúrbios neurológicos.
 // O distúrbio do processamento auditivo deve ser tratado para que as crianças possam ter sobretudo uma boa comunicação com os outros, para poderem aprender na escola novas informações e para que possam ser capazes de realizar tarefas auditivas com menos dificuldades.
 //  Na prescrição médica o pediatra deverá informar em alemão o diagnóstico de Distúrbio do Processamento Auditivo Central (Auditive Verarbeitungs- und Warnenhumungsstörungen-AVWS)
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/HeroSubPage.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "active": "HeroSubPage-module-scss-module__B3uFia__active",
  "button": "HeroSubPage-module-scss-module__B3uFia__button",
  "content": "HeroSubPage-module-scss-module__B3uFia__content",
  "contentBody": "HeroSubPage-module-scss-module__B3uFia__contentBody",
  "cta": "HeroSubPage-module-scss-module__B3uFia__cta",
  "description": "HeroSubPage-module-scss-module__B3uFia__description",
  "dot": "HeroSubPage-module-scss-module__B3uFia__dot",
  "hero": "HeroSubPage-module-scss-module__B3uFia__hero",
  "image": "HeroSubPage-module-scss-module__B3uFia__image",
  "placeholder": "HeroSubPage-module-scss-module__B3uFia__placeholder",
  "placeholderContent": "HeroSubPage-module-scss-module__B3uFia__placeholderContent",
  "slide": "HeroSubPage-module-scss-module__B3uFia__slide",
  "slideCaption": "HeroSubPage-module-scss-module__B3uFia__slideCaption",
  "slideEmpty": "HeroSubPage-module-scss-module__B3uFia__slideEmpty",
  "slideImage": "HeroSubPage-module-scss-module__B3uFia__slideImage",
  "slider": "HeroSubPage-module-scss-module__B3uFia__slider",
  "sliderButton": "HeroSubPage-module-scss-module__B3uFia__sliderButton",
  "sliderContainer": "HeroSubPage-module-scss-module__B3uFia__sliderContainer",
  "sliderControls": "HeroSubPage-module-scss-module__B3uFia__sliderControls",
  "sliderDots": "HeroSubPage-module-scss-module__B3uFia__sliderDots",
  "sliderWrapper": "HeroSubPage-module-scss-module__B3uFia__sliderWrapper",
  "tagline": "HeroSubPage-module-scss-module__B3uFia__tagline",
  "text": "HeroSubPage-module-scss-module__B3uFia__text",
  "title": "HeroSubPage-module-scss-module__B3uFia__title",
  "titleContainer": "HeroSubPage-module-scss-module__B3uFia__titleContainer",
});
}}),
"[project]/src/components/HeroSubPage.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HeroSubPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$wheel$2d$gestures$2f$dist$2f$embla$2d$carousel$2d$wheel$2d$gestures$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-wheel-gestures/dist/embla-carousel-wheel-gestures.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/HeroSubPage.module.scss.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function HeroSubPage({ language, customContent }) {
    _s();
    const defaultContent = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteContent"][language].hero;
    const content = customContent ? {
        ...defaultContent,
        ...customContent
    } : defaultContent;
    // Sample images for slider - you can make this configurable later
    const sliderImages = [
        {
            src: '/tati.jpg',
            caption: 'Speech Therapy Session'
        },
        {
            src: '/kids.png',
            caption: 'Children Learning'
        },
        {
            src: '/therapy.jpeg',
            caption: 'Therapy Environment'
        },
        {
            src: '/workshop.jpeg',
            caption: 'Workshop Activity'
        }
    ];
    const [emblaRef, emblaApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        align: 'start',
        loop: false,
        dragFree: false,
        containScroll: 'trimSnaps'
    }, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$wheel$2d$gestures$2f$dist$2f$embla$2d$carousel$2d$wheel$2d$gestures$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WheelGesturesPlugin"])({
            forceWheelAxis: 'x'
        }) // Enable touchpad/mouse wheel scroll
    ]);
    const scrollPrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroSubPage.useCallback[scrollPrev]": ()=>{
            if (emblaApi) emblaApi.scrollPrev();
        }
    }["HeroSubPage.useCallback[scrollPrev]"], [
        emblaApi
    ]);
    const scrollNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroSubPage.useCallback[scrollNext]": ()=>{
            if (emblaApi) emblaApi.scrollNext();
        }
    }["HeroSubPage.useCallback[scrollNext]"], [
        emblaApi
    ]);
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSubPage.useEffect": ()=>{
            if (!emblaApi) return;
            const onSelect = {
                "HeroSubPage.useEffect.onSelect": ()=>{
                    setSelectedIndex(emblaApi.selectedScrollSnap());
                }
            }["HeroSubPage.useEffect.onSelect"];
            emblaApi.on('select', onSelect);
            onSelect();
            return ({
                "HeroSubPage.useEffect": ()=>{
                    emblaApi.off('select', onSelect);
                }
            })["HeroSubPage.useEffect"];
        }
    }["HeroSubPage.useEffect"], [
        emblaApi
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hero,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].image,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                            children: customContent?.backgroundImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: `/${customContent.backgroundImage}`,
                                alt: "Child in learning environment",
                                role: "presentation",
                                style: {
                                    objectPosition: customContent?.imagePosition || 'center'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroSubPage.tsx",
                                lineNumber: 78,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].placeholder,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].placeholderContent,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Hero Image Placeholder"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroSubPage.tsx",
                                            lineNumber: 89,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: customContent?.title || 'Hero Title'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroSubPage.tsx",
                                            lineNumber: 90,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroSubPage.tsx",
                                    lineNumber: 88,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroSubPage.tsx",
                                lineNumber: 87,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSubPage.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSubPage.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSubPage.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content} col-12 offset-xl-1 col-xl-9`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleContainer,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tagline,
                                            children: content.tagline
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroSubPage.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                            children: content.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroSubPage.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroSubPage.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                                    dangerouslySetInnerHTML: {
                                        __html: content.description
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroSubPage.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HeroSubPage.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sliderContainer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sliderWrapper,
                                    ref: emblaRef,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slider,
                                        children: [
                                            sliderImages.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slide,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: image.src,
                                                            alt: image.caption,
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideImage
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HeroSubPage.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideCaption,
                                                            children: image.caption
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/HeroSubPage.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/components/HeroSubPage.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 19
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slideEmpty
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HeroSubPage.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HeroSubPage.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroSubPage.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sliderControls,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sliderButton,
                                            onClick: scrollPrev,
                                            "aria-label": "Previous slide",
                                            children: "‹"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroSubPage.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sliderDots,
                                            children: sliderImages.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot} ${index === selectedIndex ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                                                    onClick: ()=>emblaApi?.scrollTo(index),
                                                    "aria-label": `Go to slide ${index + 1}`
                                                }, index, false, {
                                                    fileName: "[project]/src/components/HeroSubPage.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroSubPage.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sliderButton,
                                            onClick: scrollNext,
                                            "aria-label": "Next slide",
                                            children: "›"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroSubPage.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroSubPage.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HeroSubPage.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        customContent?.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].expandedContent,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contentBody,
                                dangerouslySetInnerHTML: {
                                    __html: customContent.content
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroSubPage.tsx",
                                lineNumber: 159,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSubPage.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cta,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://wa.me/4915146538687",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12.017 2C6.486 2 2.017 6.468 2.017 12c0 1.75.458 3.391 1.255 4.826L2 22l5.326-1.25C8.752 21.543 10.342 22 12.017 22c5.531 0 9.999-4.468 9.999-10S17.548 2 12.017 2zm5.948 14.273c-.243.678-1.202 1.245-1.967 1.405-.543.113-1.252.203-3.636-.764-2.564-1.04-4.24-3.674-4.366-3.844-.126-.17-.99-1.295-.99-2.47 0-1.175.618-1.752.837-1.994.22-.242.478-.303.638-.303.16 0 .32.001.459.008.148.007.345-.056.54.413.196.47.673 1.62.732 1.74.058.12.097.261.019.422-.077.16-.116.26-.232.4-.116.14-.245.313-.35.42-.116.12-.236.249-.102.487.135.238.598.973 1.284 1.574.882.773 1.626 1.014 1.855 1.127.229.113.362.095.495-.057.134-.152.573-.66.726-.886.152-.226.305-.189.514-.113.21.076 1.327.618 1.555.73.229.113.381.17.438.262.058.094.058.541-.185 1.22z",
                                                fill: "currentColor"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HeroSubPage.tsx",
                                                lineNumber: 177,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroSubPage.tsx",
                                            lineNumber: 176,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: content.cta.whatsapp
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroSubPage.tsx",
                                            lineNumber: 179,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroSubPage.tsx",
                                    lineNumber: 170,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:tcmunkes@gmail.com",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroSubPage.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "22,6 12,13 2,6",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroSubPage.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HeroSubPage.tsx",
                                            lineNumber: 185,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: content.cta.email
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroSubPage.tsx",
                                            lineNumber: 189,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroSubPage.tsx",
                                    lineNumber: 181,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#contact",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "3",
                                                    y: "4",
                                                    width: "18",
                                                    height: "18",
                                                    rx: "2",
                                                    ry: "2",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroSubPage.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "16",
                                                    y1: "2",
                                                    x2: "16",
                                                    y2: "6",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroSubPage.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "8",
                                                    y1: "2",
                                                    x2: "8",
                                                    y2: "6",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroSubPage.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "3",
                                                    y1: "10",
                                                    x2: "21",
                                                    y2: "10",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroSubPage.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HeroSubPage.tsx",
                                            lineNumber: 195,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: content.cta.schedule
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroSubPage.tsx",
                                            lineNumber: 201,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroSubPage.tsx",
                                    lineNumber: 191,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HeroSubPage.tsx",
                            lineNumber: 169,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeroSubPage.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroSubPage.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/HeroSubPage.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(HeroSubPage, "n93ebgcciHD7qZMR3d2TL4OJaOI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = HeroSubPage;
var _c;
__turbopack_context__.k.register(_c, "HeroSubPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Breadcrumb.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "breadcrumb": "Breadcrumb-module-scss-module__bKelcq__breadcrumb",
  "breadcrumbCurrent": "Breadcrumb-module-scss-module__bKelcq__breadcrumbCurrent",
  "breadcrumbItem": "Breadcrumb-module-scss-module__bKelcq__breadcrumbItem",
  "breadcrumbLink": "Breadcrumb-module-scss-module__bKelcq__breadcrumbLink",
  "breadcrumbList": "Breadcrumb-module-scss-module__bKelcq__breadcrumbList",
  "separator": "Breadcrumb-module-scss-module__bKelcq__separator",
});
}}),
"[project]/src/components/Breadcrumb.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Breadcrumb)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumb$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Breadcrumb.module.scss.module.css [app-client] (css module)");
'use client';
;
;
;
function Breadcrumb({ language, items }) {
    const homeLabels = {
        pt: 'Início',
        en: 'Home',
        de: 'Startseite'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumb$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breadcrumb,
        "aria-label": "Breadcrumb",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumb$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breadcrumbList,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumb$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breadcrumbItem,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumb$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breadcrumbLink,
                            children: homeLabels[language]
                        }, void 0, false, {
                            fileName: "[project]/src/components/Breadcrumb.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Breadcrumb.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this),
                    items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumb$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breadcrumbItem,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumb$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].separator,
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Breadcrumb.tsx",
                                    lineNumber: 33,
                                    columnNumber: 15
                                }, this),
                                item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumb$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breadcrumbLink,
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Breadcrumb.tsx",
                                    lineNumber: 35,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumb$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breadcrumbCurrent,
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Breadcrumb.tsx",
                                    lineNumber: 39,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/Breadcrumb.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Breadcrumb.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Breadcrumb.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Breadcrumb.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = Breadcrumb;
var _c;
__turbopack_context__.k.register(_c, "Breadcrumb");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/TechDetails.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "breakpoint": "TechDetails-module-scss-module__VBEEtq__breakpoint",
  "breakpointsList": "TechDetails-module-scss-module__VBEEtq__breakpointsList",
  "buttonGrid": "TechDetails-module-scss-module__VBEEtq__buttonGrid",
  "closeBtn": "TechDetails-module-scss-module__VBEEtq__closeBtn",
  "colorGrid": "TechDetails-module-scss-module__VBEEtq__colorGrid",
  "colorInfo": "TechDetails-module-scss-module__VBEEtq__colorInfo",
  "colorItem": "TechDetails-module-scss-module__VBEEtq__colorItem",
  "colorSwatch": "TechDetails-module-scss-module__VBEEtq__colorSwatch",
  "content": "TechDetails-module-scss-module__VBEEtq__content",
  "demoCol": "TechDetails-module-scss-module__VBEEtq__demoCol",
  "gridDemo": "TechDetails-module-scss-module__VBEEtq__gridDemo",
  "gridExample": "TechDetails-module-scss-module__VBEEtq__gridExample",
  "gridItem": "TechDetails-module-scss-module__VBEEtq__gridItem",
  "gridNote": "TechDetails-module-scss-module__VBEEtq__gridNote",
  "header": "TechDetails-module-scss-module__VBEEtq__header",
  "modal": "TechDetails-module-scss-module__VBEEtq__modal",
  "overlay": "TechDetails-module-scss-module__VBEEtq__overlay",
  "section": "TechDetails-module-scss-module__VBEEtq__section",
  "typeExample": "TechDetails-module-scss-module__VBEEtq__typeExample",
  "typographyGrid": "TechDetails-module-scss-module__VBEEtq__typographyGrid",
});
}}),
"[project]/src/components/TechDetails.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TechDetails)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/TechDetails.module.scss.module.css [app-client] (css module)");
'use client';
;
;
function TechDetails({ isVisible, onClose }) {
    if (!isVisible) return null;
    const colors = [
        {
            name: 'Primary',
            value: 'var(--primary)',
            hex: '#1A5077'
        },
        {
            name: 'Primary Dark',
            value: 'var(--primary-dark)',
            hex: '#154262'
        },
        {
            name: 'Primary Light',
            value: 'var(--primary-light)',
            hex: '#8DCDDE'
        },
        {
            name: 'Accent',
            value: 'var(--accent)',
            hex: '#E91E63'
        },
        {
            name: 'Accent Dark',
            value: 'var(--accent-dark)',
            hex: '#C71585'
        },
        {
            name: 'Accent Light',
            value: 'var(--accent-light)',
            hex: '#FF69B4'
        },
        {
            name: 'Neutral',
            value: 'var(--neutral)',
            hex: '#f1f1e9'
        },
        {
            name: 'Text Primary',
            value: 'var(--text-primary)',
            hex: '#414141'
        },
        {
            name: 'Text Secondary',
            value: 'var(--text-secondary)',
            hex: '#65eded'
        },
        {
            name: 'Background',
            value: 'var(--background)',
            hex: '#f1f1e9'
        },
        {
            name: 'White',
            value: 'var(--white)',
            hex: '#ffffff'
        },
        {
            name: 'Black',
            value: 'var(--black)',
            hex: '#000000'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Frontend Tech Details"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TechDetails.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeBtn,
                            onClick: onClose,
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TechDetails.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TechDetails.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Color Palette"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TechDetails.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorGrid,
                                    children: colors.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorItem,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorSwatch,
                                                    style: {
                                                        backgroundColor: color.value
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TechDetails.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colorInfo,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: color.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/TechDetails.tsx",
                                                            lineNumber: 51,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: color.hex
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/TechDetails.tsx",
                                                            lineNumber: 52,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            children: color.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/TechDetails.tsx",
                                                            lineNumber: 53,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/TechDetails.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, color.name, true, {
                                            fileName: "[project]/src/components/TechDetails.tsx",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TechDetails.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TechDetails.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Typography"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TechDetails.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].typographyGrid,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].typeExample,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    children: "Heading 1 - Droid Serif"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TechDetails.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    children: "font-family: 'Droid Serif', serif; font-weight: 700;"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TechDetails.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TechDetails.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].typeExample,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: "Heading 2 - Droid Serif"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TechDetails.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    children: "font-family: 'Droid Serif', serif; font-weight: 400;"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TechDetails.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TechDetails.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].typeExample,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: "Heading 3 - Bree Serif"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TechDetails.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    children: "font-family: 'Bree Serif', serif;"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TechDetails.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TechDetails.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].typeExample,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Body text - Inter Variable"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TechDetails.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    children: "font-family: 'Inter', sans-serif;"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TechDetails.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TechDetails.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TechDetails.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TechDetails.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Grid System"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TechDetails.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gridExample,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gridItem,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Container"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TechDetails.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    children: "max-width: responsive"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TechDetails.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TechDetails.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gridDemo,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].demoCol,
                                                    children: "Col 1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TechDetails.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].demoCol,
                                                    children: "Col 2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TechDetails.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].demoCol,
                                                    children: "Col 3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TechDetails.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TechDetails.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gridNote,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Grid Overlay:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TechDetails.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Use the 📐 button in the bottom-right corner or press ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        children: "Shift+G"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/TechDetails.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 28
                                                    }, this),
                                                    " to toggle the visual grid overlay."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/TechDetails.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TechDetails.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TechDetails.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TechDetails.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Button Styles"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TechDetails.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonGrid,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn--primary",
                                            children: "Primary Button"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TechDetails.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn--secondary",
                                            children: "Secondary Button"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TechDetails.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TechDetails.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TechDetails.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Breakpoints"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TechDetails.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breakpointsList,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breakpoint,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Mobile:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TechDetails.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    children: "< 768px"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TechDetails.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 42
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TechDetails.tsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breakpoint,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Tablet:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TechDetails.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    children: "768px - 1024px"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TechDetails.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 42
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TechDetails.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breakpoint,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Desktop:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TechDetails.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    children: "1024px - 1440px"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TechDetails.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 43
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TechDetails.tsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breakpoint,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Large:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TechDetails.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    children: "> 1440px"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/TechDetails.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TechDetails.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TechDetails.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TechDetails.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TechDetails.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TechDetails.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/TechDetails.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = TechDetails;
var _c;
__turbopack_context__.k.register(_c, "TechDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/GridOverlay.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "breakpointIndicator": "GridOverlay-module-scss-module__1usnCa__breakpointIndicator",
  "gridBlock": "GridOverlay-module-scss-module__1usnCa__gridBlock",
  "gridCol": "GridOverlay-module-scss-module__1usnCa__gridCol",
  "gridDesktop": "GridOverlay-module-scss-module__1usnCa__gridDesktop",
  "gridMobile": "GridOverlay-module-scss-module__1usnCa__gridMobile",
  "gridOverlay": "GridOverlay-module-scss-module__1usnCa__gridOverlay",
  "gridRow": "GridOverlay-module-scss-module__1usnCa__gridRow",
});
}}),
"[project]/src/components/GridOverlay.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GridOverlay)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridOverlay$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/GridOverlay.module.scss.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function GridOverlay({ isVisible, onToggle }) {
    _s();
    // Keyboard shortcut Shift+G
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GridOverlay.useEffect": ()=>{
            const handleKeydown = {
                "GridOverlay.useEffect.handleKeydown": (event)=>{
                    if (event.shiftKey && event.key.toLowerCase() === 'g') {
                        event.preventDefault();
                        onToggle();
                    }
                }
            }["GridOverlay.useEffect.handleKeydown"];
            document.addEventListener('keydown', handleKeydown);
            return ({
                "GridOverlay.useEffect": ()=>document.removeEventListener('keydown', handleKeydown)
            })["GridOverlay.useEffect"];
        }
    }["GridOverlay.useEffect"], [
        onToggle
    ]);
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridOverlay$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gridOverlay,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridOverlay$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gridRow} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridOverlay$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gridDesktop}`,
                            children: Array.from({
                                length: 12
                            }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridOverlay$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gridCol,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridOverlay$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gridBlock
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GridOverlay.tsx",
                                        lineNumber: 36,
                                        columnNumber: 17
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/src/components/GridOverlay.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/GridOverlay.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridOverlay$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gridRow} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridOverlay$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gridMobile}`,
                            children: Array.from({
                                length: 4
                            }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridOverlay$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gridCol,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridOverlay$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gridBlock
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GridOverlay.tsx",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, this)
                                }, `mobile-${i}`, false, {
                                    fileName: "[project]/src/components/GridOverlay.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/GridOverlay.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/GridOverlay.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/GridOverlay.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridOverlay$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breakpointIndicator
            }, void 0, false, {
                fileName: "[project]/src/components/GridOverlay.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(GridOverlay, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = GridOverlay;
var _c;
__turbopack_context__.k.register(_c, "GridOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/pages/[slug]/page.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "active": "page-module-scss-module__zAe1Iq__active",
  "controlButton": "page-module-scss-module__zAe1Iq__controlButton",
  "controlButtons": "page-module-scss-module__zAe1Iq__controlButtons",
});
}}),
"[project]/src/app/pages/[slug]/ClientPage.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ClientPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeroSubPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Breadcrumb.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TechDetails.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GridOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f5b$slug$5d2f$page$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/pages/[slug]/page.module.scss.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function ClientPage({ slug }) {
    _s();
    const [showTechDetails, setShowTechDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGridVisible, setIsGridVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Initialize with 'en' on both server and client to prevent hydration mismatch
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    // Load language from localStorage after hydration
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientPage.useEffect": ()=>{
            const savedLanguage = localStorage.getItem('selectedLanguage');
            if (savedLanguage && [
                'en',
                'pt',
                'de'
            ].includes(savedLanguage)) {
                setLanguage(savedLanguage);
            }
        }
    }["ClientPage.useEffect"], []);
    const toggleGrid = ()=>{
        setIsGridVisible(!isGridVisible);
    };
    const handleLanguageChange = (newLanguage)=>{
        setLanguage(newLanguage);
        // Save to localStorage
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem('selectedLanguage', newLanguage);
        }
    };
    // Check if the slug exists for the current language
    const pageData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteContent"][language].pageContent[slug];
    if (!pageData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Page not found"
        }, void 0, false, {
            fileName: "[project]/src/app/pages/[slug]/ClientPage.tsx",
            lineNumber: 48,
            columnNumber: 12
        }, this);
    }
    // Create customContent for the HeroSubPage
    const customContent = {
        tagline: pageData.hero.tagline,
        title: pageData.hero.title,
        description: pageData.hero.description,
        backgroundImage: pageData.hero.backgroundImage,
        imagePosition: pageData.hero.imagePosition,
        content: pageData.content
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                language: language,
                onLanguageChange: handleLanguageChange
            }, void 0, false, {
                fileName: "[project]/src/app/pages/[slug]/ClientPage.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                language: language,
                items: [
                    {
                        label: pageData.hero.title
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/app/pages/[slug]/ClientPage.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSubPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                language: language,
                customContent: customContent
            }, void 0, false, {
                fileName: "[project]/src/app/pages/[slug]/ClientPage.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                language: language
            }, void 0, false, {
                fileName: "[project]/src/app/pages/[slug]/ClientPage.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f5b$slug$5d2f$page$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButtons,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowTechDetails(true),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f5b$slug$5d2f$page$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton,
                        title: "Technical Details",
                        children: "⚙️"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/[slug]/ClientPage.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: toggleGrid,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f5b$slug$5d2f$page$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton} ${isGridVisible ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f5b$slug$5d2f$page$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                        title: `${isGridVisible ? 'Hide' : 'Show'} Grid (Shift+G)`,
                        children: "📐"
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/[slug]/ClientPage.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/[slug]/ClientPage.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isVisible: showTechDetails,
                onClose: ()=>setShowTechDetails(false)
            }, void 0, false, {
                fileName: "[project]/src/app/pages/[slug]/ClientPage.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isVisible: isGridVisible,
                onToggle: toggleGrid
            }, void 0, false, {
                fileName: "[project]/src/app/pages/[slug]/ClientPage.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ClientPage, "ERby+H/CBrhevMY30O2vaFvozFw=");
_c = ClientPage;
var _c;
__turbopack_context__.k.register(_c, "ClientPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_7cd185c4._.js.map