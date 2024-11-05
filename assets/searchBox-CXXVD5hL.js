import{j as e,I as f,G as g,r as n,u as C}from"./index-DA1pWqlX.js";import{C as j}from"./index-BuZeyuuq.js";const b=({handleInputChange:t,city:r})=>e.jsxs("div",{className:"relative w-full flex justify-center ",children:[e.jsx(f,{className:"absolute left-10 sm:left-12 xl:left-16 2xl:left-[5%] top-1/2 transform -translate-y-1/2 text-slate-400 text-lg"}),e.jsx("input",{className:"w-11/12   pl-10 border-2 border-grey-400 rounded-md py-2 px-3 lg:px-10 text-gray-800 leading-tight placeholder-slate-400 shadow-lg focus:outline-none",id:"search",type:"text",placeholder:"Search...",value:r,onChange:t})]});function y(t){return g({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"},child:[]}]})(t)}const v=({onChange:t})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"badge bg-slate-500 badge-sm cursor-pointer absolute right-1 top-2 py-3",onClick:t,children:e.jsx(y,{className:"text-slate-50 font-bold "})})}),E=()=>{const[t,r]=n.useState(""),[o,c]=n.useState([]),d="7ab4338a56030b82d25ba8a78b578696",{handleChange:h,catchValue:x,content:w}=C(),p=async s=>{if(s.length>0)try{const l=await(await fetch(`https://api.openweathermap.org/data/2.5/find?q=${s}&type=like&sort=population&cnt=10&appid=${d}`)).json();console.log("Data fetched:",l);const m=l.list.map(i=>({name:i.name,country:i.sys.country}));c(m)}catch(a){console.error("Erreur lors de la récupération des villes:",a)}else c([])};n.useEffect(()=>{p(t)},[t]);const u=s=>{const a=s.target.value;r(a)};return e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"fixed w-full lg:w-9/12 lg:top-[5%] bg-white min-screen z-50 flex flex-col rounded-lg h-screen lg:max-h-[80%]  border shadow-md",children:[e.jsx(v,{onChange:h}),e.jsx("h3",{className:"mt-12 mb-2 ms-5 font-medium lg:text-sm",children:"Rechercher votre prévision météo"}),e.jsx(b,{handleInputChange:u,city:t}),e.jsxs("ul",{className:"flex flex-col mt-5",children:[e.jsx("li",{className:"bg-sky-400 py-2 text-slate-50 ps-2",children:"EMPLACEMENTS"}),o.length>0?o.map((s,a)=>e.jsxs("li",{onClick:l=>x(l),className:"py-2 w-11/12 border-b-2 cursor-pointer text-sm px-2 flex gap-1 items-center",children:[e.jsx(j,{}),`${s.name}, ${s.country}`]},a)):e.jsx("li",{className:"py-2 w-11/12 border-b-2 text-sm px-3",children:"Aucune ville trouvée"})]})]})})};export{E as default};
//# sourceMappingURL=searchBox-CXXVD5hL.js.map
