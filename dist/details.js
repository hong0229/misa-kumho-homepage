'use strict';
const categoryPaths={
  apartment:'M5 21V4h14v17M3 21h18M9 8h1m4 0h1M9 12h1m4 0h1M10 21v-5h4v5',
  house:'m3 11 9-8 9 8M5 10v11h14V10M10 21v-7h4v7',
  shop:'M4 10v11h16V10M3 10l2-7h14l2 7M3 10c0 4 4 4 4 0 0 4 5 4 5 0 0 4 5 4 5 0 0 4 4 4 4 0M8 21v-6h8v6',
  officetel:'M5 21V3h10v18M15 9h5v12M3 21h19M9 7h2M9 11h2M9 15h2M9 19h2',
  building:'M4 21V7l8-4v18M12 10l8-4v15M2 21h20M7 9v1m0 4v1m9-4v1m0 4v1',
  factory:'M3 21V11l6-4v4l6-4v14M15 12h6v9M18 12V3h3v9M6 16h2m3 0h1M3 21h18',
  land:'m2 16 10-5 10 5-10 5-10-5ZM12 11V3m-4 4 4-4 4 4M6 18l10-5'
};
function categoryIcon(key){return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="'+categoryPaths[key]+'"/></svg>';}
document.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=categoryIcon(el.dataset.icon));
const propertyServices={
  apartment:{name:'아파트',tag:'APARTMENT · 주력 분야',title:'센트럴자이의 집,<br>단지 안에서 더 자세하게.',description:'미사강변센트럴자이를 중심으로 아파트 매매·전세·월세를 상담합니다. 평형뿐 아니라 동·층·방향과 입주 시기를 함께 살펴봅니다.',types:['매매','전세','월세','매물 의뢰'],list:['희망 평형과 매매·임대 예산','선호 동·층·방향과 필요한 방 수','입주일 또는 매도 희망 시기'],review:'타입별 평면, 수리 상태, 관리비와 비슷한 조건의 거래 사례를 비교합니다.',related:'센트럴자이 상세 안내',link:'#living'},
  house:{name:'주택',tag:'HOUSE & RESIDENCE',title:'나의 생활 방식에 맞는<br>집의 모습을 찾습니다.',description:'단독주택·다가구·다세대 등 주택의 매매와 임대를 상담합니다. 가족 구성과 주차, 필요한 실내외 공간을 먼저 이야기해 주세요.',types:['단독주택','다가구·다세대','매매','전세·월세'],list:['희망 지역과 주택의 종류','방 수·주차·마당 등 필요한 공간','매매·임대 예산과 입주 시기'],review:'건물 현황, 수리 이력, 세대별 이용 공간과 실제 주차 여건을 함께 살펴봅니다.',related:'방문 상담 안내',link:'#location'},
  shop:{name:'상가',tag:'RETAIL & COMMERCIAL · 주력 분야',title:'가게의 시작과 운영,<br>공간의 조건부터 꼼꼼하게.',description:'센트럴자이 단지 내 상가와 미사 생활권의 상가 매매·임대를 상담합니다. 업종, 고객 동선, 필요한 면적을 기준으로 적합한 공간을 함께 살펴봅니다.',types:['단지 내 상가','근린상가','매매','임대'],list:['예정 업종과 필요한 전용면적','보증금·월세 또는 매매 예산','개업 희망일과 선호 층·위치'],review:'업종에 필요한 시설, 출입·주차, 관리비와 임대 조건을 확인하고 권리금 여부를 구분해 살펴봅니다.',related:'상가 현장 방문 문의',link:'#location'},
  officetel:{name:'오피스텔',tag:'OFFICETEL',title:'주거와 업무의 목적에 맞춰,<br>실제 쓰임을 살펴봅니다.',description:'오피스텔의 매매·전세·월세를 상담합니다. 주거 또는 업무 용도, 출퇴근 동선과 매월 부담할 비용을 함께 고려합니다.',types:['매매','전세','월세','주거·업무 상담'],list:['주거·업무 등 이용 목적','희망 면적과 보증금·월 비용','입주 시기와 주차 필요 대수'],review:'건축물의 용도, 실제 사용 현황, 관리비 항목과 주차 조건을 물건별로 확인합니다.',related:'방문 상담 안내',link:'#location'},
  building:{name:'빌딩',tag:'BUILDING',title:'건물 전체의 가치와 운영을<br>함께 살펴보는 상담.',description:'업무용 건물과 수익형 건물의 매매·임대를 상담합니다. 직접 사용하려는 공간과 임대 운영 계획을 구분하여 조건을 정리합니다.',types:['건물 매매','통임대','업무용','보유 건물 상담'],list:['희망 지역과 총 예산 범위','직접 사용·임대 운영 등 목적','규모·주차·승강기 필요 조건'],review:'층별 사용 현황, 임대차 내역, 공실과 유지관리 비용을 자료에 근거해 검토합니다.',related:'건물 상담 방문 안내',link:'#location'},
  factory:{name:'공장',tag:'FACTORY & INDUSTRIAL',title:'사업의 흐름에 맞는<br>작업 공간을 찾습니다.',description:'공장과 관련 작업 공간의 매매·임대를 상담합니다. 설비와 생산 방식, 차량 진입 조건 등 실제 운영에 필요한 사항부터 확인합니다.',types:['공장 매매','공장 임대','작업 공간','이전 상담'],list:['예정 업종과 작업·보관 면적','전력·층고·하중 등 설비 조건','차량 규모·진입 동선과 이전 시기'],review:'공부상 용도와 현장 상태, 해당 업종의 사용 가능 여부와 필요한 인허가 확인 항목을 정리합니다.',related:'사업장 이전 상담 안내',link:'#location'},
  land:{name:'토지',tag:'LAND',title:'땅의 위치에서 이용 목적까지,<br>계획에 맞춰 살펴봅니다.',description:'토지의 매매와 활용 목적에 따른 상담을 진행합니다. 희망 지역, 면적과 예산을 바탕으로 물건별 이용 조건을 확인합니다.',types:['토지 매매','보유 토지 상담','용도 확인','현장 방문'],list:['희망 지역과 필요한 면적','건축·사업 등 토지 이용 목적','총 예산과 거래 희망 시기'],review:'지목·용도지역, 도로 접면과 경계, 현황을 구분해 살펴보고 공식 서류로 확인할 사항을 정리합니다.',related:'토지 현장 상담 안내',link:'#location'}
};
function setupTabs(buttons,activate){buttons.forEach((button,index)=>{button.addEventListener('click',()=>activate(button));button.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%buttons.length;else if(event.key==='ArrowLeft')next=(index-1+buttons.length)%buttons.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=buttons.length-1;if(next!==undefined){event.preventDefault();activate(buttons[next]);buttons[next].focus();}});});}
function setSelection(buttons,active){buttons.forEach(button=>{button.setAttribute('aria-selected',String(button===active));button.tabIndex=button===active?0:-1;});}
const propertyTabs=[...document.querySelectorAll('[data-service]')];
function selectProperty(button){
  const key=button.dataset.service;const data=propertyServices[key];setSelection(propertyTabs,button);
  document.querySelector('#service-panel').setAttribute('aria-labelledby',button.id);
  document.querySelector('#service-emblem').innerHTML=categoryIcon(key);
  document.querySelector('#service-tag').textContent=data.tag;
  document.querySelector('#service-title').innerHTML=data.title;
  document.querySelector('#service-description').textContent=data.description;
  document.querySelector('#service-check-title').textContent=data.name+' 상담 전, 알려주세요';
  document.querySelector('#service-list').replaceChildren(...data.list.map(text=>{const item=document.createElement('li');item.textContent=text;return item;}));
  document.querySelector('#service-types').replaceChildren(...data.types.map(text=>{const item=document.createElement('span');item.textContent=text;return item;}));
  document.querySelector('#service-review').textContent=data.review;
  document.querySelector('#service-call').textContent=data.name+' 상담하기';
  document.querySelector('#service-related').textContent=data.related;
  document.querySelector('#service-related').setAttribute('href',data.link);
}
setupTabs(propertyTabs,selectProperty);selectProperty(propertyTabs[0]);
const livingTabs=[...document.querySelectorAll('[data-detail]')];
function selectLiving(button){setSelection(livingTabs,button);document.querySelectorAll('.detail-panel').forEach(panel=>{panel.hidden=panel.id!==button.getAttribute('aria-controls');});}
setupTabs(livingTabs,selectLiving);
const sizeDescriptions={
  35:['35평 · 생활에 필요한 공간부터','필요한 방 수와 가구 배치를 정리하고 예산·입주 조건을 함께 비교합니다. 제공 추정 시세는 아래 가격 자료에서 확인할 수 있습니다.'],
  37:['37평 · 전용 타입까지 함께 비교','제공 거래 자료에는 96A·96B·96C 타입이 등장합니다. 같은 평형에서도 방 배치와 수납, 방향을 실제 도면으로 비교합니다.'],
  39:['39평 · 면적과 구조를 함께 비교','37평과의 면적 차이뿐 아니라 실제 방 배치, 주방 동선과 수납을 비교합니다. 원하는 타입의 도면과 현장 확인을 요청해 주세요.'],
  51:['51평 · 필요한 공간과 관리 계획','가족별 공간과 활용 목적을 정한 뒤 실제 구조와 관리비를 확인합니다. 제공 브리핑에는 51평 가격이 없어 개별 상담으로 안내합니다.']
};
document.querySelectorAll('[data-size]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-size]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));const data=sizeDescriptions[button.dataset.size];document.querySelector('#size-title').textContent=data[0];document.querySelector('#size-copy').textContent=data[1];}));
const slideTitles=['미사강변 센트럴자이','브리핑 목차','사무소 소개','사무소 현장','대표 소개','연락처와 오시는 길','단지 소개','단지 개요','물건 소재지','주변 생활환경','교통과 생활 동선','단지 전경','조경과 산책 환경','단지 조경 사진','단지 평면도 예시','초등학교','중학교','고등학교','가격 자료 안내','평형별 거래량','평형별 매매·전세 시세','37평 매매 실거래 5건','37평 거래가와 매물 호가','평형별 전세가율','37평 매매 시세 변화','개발계획 목차','개발계획 위치도','개발계획 · 9호선 연장','송파하남선·교산지구','K-컬처·캠프콜번','현장·상담 목차','브리핑 요약','현장 방문에서 볼 부분','매수 상담 체크리스트','자료 출처','자료 출처 · 학군·개발계획','사무소 연락처'];
const briefingDialog=document.querySelector('#briefing-dialog');
const briefingSelect=document.querySelector('#briefing-select');
let briefingPage=1;
slideTitles.forEach((title,index)=>{const option=document.createElement('option');option.value=String(index+1);option.textContent=(index+1)+'쪽 · '+title;briefingSelect.append(option);});
function renderBriefingPage(){const title=slideTitles[briefingPage-1];const url='assets/briefing/slide-'+String(briefingPage).padStart(2,'0')+'.webp';document.querySelector('#briefing-title').textContent=title;const img=document.querySelector('#briefing-image');document.querySelector('#briefing-load-error').hidden=true;img.src=url;img.alt=briefingPage+'쪽 · '+title+' · 2026년 11월 제공 자료';document.querySelector('#briefing-original').href=url;document.querySelector('#briefing-count').textContent=briefingPage+' / '+slideTitles.length;briefingSelect.value=String(briefingPage);document.querySelector('#briefing-prev').disabled=briefingPage===1;document.querySelector('#briefing-next').disabled=briefingPage===slideTitles.length;}
document.querySelector('#briefing-image').addEventListener('error',()=>document.querySelector('#briefing-load-error').hidden=false);
document.querySelectorAll('[data-briefing]').forEach(button=>button.addEventListener('click',()=>{briefingPage=Number(button.dataset.briefing);renderBriefingPage();briefingDialog.showModal();document.body.classList.add('modal-open');}));
function moveBriefing(delta){const next=Math.max(1,Math.min(slideTitles.length,briefingPage+delta));if(next!==briefingPage){briefingPage=next;renderBriefingPage();}}
document.querySelector('#briefing-prev').addEventListener('click',()=>moveBriefing(-1));
document.querySelector('#briefing-next').addEventListener('click',()=>moveBriefing(1));
briefingSelect.addEventListener('change',()=>{briefingPage=Number(briefingSelect.value);renderBriefingPage();});
briefingDialog.addEventListener('keydown',event=>{if(event.target===briefingSelect)return;if(event.key==='ArrowLeft'){event.preventDefault();moveBriefing(-1);}if(event.key==='ArrowRight'){event.preventDefault();moveBriefing(1);}});
