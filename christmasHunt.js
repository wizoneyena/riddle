function showHint(id){
  document.getElementById(id).style.display = "block";
}

function unlock(id){
  const step = document.getElementById(id);
  step.classList.remove("locked");
  step.style.display = "block"; // show the next step
}

async function sha256(str){
  const buf = new TextEncoder().encode(str);
  const hash = await crypto.subtle.digest("SHA-256", buf);
  return [...new Uint8Array(hash)]
    .map(b => b.toString(16).padStart(2,"0"))
    .join("");
}

/* STEP 4 CHECK */
async function checkYear(){
  const input = yearInput.value.trim();
  const h = await sha256(input);
  if(h === "1421ff611c93756cbc675b827ea48e8f3ef11c922b0046364c3953d936ef9394"){
    unlock("step5");
  }
}

/* STEP 5 CHECK */
async function checkStep5(){
  const input = step5Input.value.trim().toUpperCase();
  const h = await sha256(input);
  if(h === "7030e079131fa00df2d4c5a5f6952ce58cb8defb7c01f6769e69669e5ab7aad9"){ 
    unlock("step6");
    document.getElementById("ytLink").href = "https://youtu.be/-S0kCUDyBQ4";
  }
}

/* STEP 6 CHECK */
async function checkStep6(){
  const input = step6Input.value.trim();
  const h = await sha256(input);
  if(h === "1ca9df921014be9c108e675bb687218fee99c4229fdaa9e7e5c7fcd1c3eddaed"){ 
    unlock("step7");
  }
}

/* STEP 7 CHECK */
async function checkStep7(){
  const input = step7Input.value.trim().toUpperCase();
  const h = await sha256(input);
  if(h === "bebadab3a48d2e693892083de207d31ff09e218b7e12f918eccdb507950b6c6e"){ 
    unlock("step8");
  }
}

/* STEP 8 CHECK */
async function checkStep8(){
  const input = step8Input.value.trim();
  const h = await sha256(input);
  if(h === "a0fb596c7d6e78dc422728f997cc1cb6322cf55d4da3d4fa506f22e10167b90f"){
    unlock("step9");
  }
}

/* STEP 9 CHECK */
async function checkStep9(){
  const input = step9Input.value.trim().toUpperCase();
  const h = await sha256(input);
  if(h === "5a2a380d218ec1d8a23df694afee2dc30a7fd5c0ef79bbcac0df4687e20004cd"){
    invokeEnd();
  }
}


function invokeEnd(){
  const finalDiv = document.createElement("div");
  finalDiv.style.marginTop = "40px";
  finalDiv.style.color = "#0f0";
  finalDiv.innerHTML = `
    <p>This puzzle does not finish itself. If only I had the perfect JS interpreter to run _("key"). Try interacting with the page the way developers do.</p>
    <p>"key" is your previous answer without spaces and full upper-case letters.</p>
  `;
  document.body.appendChild(finalDiv);
}

(function(){

  async function sha256(str){
    const buf = new TextEncoder().encode(str);
    const hash = await crypto.subtle.digest("SHA-256", buf);
    return [...new Uint8Array(hash)]
      .map(b => b.toString(16).padStart(2,"0"))
      .join("");
  }


  const _u = "aHR0cHM6Ly9ib3VsZGVyYnVnbGUuY29tL25NM1did0pY";

  const _k = "07ba1531a238e0f930744243a9578e1822e597496e04dd2fa4ccbe5349d4985f";

  function _d(b){
    return atob(b);
  }

  window._ = async function(x){

    if(x === undefined){
      return "This is not automatic. Try calling this function with a parameter.";
    }

    const normalized = x.toUpperCase().replace(/\s+/g,"");
    const h = await sha256(normalized);

    if(h !== _k){
      return "Wrong key.";
    }

    return _d(_u);
  };

})();
