const PASSWORD_HASH="b9daf3d1eaa5b3f14b61d66b08344d0013c56d51853dc29c1fb9dcadf56170e1";
async function requireAccess(){
 const gate=document.getElementById("gate"), app=document.getElementById("app");
 if(!gate||!app)return;
 gate.hidden=false; app.hidden=true;
 while(true){
  const value=prompt("Enter password to open Priv I Kirumi:");
  if(value===null){gate.innerHTML="<h2>Access cancelled</h2>";return;}
  const bytes=new TextEncoder().encode(value);
  const digest=await crypto.subtle.digest("SHA-256",bytes);
  const hash=[...new Uint8Array(digest)].map(x=>x.toString(16).padStart(2,"0")).join("");
  if(hash===PASSWORD_HASH){gate.hidden=true;app.hidden=false;return;}
  alert("Incorrect password.");
 }
}
document.addEventListener("DOMContentLoaded",requireAccess);