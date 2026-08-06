const products={terra:{title:'Terra Lounge',category:'Seating collection',material:'Bouclé, walnut & brass',space:'Residences & suites',image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=90',description:'A low, generous silhouette with the easy confidence of a piece that has always belonged. Terra is made for the conversations that stretch past midnight.'},arca:{title:'Arca Table',category:'Dining collection',material:'Travertine & smoked oak',space:'Homes & hospitality',image:'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1400&q=90',description:'A sculptural gathering point where hand-selected stone meets softened geometry. Made for the rituals that bring everyone back to the table.'},sol:{title:'Sol Chair',category:'Occasional collection',material:'Mohair, oak & bronze',space:'Reading rooms & lounges',image:'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=90',description:'An invitation to pause. Sol pairs a deeply comfortable seat with a compact, architectural profile and a quietly tactile finish.'},nook:{title:'Nook Bed',category:'Rest collection',material:'Linen, oak & natural latex',space:'Private retreats',image:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=90',description:'Softly structured and quietly indulgent, Nook creates a room within a room. A sanctuary whose details only get better the closer you look.'}};
const modal=document.querySelector('#product-modal'),cursor=document.querySelector('.cursor'),header=document.querySelector('.site-header');
window.addEventListener('load',()=>document.body.classList.add('loaded'));
document.querySelectorAll('.collection-card').forEach(card=>card.addEventListener('click',()=>{const p=products[card.dataset.product];['img','title','category','description','material','space'].forEach(k=>{const node=document.querySelector(`#modal-${k}`);if(k==='img'){node.src=p.image;node.alt=p.title}else node.textContent=p[k]});modal.showModal()}));
// ── Modal close handlers ────────────────────────────────────────────────────
document.querySelector('.modal-close').addEventListener('click',()=>modal.close());
document.querySelector('.modal-enquire').addEventListener('click',()=>modal.close());
modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});

// ── Focus trap for the product modal ───────────────────────────────────────
// Keeps keyboard focus contained inside the dialog while it is open,
// and returns focus to the triggering card when the dialog closes.
let _modalTrigger=null;
const FOCUSABLE='a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])';
function trapFocus(e){
  if(!modal.open)return;
  const nodes=[...modal.querySelectorAll(FOCUSABLE)].filter(n=>!n.closest('[hidden]'));
  if(!nodes.length)return;
  const first=nodes[0],last=nodes[nodes.length-1];
  if(e.key==='Tab'){
    if(e.shiftKey){if(document.activeElement===first){e.preventDefault();last.focus()}}
    else{if(document.activeElement===last){e.preventDefault();first.focus()}}
  }
}
document.querySelectorAll('.collection-card').forEach(card=>{
  card.addEventListener('click',()=>{_modalTrigger=card});
});
modal.addEventListener('keydown',trapFocus);
modal.addEventListener('close',()=>{if(_modalTrigger){_modalTrigger.focus();_modalTrigger=null}});
// Move focus into the modal when it opens so screen readers announce it
const _origShowModal=HTMLDialogElement.prototype.showModal;
HTMLDialogElement.prototype.showModal=function(){_origShowModal.call(this);const btn=this.querySelector('.modal-close');if(btn)btn.focus()};
if(matchMedia('(pointer:fine)').matches){document.addEventListener('mousemove',e=>{cursor.style.left=`${e.clientX}px`;cursor.style.top=`${e.clientY}px`});document.querySelectorAll('a,button,input').forEach(el=>{el.addEventListener('mouseenter',()=>cursor.classList.add('is-active'));el.addEventListener('mouseleave',()=>cursor.classList.remove('is-active'))})}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.14});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open);menu.textContent=open?'Close':'Menu'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu'}));
document.querySelector('.back-top').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#newsletter').addEventListener('submit',e=>{e.preventDefault();const f=e.currentTarget;f.querySelector('.form-message').textContent='Thank you. Your first H&H note is on its way.';f.reset()});
const materialNotes={Oak:'Warm, finely grained, and beautiful with age.',Travertine:'A quiet, geological surface—each cut entirely individual.',Leather:'Supple from the start; more personal with every year.',Bronze:'Subtle lustre, hand-brushed to catch the changing light.'};document.querySelectorAll('.material-list button').forEach(b=>b.addEventListener('click',()=>{document.querySelector('.material-note').textContent=materialNotes[b.dataset.material];document.querySelectorAll('.material-list button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected')}));
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>60),{passive:true});
const progress=document.querySelector('.scroll-progress i'),parallax=document.querySelector('.parallax-image'),heroImage=parallax.querySelector('img');let scrollTicking=false;window.addEventListener('scroll',()=>{if(scrollTicking)return;scrollTicking=true;requestAnimationFrame(()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.height=`${Math.max(0,scrollY/max)*100}%`;const rect=parallax.getBoundingClientRect();if(rect.bottom>0&&rect.top<innerHeight)heroImage.style.transform=`scale(1.08) translateY(${Math.max(-18,Math.min(18,rect.top*.035))}px)`;scrollTicking=false})},{passive:true});
if(matchMedia('(pointer:fine)').matches){document.querySelectorAll('.collection-card').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${y*-5}deg) rotateY(${x*7}deg) translateY(-5px)`});card.addEventListener('pointerleave',()=>card.style.transform='')});parallax.addEventListener('pointermove',e=>{const r=parallax.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;parallax.style.transform=`perspective(1200px) rotateX(${y*-2}deg) rotateY(${x*2}deg)`});parallax.addEventListener('pointerleave',()=>parallax.style.transform='')}
const film=document.querySelector('.scroll-film'),filmFrame=document.querySelector('.film-frame'),filmStatus=document.querySelector('.film-status');if(!matchMedia('(prefers-reduced-motion: reduce)').matches){const filmObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){film.play().then(()=>{filmFrame.classList.add('is-playing');filmStatus.lastChild.textContent=' Film playing'}).catch(()=>{})}else{film.pause();filmFrame.classList.remove('is-playing');filmStatus.lastChild.textContent=' Film paused'}}),{threshold:.55});filmObserver.observe(film)}
