(()=>{"use strict";function e(e){e.preventDefault(),e.target,"range"!==e.target.type&&e.target.closest(".calculator__field").querySelector(".calculator__range")}var t=document.getElementById("monthly-payment"),a=document.getElementById("deal-amount"),n=new Intl.NumberFormat("ru-RU");function u(e,u,l,o){l.value=Math.round(e.value/100*u.value);var r=Math.round((u.value-+l.value)*(.035*Math.pow(1.035,o.target.value)/(Math.pow(1.035,o.target.value)-1)));t.value=n.format(r),a.value=n.format(+l.value+o.target.value*r)}function l(e,u,l,o){l.value=Math.round(e.value/100*o.target.value);var r=Math.round((o.target.value-+l.value)*(.035*Math.pow(1.035,u.value)/(Math.pow(1.035,u.value)-1)));t.value=n.format(r),a.value=n.format(+l.value+u.value*r)}function o(e,u,l,o){l.value=Math.round(o.target.value/100*e.value);var r=Math.round((e.value-+l.value)*(.035*Math.pow(1.035,u.value)/(Math.pow(1.035,u.value)-1)));t.value=n.format(r),a.value=n.format(+l.value+u.value*r)}var r=document.querySelectorAll('input[type="range"]'),v=document.querySelectorAll('input[type="number"]'),d=document.querySelector(".button_type_save"),c=document.querySelector(".calculator__form"),i=document.getElementById("percent"),m=document.getElementById("initial-fee"),f=document.getElementById("auto"),g=document.getElementById("paymentRange"),p=document.getElementById("autoRange"),s=document.getElementById("leasing"),E=document.getElementById("leasingRange"),h=document.getElementById("leasing");t.value=n.format(t.value),a.value=n.format(a.value),i.addEventListener("input",(function(e){e.target.value>60&&(e.target.value=60),o(f,h,m,e)})),g.addEventListener("input",(function(e){e.target.value>60&&(e.target.value=60),o(f,h,m,e)})),f.addEventListener("input",(function(e){e.target.value>6e6&&(e.target.value=6e6),l(i,h,m,e)})),p.addEventListener("input",(function(e){e.target.value>6e6&&(e.target.value=6e6),l(i,h,m,e)})),s.addEventListener("input",(function(e){e.target.value>60&&(e.target.value=60),u(i,f,m,e)})),E.addEventListener("input",(function(e){e.target.value>60&&(e.target.value=60),u(i,f,m,e)})),r.forEach((function(t){t.addEventListener("input",e)})),v.forEach((function(t){t.addEventListener("input",e)})),c.addEventListener("submit",(function(e){e.preventDefault()})),d.addEventListener("click",(function(e){e.preventDefault(),d.disabled=!0,r.forEach((function(e){e.disabled=!0})),v.forEach((function(e){e.disabled=!0})),fetch("https://eoj3r7f3r4ef6v4.m.pipedream.net",{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(e){setTimeout((function(e){d.disabled=!1,r.forEach((function(e){e.disabled=!1})),v.forEach((function(e){e.disabled=!1}))}),3e3)})).catch((function(e){console.log(e)}))}))})();