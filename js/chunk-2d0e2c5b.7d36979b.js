(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2c5b"],{"7fb8":function(e,t,c){"use strict";c.r(t);c("27f1");var n=c("1c96"),a=(c("d9e2"),c("7a23")),r=c("2704"),l=c.n(r),s=c("6be8"),i=c("bae1");const o={class:"container max-w-26rem px-15px mx-auto pb-2rem"},m={class:"text-center relative my-0.5rem"},b=Object(a["createElementVNode"])("img",{class:"h-0.8rem mx-10px",src:l.a,alt:""},null,-1),d={class:"text-primaryColor pr-0.5rem"},j={key:0,class:"text-center text-white/50 my-2rem"},O={class:"my-0.5rem text-primaryColor text-center"},p={class:"flex justify-between items-center my-0.5rem"},u={class:"text-primaryColor text-0.8rem font-bold"},y={class:"flex justify-between items-center my-0.5rem"},f={class:"text-primaryColor text-0.8rem font-bold"},g={class:"flex justify-between items-center my-0.5rem"},w={class:"text-primaryColor text-0.8rem font-bold"},D={class:"flex justify-between items-center my-0.5rem"},x={class:"text-primaryColor text-0.8rem font-bold"},V={class:"flex justify-between items-center my-0.5rem"},E={class:"text-primaryColor text-0.8rem font-bold"},S={class:"flex justify-between items-center my-0.5rem"},v={class:"text-primaryColor text-0.8rem font-bold"};var N={__name:"LevelRewardRank",setup(e){const t=Object(a["inject"])("chainInfo"),c=Object(a["ref"])(!1),r=()=>new Promise((e,t)=>{let c=0;const n=setInterval(()=>{c>50&&(clearInterval(n),t(new Error("timeout"))),window.popRewardInfo?(clearInterval(n),e(window.popRewardInfo)):e([]),c++},100)}),l=Object(a["ref"])([]),N=async()=>{try{c.value=!0;const e=await r();console.log(e.data.logs),l.value=e.data.logs}catch(e){c.value=!1,Object(n["a"])(e.message)}};return Object(a["watch"])([()=>t.isActive,()=>t.isLogin],()=>{t.isActive&&t.isLogin&&N()},{immediate:!0}),(e,t)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[Object(a["createElementVNode"])("div",m,[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.$t("miningView.levelReward")),1),Object(a["createElementVNode"])("button",{class:"absolute -left-0.5rem top-0 flex items-center",onClick:t[0]||(t[0]=t=>e.$router.back())},[b,Object(a["createElementVNode"])("span",d,Object(a["toDisplayString"])(e.$t("back")),1)])]),0===l.value.length?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",j,Object(a["toDisplayString"])(e.$t("noData")),1)):Object(a["createCommentVNode"])("",!0),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(l.value,(t,c)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:c,class:"c-border-box px-0.5rem"},[Object(a["createElementVNode"])("div",O,Object(a["toDisplayString"])(Object(a["unref"])(s["d"])(new Date(t.time).getTime())),1),Object(a["createElementVNode"])("div",p,[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.$t("miningView.angelUsdt"))+" (USDT):",1),Object(a["createElementVNode"])("span",u,Object(a["toDisplayString"])(Object(a["unref"])(s["c"])(t["angelUsdt"],Object(a["unref"])(i["b"]).USDTDecimals)),1)]),Object(a["createElementVNode"])("div",y,[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.$t("miningView.angelUsdtReward"))+" (USDT)::",1),Object(a["createElementVNode"])("span",f,Object(a["toDisplayString"])(Object(a["unref"])(s["c"])(t["angelUsdtReward"],Object(a["unref"])(i["b"]).USDTDecimals)),1)]),Object(a["createElementVNode"])("div",g,[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.$t("miningView.guildUsdt"))+" (USDT)::",1),Object(a["createElementVNode"])("span",w,Object(a["toDisplayString"])(Object(a["unref"])(s["c"])(t["guildUsdt"],Object(a["unref"])(i["b"]).USDTDecimals)),1)]),Object(a["createElementVNode"])("div",D,[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.$t("miningView.guildUsdtReward"))+" (USDT)::",1),Object(a["createElementVNode"])("span",x,Object(a["toDisplayString"])(Object(a["unref"])(s["c"])(t["guildUsdtReward"],Object(a["unref"])(i["b"]).USDTDecimals)),1)]),Object(a["createElementVNode"])("div",V,[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.$t("miningView.nodeUsdt"))+" (USDT)::",1),Object(a["createElementVNode"])("span",E,Object(a["toDisplayString"])(Object(a["unref"])(s["c"])(t["nodeUsdt"],Object(a["unref"])(i["b"]).USDTDecimals)),1)]),Object(a["createElementVNode"])("div",S,[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.$t("miningView.nodeUsdtReward"))+" (USDT)::",1),Object(a["createElementVNode"])("span",v,Object(a["toDisplayString"])(Object(a["unref"])(s["c"])(t["nodeUsdtReward"],Object(a["unref"])(i["b"]).USDTDecimals)),1)])]))),128))]))}};const U=N;t["default"]=U}}]);