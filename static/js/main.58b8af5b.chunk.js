(this["webpackJsonpdoctor-patient-platform"]=this["webpackJsonpdoctor-patient-platform"]||[]).push([[0],{43:function(e,t,a){e.exports=a(63)},48:function(e,t,a){},49:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},50:function(e,t,a){},51:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),i=a.n(r),s=(a(48),a(49),a(50),a(10)),c=a(18),m=a(19),o=a(16),u=a(15),d=(a(51),a(66)),p=a(68),v=a(65),E=a(69),y=a(67),h=a(33),f=a(36);function N(){var e=Object(d.a)();return l.a.createElement(f.a,{variantColor:"yellow",onClick:function(){return e({title:"\u09b0\u09bf\u09aa\u09cb\u09b0\u09cd\u099f \u099c\u09ae\u09be \u09b9\u09df\u09c7\u099b\u09c7",description:"\u0985\u09a4\u09bf\u09b8\u09a4\u09cd\u09ac\u09b0 \u098f\u0995\u099c\u09a8 \u0987\u09a8\u09cd\u099f\u09be\u09b0\u09cd\u09a8 \u0995\u09bf\u0982\u09ac\u09be \u09aa\u09cd\u09b0\u09ab\u09c7\u09b6\u09a8\u09be\u09b2 \u09a1\u09be\u0995\u09cd\u09a4\u09be\u09b0 \u0986\u09aa\u09a8\u09be\u09b0 \u09b0\u09bf\u09aa\u09cb\u09b0\u09cd\u099f\u099f\u09bf \u09a6\u09c7\u0996\u09c7 \u09a6\u09bf\u09ac\u09c7\u09a8\u0964 \u09b8\u09c7\u099f\u09bf \u09ab\u09bf\u09b0\u09c7 \u098f\u09b2\u09c7 \u0986\u09aa\u09a8\u09be\u09b0 \u09a8\u09cb\u099f\u09bf\u09ab\u09bf\u0995\u09c7\u09b6\u09a8 \u099f\u09cd\u09af\u09be\u09ac\u09c7 \u09a6\u09c7\u0996\u09a4\u09c7 \u09aa\u09be\u09ac\u09c7\u09a8  ",status:"success",duration:9e3,isClosable:!0})}},"\u09aa\u09cd\u09b0\u09c7\u09b0\u09a3 \u0995\u09b0\u09c1\u09a8")}var b=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={entries:[],symp:"",timeDuration:1,timeUnit:"",prevMeds:""},n.submitSymp=n.submitSymp.bind(Object(m.a)(n)),n}return Object(c.a)(a,[{key:"submitSymp",value:function(e){e.preventDefault();var t={symp:this.state.symp,timeDuration:this.state.timeDuration,timeUnit:this.state.timeUnit,prevMeds:this.state.prevMeds},a=this.state.entries;a.push(t),this.setState({symp:"",timeDuration:1,timeUnit:"",prevMeds:"",entries:a})}},{key:"deleteSymp",value:function(e){var t=this.state.entries;t.splice(e,1),this.setState({entries:t})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"report-form"},l.a.createElement("div",{className:"make-report",style:{display:"flex"}},l.a.createElement("p",{className:"make-report-text"},"\u0986\u09aa\u09a8\u09be\u09b0 \u09ae\u09c7\u09a1\u09bf\u0995\u09c7\u09b2 \u09b0\u09bf\u09aa\u09cb\u09b0\u09cd\u099f \u09a4\u09c8\u09b0\u09bf \u0995\u09b0\u09c1\u09a8")),this.state.entries?this.state.entries.map((function(t){return l.a.createElement("div",{className:"symptom"},l.a.createElement("div",{className:"symptom-text-div"},l.a.createElement("p",{className:"symptom-text"},"\u09b0\u09cb\u0997:"),l.a.createElement(E.b,{variantColor:"yellow"},l.a.createElement(E.a,null,t.symp))),l.a.createElement("div",{className:"duration-text-div"},l.a.createElement("p",{className:"duration-text"},"\u09b8\u09ae\u09df\u0995\u09be\u09b2:"),l.a.createElement(E.b,{variantColor:"cyan"},l.a.createElement(E.a,null,t.timeDuration)),l.a.createElement("div",{className:"duration"},l.a.createElement(E.b,{variantColor:"red"},l.a.createElement(E.a,null,t.timeUnit)))),l.a.createElement("div",{className:"medicine-text-div"},l.a.createElement("p",{className:"medicine-text"},"\u0993\u09b7\u09c1\u09a7:"),l.a.createElement(E.b,{variantColor:"green"},l.a.createElement(E.a,null,t.prevMeds))),l.a.createElement(v.a,{className:"delete-symp",icon:"delete",variantColor:"yellow",onClick:function(){return e.deleteSymp(e.state.entries.indexOf(t))}}))})):l.a.createElement("div",null),l.a.createElement("div",{className:"symptom"},l.a.createElement("div",{className:"symptom-text-div"},l.a.createElement("p",{className:"symptom-text"},"\u09b0\u09cb\u0997:"),l.a.createElement(p.a,{className:"symptom-select",placeholder:"\u09b0\u09cb\u0997 \u09a8\u09bf\u09b0\u09cd\u09ac\u09be\u099a\u09a8 \u0995\u09b0\u09c1\u09a8",onChange:function(t){return e.setState({symp:t.target.value})}},l.a.createElement("option",{value:"\u099c\u09cd\u09ac\u09b0"},"\u099c\u09cd\u09ac\u09b0"),l.a.createElement("option",{value:"\u0995\u09be\u09b6\u09bf"},"\u0995\u09be\u09b6\u09bf"),l.a.createElement("option",{value:"\u09ae\u09be\u09a5\u09be\u09ac\u09cd\u09af\u09a5\u09be"},"\u09ae\u09be\u09a5\u09be\u09ac\u09cd\u09af\u09a5\u09be"))),l.a.createElement("div",{className:"duration-text-div"},l.a.createElement("p",{className:"duration-text"},"\u09b8\u09ae\u09df\u0995\u09be\u09b2:"),l.a.createElement(y.c,{className:"number-input",defaultValue:1,min:1,max:366,width:"100px",onChange:function(t){return e.setState({timeDuration:t})}},l.a.createElement(y.d,null),l.a.createElement(y.e,null,l.a.createElement(y.b,null),l.a.createElement(y.a,null))),l.a.createElement("div",{className:"duration"},l.a.createElement(p.a,{className:"duration-select",placeholder:"\u09b8\u09ae\u09df\u0995\u09be\u09b2",onChange:function(t){return e.setState({timeUnit:t.target.value})}},l.a.createElement("option",{value:"\u09a6\u09bf\u09a8"},"\u09a6\u09bf\u09a8"),l.a.createElement("option",{value:"\u09b8\u09aa\u09cd\u09a4\u09be\u09b9"},"\u09b8\u09aa\u09cd\u09a4\u09be\u09b9"),l.a.createElement("option",{value:"\u09ae\u09be\u09b8"},"\u09ae\u09be\u09b8"),l.a.createElement("option",{value:"year"},"\u09ac\u099b\u09b0")))),l.a.createElement("div",{className:"medicine-text-div"},l.a.createElement("p",{className:"medicine-text"},"\u0993\u09b7\u09c1\u09a7:"),l.a.createElement(h.a,{placeholder:"\u09aa\u09c2\u09b0\u09cd\u09ac\u09c7 \u09b8\u09c7\u09ac\u09a8\u0995\u09c3\u09a4 \u0993\u09b7\u09c1\u09a7",onChange:function(t){return e.setState({prevMeds:t.target.value})}})),l.a.createElement(v.a,{className:"add-symp",icon:"add",variantColor:"yellow",onClick:this.submitSymp})),l.a.createElement("div",{className:"buttons",style:{paddingTop:"20px"}},l.a.createElement("div",{className:"submit-button"},l.a.createElement(N,null))))}}]),a}(n.Component),x=a(11),g=a(70);var C=function(){return l.a.createElement(x.a,null,l.a.createElement(g.a,null),l.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.58b8af5b.chunk.js.map