import{r as d,j as t}from"./index-iZXMV00A.js";import{u as f,e as _}from"./index-DKFTG8rq.js";const g=()=>{const r=d.useRef(),{handleSubmit:i,formState:c}=f(),{isSubmitting:a}=c;onload=()=>{const e=document.querySelector(".email_form"),s=document.querySelector(".msg_form");e.style.color="black",s.style.color="black"};function m(e,s){s.preventDefault();const o=document.querySelector(".submit_butt"),n=document.querySelector(".success_message");return o.classList.add("submit_butt_anime"),new Promise(l=>{setTimeout(()=>{_.sendForm("service_csf2yrt","template_vz3nrl7",r.current,"vlmZE8H22O2e_lQFj").then(()=>{o.classList.remove("submit_butt_anime"),s.target.reset()}).catch(u=>{console.error("Error:",u)}),l(),n.removeAttribute("hidden")},4e3)})}return onresize=()=>{window.innerHeight<=430?document.body.style.overflowY="scroll":document.body.style.overflowY="hidden"},window.innerHeight<=430?document.body.style.overflowY="scroll":document.body.style.overflowY="hidden",t.jsx("div",{className:"content",children:t.jsxs("div",{className:"content_contact",onAnimationStart:()=>{if(navigator.userAgent.includes("Chrome")&&navigator.userAgent.includes("Mobi")){const e=document.querySelector(".content_contact"),s=document.getElementsByTagName("input"),o=document.getElementsByTagName("textarea");if(e.style.cssText+="height: fit-content !important",e.style.cssText+="bottom: 1.5rem !important",e.style.cssText+="position: relative !important",s.length>0){const n=s[0];n.style.cssText+="width: 15rem !important"}if(o.length>0){const n=o[0];n.style.cssText+="width: 15rem !important"}}},children:[t.jsxs("p",{className:"contact_desc",style:{fontSize:" clamp(.7rem, 2.5vw, .8rem)",marginBottom:"2rem",marginInline:"auto",lineHeight:"1.2rem",whiteSpace:"pre-line",width:"58ch"},children:["To contact me fill the form bellow with",t.jsx("br",{}),"your email address and message, or email",t.jsx("br",{})," me at ",t.jsx("a",{style:{color:"white"},href:"mailto:contactme@marinoscv.website",target:"_blank",children:"contactme@marinoscv.website"})," "]}),t.jsxs("form",{className:"contact_form",ref:r,onSubmit:i(m),children:[t.jsx("div",{children:t.jsx("input",{className:"email_form",type:"email",name:"email",placeholder:"Contact Email",title:"",required:!0,onInput:()=>{const e=document.querySelector(".email_form");e.value.length===0||e.value.trim()==""||e.validity.typeMismatch?e.setCustomValidity("PLease type a valid email"):e.setCustomValidity("")}})}),t.jsx("div",{children:t.jsx("textarea",{className:"msg_form",name:"message",placeholder:"Message",title:"",required:!0,onInput:()=>{const e=document.querySelector(".msg_form");e.value.length===0||e.value.trim()==""?e.setCustomValidity("Please fill this field"):e.setCustomValidity("")}})}),t.jsxs("button",{className:"submit_butt",disabled:a,type:"submit",value:"Send",children:[a,"Send"]}),t.jsx("p",{className:"success_message",hidden:!0,children:"Message Sent"})]})]})})};export{g as default};