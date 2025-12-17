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
  if(h === "4c3aada37cf7fd3819b2da502a15f78f7ce5a2ce6d584b630344ff00dffc74ac"){
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
  if(h === "e632bc0b82b86d1160f355c955d313e2922f7af54348b5d09d53992c77adf46d"){ 
    unlock("step8");
  }
}

/* STEP 8 CHECK */
async function checkStep8(){
  const input = step8Input.value.trim().toUpperCase();
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
    // final step, nothing to unlock
  }
}
