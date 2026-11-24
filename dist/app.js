'use strict';
const menuButton=document.querySelector('.menu-toggle');
const navigation=document.querySelector('#site-nav');
function closeMenu(){navigation.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','메뉴 열기');}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';navigation.classList.toggle('is-open',open);menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');});
navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();}});
window.matchMedia('(min-width:901px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
let toastTimer;
function toast(text){const el=document.querySelector('#toast');el.textContent=text;el.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('visible'),3500);}
document.querySelector('#copy-address').addEventListener('click',async()=>{const address='경기도 하남시 미사강변대로 95-2, 미사강변센트럴자이 상가 104호';try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(address);}else{const text=document.createElement('textarea');text.value=address;text.style.cssText='position:fixed;left:-9999px;top:0';document.body.append(text);text.select();const copied=document.execCommand('copy');text.remove();if(!copied)throw new Error('Clipboard unavailable');}toast('사무소 주소를 복사했습니다.');}catch{toast('주소를 직접 복사해 주세요: '+address);}});
const photos=[
  {file:'garden-courtyard.jpg',title:'집 앞에서 만나는 계절',description:'정원과 주거동이 어우러진 풍경'},
  {file:'entrance.jpg',title:'일상의 시작과 끝',description:'미사강변센트럴자이 실제 단지 입구'},
  {file:'autumn-leaves.jpg',title:'가을빛을 가까이',description:'노란 잎과 다양한 식재가 채우는 단지의 가을'},
  {file:'water-garden.jpg',title:'잠시 쉬어가는 풍경',description:'돌과 초록이 둘러싼 단지 안 수경 공간'},
  {file:'residences.jpg',title:'집과 정원 사이',description:'주거동 사이로 이어지는 가을 풍경'},
  {file:'garden-towers.jpg',title:'초록 너머의 우리 집',description:'정원에서 올려다본 미사강변센트럴자이 전경'}
];
const photoDialog=document.querySelector('#photo-dialog');let photoIndex=0;let photoSequence=photos.map((_,index)=>index);
function renderPhoto(){const photo=photos[photoIndex];document.querySelector('#photo-title').textContent=photo.title;document.querySelector('#photo-description').textContent=photo.description+' · 사무소 제공 현장 사진';document.querySelector('#photo-count').textContent=(photoSequence.indexOf(photoIndex)+1)+' / '+photoSequence.length;const image=document.createElement('img');image.src='assets/recent/'+photo.file;image.alt=photo.description;image.width=1400;image.height=1050;document.querySelector('#photo-view').replaceChildren(image);}
document.querySelectorAll('[data-photo]').forEach(button=>button.addEventListener('click',()=>{photoIndex=Number(button.dataset.photo);photoSequence=button.closest('.gallery-mosaic')?[...document.querySelectorAll('.gallery-mosaic [data-photo]:not([hidden])')].map(el=>Number(el.dataset.photo)):photos.map((_,index)=>index);renderPhoto();photoDialog.showModal();document.body.classList.add('modal-open');}));
function stepPhoto(direction){const index=photoSequence.indexOf(photoIndex);photoIndex=photoSequence[(index+direction+photoSequence.length)%photoSequence.length];renderPhoto();}
document.querySelector('#photo-prev').addEventListener('click',()=>stepPhoto(-1));
document.querySelector('#photo-next').addEventListener('click',()=>stepPhoto(1));
photoDialog.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'){event.preventDefault();stepPhoto(-1);}if(event.key==='ArrowRight'){event.preventDefault();stepPhoto(1);}});
document.querySelectorAll('dialog').forEach(dialog=>{dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});});
