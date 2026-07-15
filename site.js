
const hdr=document.getElementById('hdr');
addEventListener('scroll',()=>hdr&&hdr.classList.toggle('scrolled',scrollY>20));
const hamb=document.getElementById('hamb'),nl=document.getElementById('navlinks');
if(hamb)hamb.addEventListener('click',()=>nl.classList.toggle('open'));
const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
var ef=document.getElementById('enquiry');
if(ef){ef.addEventListener('submit',function(e){e.preventDefault();
  var s=document.getElementById('form-status'); s.style.color='var(--muted)'; s.textContent='Sending…';
  var data=Object.fromEntries(new FormData(ef));
  fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data)})
  .then(function(r){return r.json();}).then(function(j){
    if(j.success){ ef.reset(); s.style.color='#1d7a34'; s.textContent="Thank you — your enquiry has been sent. We'll be in touch shortly."; }
    else { s.style.color='#c0392b'; s.textContent='Sorry, something went wrong. Please email admin@jopet.com.au.'; }
  }).catch(function(){ s.style.color='#c0392b'; s.textContent='Sorry, something went wrong. Please email admin@jopet.com.au.'; });
});}
