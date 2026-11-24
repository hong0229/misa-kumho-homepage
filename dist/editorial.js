'use strict';
const heroScenes={
  garden:{file:'garden-courtyard.jpg',label:'THE GARDEN',caption:'집 앞에서 만나는 계절',alt:'미사강변센트럴자이 아파트 사이로 펼쳐진 실제 정원과 가을 나무'},
  entrance:{file:'entrance.jpg',label:'THE ENTRANCE',caption:'일상의 시작과 끝, 센트럴자이',alt:'미사강변센트럴자이 로고가 있는 실제 단지 입구'},
  water:{file:'water-garden.jpg',label:'THE WATER GARDEN',caption:'초록 사이, 잠시 쉬어가는 풍경',alt:'미사강변센트럴자이의 돌과 식재로 둘러싸인 실제 수경 공간'}
};
document.querySelectorAll('[data-scene]').forEach(button=>button.addEventListener('click',()=>{
  const data=heroScenes[button.dataset.scene];
  document.querySelectorAll('[data-scene]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  const img=document.querySelector('#hero-scene-image');img.src='assets/recent/'+data.file;img.alt=data.alt;
  document.querySelector('.scene-kicker').textContent=data.label;document.querySelector('#hero-scene-caption').textContent=data.caption;
}));
document.querySelectorAll('[data-gallery-filter]').forEach(button=>button.addEventListener('click',()=>{
  const filter=button.dataset.galleryFilter;
  document.querySelectorAll('[data-gallery-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  let count=0;document.querySelectorAll('.gallery-mosaic [data-photo-category]').forEach(card=>{card.hidden=filter!=='all'&&card.dataset.photoCategory!==filter;if(!card.hidden)count++;});
  document.querySelector('.gallery-mosaic').classList.toggle('is-filtered',filter!=='all');
  document.querySelector('#gallery-status').textContent=(filter==='all'?'실제 현장 사진':filter==='garden'?'조경·산책 사진':'단지 전경 사진')+' '+count+'장';
}));
