import{S as n,P as o,W as e,T as t,M as a,a as i,b as s,A as d,O as r,c as w,B as c,d as p,e as l,f as m}from"./vendor.4e6ee89d.js";const u=new n,g=new o(75,window.innerWidth/window.innerHeight,.1,1e3),y=new e({canvas:document.querySelector("#bg")});y.setPixelRatio(window.devicePixelRatio),y.setSize(window.innerWidth,window.innerHeight),g.position.setZ(30),y.render(u,g);const f=new t(10,3,16,100),z=new a({color:16737095}),b=new i(f,z);u.add(b);const h=new s(16777215);h.position.set(5,5,5);const j=new d(16777215);u.add(h,j);const x=new r(g,y.domElement);Array(200).fill().forEach((function(){const n=new l(.25,24,24),o=new a({color:16777215}),e=new i(n,o),[t,s,d]=Array(3).fill().map((()=>m.randFloatSpread(100)));e.position.set(t,s,d),u.add(e)}));const A=(new w).load("space.jpg");u.background=A,function n(){requestAnimationFrame(n),b.rotation.x+=.01,b.rotation.y+=.005,b.rotation.z+=.01,x.update(),y.render(u,g)}();const S=(new w).load("me.jpg"),v=new i(new c(3,3,3),new p({map:S}));u.add(v);const P=(new w).load("moon.jpg"),R=(new w).load("normal.jpg"),W=new i(new l(3,32,32),new a({map:P,normalMap:R}));u.add(W),W.position.z=30,W.position.setX(-10),document.body.onscroll=function(){const n=document.body.getBoundingClientRect().top;W.rotation.x+=.05,W.rotation.y+=.075,W.rotation.z+=.05,v.rotation.y+=.01,v.rotation.z+=.01,g.position.z=-.01*n,g.position.x=-2e-4*n,g.position.y=-2e-4*n};
