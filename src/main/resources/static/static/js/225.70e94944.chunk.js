/*! For license information please see 225.70e94944.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkcursoionic=self.webpackChunkcursoionic||[]).push([[225],{225:(e,t,o)=>{o.r(t),o.d(t,{startFocusVisible:()=>r});const s="ion-focused",n=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=e=>{let t=[],o=!0;const r=e?e.shadowRoot:document,c=e||document.body,i=e=>{t.forEach((e=>e.classList.remove(s))),e.forEach((e=>e.classList.add(s))),t=e},d=()=>{o=!1,i([])},a=e=>{o=n.includes(e.key),o||i([])},u=e=>{if(o&&void 0!==e.composedPath){const t=e.composedPath().filter((e=>!!e.classList&&e.classList.contains("ion-focusable")));i(t)}},v=()=>{r.activeElement===c&&i([])};r.addEventListener("keydown",a),r.addEventListener("focusin",u),r.addEventListener("focusout",v),r.addEventListener("touchstart",d),r.addEventListener("mousedown",d);return{destroy:()=>{r.removeEventListener("keydown",a),r.removeEventListener("focusin",u),r.removeEventListener("focusout",v),r.removeEventListener("touchstart",d),r.removeEventListener("mousedown",d)},setFocus:i}}}}]);
//# sourceMappingURL=225.70e94944.chunk.js.map