const $=(s,p=document)=>p.querySelector(s),$$=(s,p=document)=>[...p.querySelectorAll(s)];const WA='919929562585';
const images={
hairStyle:'https://images.pexels.com/photos/32856321/pexels-photo-32856321.jpeg?cs=srgb&dl=pexels-nobleseed-32856321.jpg&fm=jpg',
bridalMakeup:'https://images.pexels.com/photos/34025154/pexels-photo-34025154.jpeg?cs=srgb&dl=pexels-fahadputhawala-34025154.jpg&fm=jpg',
salonInterior:'https://images.pexels.com/photos/7750117/pexels-photo-7750117.jpeg?cs=srgb&dl=pexels-artbovich-7750117.jpg&fm=jpg',
clinicFacial:'https://images.pexels.com/photos/7446656/pexels-photo-7446656.jpeg?cs=srgb&dl=pexels-gustavo-fring-7446656.jpg&fm=jpg',
hairColour:'https://images.pexels.com/photos/3993290/pexels-photo-3993290.jpeg?cs=srgb&dl=pexels-cottonbro-3993290.jpg&fm=jpg',
spaFacial:'https://images.pexels.com/photos/13899843/pexels-photo-13899843.jpeg?cs=srgb&dl=pexels-hson-13899843.jpg&fm=jpg',
massage:'https://images.pexels.com/photos/31914690/pexels-photo-31914690.jpeg?cs=srgb&dl=pexels-yodi-prod-1772530008-31914690.jpg&fm=jpg',
bride:'https://images.pexels.com/photos/10954264/pexels-photo-10954264.jpeg?cs=srgb&dl=pexels-rohan-dewangan-2844320-10954264.jpg&fm=jpg',
faceMassage:'https://images.pexels.com/photos/5240837/pexels-photo-5240837.jpeg?cs=srgb&dl=pexels-anete-lusina-5240837.jpg&fm=jpg',
lashes:'https://images.pexels.com/photos/4207234/pexels-photo-4207234.jpeg?cs=srgb&dl=pexels-sarb-emanuel-2635471-4207234.jpg&fm=jpg'
};
const colors=[
{name:'Warm Bronze',hex:'#b9825b'},{name:'Rose',hex:'#b96073'},{name:'Plum',hex:'#744d72'},{name:'Emerald',hex:'#207660'},
{name:'Champagne',hex:'#c59a5f'},{name:'Terracotta',hex:'#b45c43'},{name:'Midnight Blue',hex:'#375d82'},{name:'Pearl Grey',hex:'#85817e'}
];
const texts=[
{name:'Signature',k:'Hair · Skin · Spa · Bridal',t:'Beauty, Designed Around You.',p:'Personalised services in a calm, premium studio.'},
{name:'Hair',k:'Cut · Colour · Styling',t:'Hair That Moves Like You Do.',p:'Thoughtful consultation, modern technique and practical upkeep.'},
{name:'Skin',k:'Facials · Care · Consultation',t:'Care for the Skin You Live In.',p:'Professional service selection with clear aftercare guidance.'},
{name:'Spa',k:'Massage · Rituals · Wellness',t:'Step Out of the Noise.',p:'Quiet treatments designed around rest and renewal.'},
{name:'Bridal',k:'Makeup · Hair · Draping',t:'Still You. Beautifully Elevated.',p:'Bridal looks planned around your features, outfit and celebration.'},
{name:'Modern',k:'Salon · Studio · Experience',t:'Your New Look Starts Here.',p:'A premium appointment experience from consultation to aftercare.'},
{name:'Clinic',k:'Skin · Beauty · Professional Care',t:'Consult First. Choose Better.',p:'Understand suitability, process and aftercare before booking.'}
];
const heroStyles=[
{name:'Editorial Hair',className:'hero-01',photo:images.hairStyle,position:'center 40%',color:'#b9825b',text:1},
{name:'Bridal Portrait',className:'hero-02',photo:images.bridalMakeup,position:'center 38%',color:'#b96073',text:4},
{name:'Skin Studio',className:'hero-03',photo:images.clinicFacial,position:'center',color:'#375d82',text:2},
{name:'Hair Colour',className:'hero-04',photo:images.hairColour,position:'center 34%',color:'#b45c43',text:1},
{name:'Ivory Salon',className:'hero-05',photo:images.salonInterior,position:'center',color:'#a87347',text:0},
{name:'Spa Glass',className:'hero-06',photo:images.spaFacial,position:'center',color:'#207660',text:3},
{name:'Bridal Close-Up',className:'hero-07',photo:images.bride,position:'center 28%',color:'#c59a5f',text:4},
{name:'Wellness Cinema',className:'hero-08',photo:images.massage,position:'center',color:'#744d72',text:3},
{name:'Face Ritual',className:'hero-09',photo:images.faceMassage,position:'center',color:'#b9825b',text:2},
{name:'Clinical Minimal',className:'hero-10',photo:images.lashes,position:'center',color:'#85817e',text:6}
];
const services=[
{id:1,category:'Hair',name:'Cut & Finish',duration:'60–90 min',price:'From ₹1,200*',description:'Consultation-led cut, finish and styling guidance.',image:images.hairStyle},
{id:2,category:'Hair',name:'Colour Consultation',duration:'30 min',price:'Consultation',description:'Starting condition, desired result, test options and maintenance.',image:images.hairColour},
{id:3,category:'Hair',name:'Colour & Highlights',duration:'2–5 hrs',price:'From ₹4,500*',description:'Final scope depends on length, technique, product use and starting colour.',image:images.hairColour},
{id:4,category:'Skin',name:'Signature Facial',duration:'60–75 min',price:'From ₹2,400*',description:'A consultation-led facial selected around skin needs and comfort.',image:images.spaFacial},
{id:5,category:'Skin',name:'Skin Consultation',duration:'30 min',price:'Consultation',description:'Discuss goals, suitability, limitations and aftercare before services.',image:images.clinicFacial},
{id:6,category:'Spa',name:'Relaxation Massage',duration:'60–90 min',price:'From ₹2,600*',description:'A calm spa session with pressure preferences discussed in advance.',image:images.massage},
{id:7,category:'Spa',name:'Face & Head Ritual',duration:'45 min',price:'From ₹1,800*',description:'Gentle relaxation service focused on comfort and restoration.',image:images.faceMassage},
{id:8,category:'Bridal',name:'Bridal Trial',duration:'90–150 min',price:'Custom Quote',description:'Look direction, skin prep, outfit coordination and photography review.',image:images.bridalMakeup},
{id:9,category:'Bridal',name:'Wedding-Day Makeup',duration:'Custom',price:'Custom Quote',description:'Makeup, hair, draping and schedule planning for the main event.',image:images.bride},
{id:10,category:'Nails & Grooming',name:'Nail & Hand Care',duration:'45–75 min',price:'From ₹900*',description:'Nail shaping, hand care and finish options.',image:images.salonInterior},
{id:11,category:'Nails & Grooming',name:'Lash Consultation',duration:'30 min',price:'Consultation',description:'Style, suitability, maintenance and aftercare discussion.',image:images.lashes}
];
const prices=[
{name:'Cut & Finish',detail:'Consultation, cut and finish · 60–90 min',price:'From ₹1,200*'},
{name:'Creative Colour',detail:'Price varies by length and technique · 2–5 hrs',price:'From ₹4,500*'},
{name:'Signature Facial',detail:'Service selected after consultation · 60–75 min',price:'From ₹2,400*'},
{name:'Relaxation Massage',detail:'Pressure preference discussed first · 60 min',price:'From ₹2,600*'},
{name:'Bridal Trial',detail:'Look planning, makeup and hair direction',price:'Custom Quote'},
{name:'Wedding-Day Bride',detail:'Makeup, hair, draping and timeline',price:'Custom Quote'}
];
let state={style:0,color:0,text:0,colorLocked:false,textLocked:false,fontLocked:false,auto:true},styleTimer,colorTimer,textTimer;

function rgb(hex){hex=hex.replace('#','');const n=parseInt(hex,16);return[(n>>16)&255,(n>>8)&255,n&255].join(',')}
function setColor(hex,index=null){document.documentElement.style.setProperty('--accent',hex);document.documentElement.style.setProperty('--accent-rgb',rgb(hex));$('#colorPicker').value=hex;if(index!==null)state.color=index}
function setText(i){state.text=(i+texts.length)%texts.length;const x=texts[state.text];$('#heroKicker').textContent=x.k;$('#heroTitle').textContent=x.t;$('#heroText').textContent=x.p;$$('#textList button').forEach((b,n)=>b.classList.toggle('active',n===state.text))}
function setStyle(i,user=false){state.style=(i+heroStyles.length)%heroStyles.length;const x=heroStyles[state.style];$('.hero').className=`hero ${x.className}`;$('#heroImage').style.backgroundImage=`url("${x.photo}")`;$('#heroImage').style.backgroundPosition=x.position;$('#styleName').textContent=`${String(state.style+1).padStart(2,'0')} · ${x.name}`;$$('#styleDots button').forEach((b,n)=>b.classList.toggle('active',n===state.style));$$('#styleList button').forEach((b,n)=>b.classList.toggle('active',n===state.style));if(!state.colorLocked)setColor(x.color,colors.findIndex(c=>c.hex===x.color));if(!state.textLocked)setText(x.text);if(user)restartAuto()}
function restartAuto(){clearInterval(styleTimer);clearInterval(colorTimer);clearInterval(textTimer);if(!state.auto)return;styleTimer=setInterval(()=>setStyle(state.style+1),60000);colorTimer=setInterval(()=>{if(!state.colorLocked){state.color=(state.color+1)%colors.length;setColor(colors[state.color].hex,state.color)}},18000);textTimer=setInterval(()=>{if(!state.textLocked)setText(state.text+1)},24000)}

heroStyles.forEach((x,i)=>{const dot=document.createElement('button');dot.textContent=String(i+1).padStart(2,'0');dot.onclick=()=>setStyle(i,true);$('#styleDots').appendChild(dot);const b=document.createElement('button');b.textContent=x.name;b.onclick=()=>setStyle(i,true);$('#styleList').appendChild(b)});
colors.forEach((c,i)=>{const b=document.createElement('button');b.style.background=c.hex;b.title=c.name;b.setAttribute('aria-label',c.name);b.onclick=()=>setColor(c.hex,i);$('#colorList').appendChild(b)});
texts.forEach((x,i)=>{const b=document.createElement('button');b.textContent=x.name;b.onclick=()=>setText(i);$('#textList').appendChild(b)});

const categories=['All',...new Set(services.map(s=>s.category))];
categories.forEach((c,i)=>{const b=document.createElement('button');b.textContent=c;b.classList.toggle('active',i===0);b.onclick=()=>{renderServices(c);$$('#serviceFilter button').forEach(x=>x.classList.toggle('active',x.textContent===c))};$('#serviceFilter').appendChild(b)});
function renderServices(category='All'){const list=category==='All'?services:services.filter(s=>s.category===category);$('#serviceGrid').innerHTML=list.map(s=>`<article class="service-card reveal visible"><div class="service-image" style="background-image:url('${s.image}')"></div><div class="service-body"><span class="eyebrow">${s.category}</span><h3>${s.name}</h3><p>${s.description}</p><div class="service-meta"><span>${s.price}</span><button data-service="${s.name}">Book · ${s.duration}</button></div></div></article>`).join('');$$('[data-service]').forEach(b=>b.onclick=()=>{selectAppointmentService(b.dataset.service);$('#appointment').scrollIntoView({behavior:'smooth'})})}
services.forEach(s=>{const o=document.createElement('option');o.value=s.name;o.textContent=s.name;$('#appointmentService').appendChild(o)});
function selectAppointmentService(name){$('#appointmentService').value=name}

prices.forEach(p=>{$('#priceList').insertAdjacentHTML('beforeend',`<article class="price-row"><div><h3>${p.name}</h3><p>${p.detail}</p></div><strong>${p.price}</strong></article>`)});

function wa(message){window.open(`https://wa.me/${WA}?text=${encodeURIComponent(message)}`,'_blank')}
$('#appointmentForm').onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget);wa(`Salon appointment request\nName: ${f.get('name')}\nPhone: ${f.get('phone')}\nService: ${f.get('service')}\nSpecialist: ${f.get('specialist')}\nDate: ${f.get('date')}\nTime: ${f.get('time')}\nNotes: ${f.get('notes')}`)};
$('#contactForm').onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget);wa(`Salon website enquiry\nName: ${f.get('name')}\nBusiness: ${f.get('business')}\nPhone: ${f.get('phone')}\nBusiness type: ${f.get('type')}\nRequirement: ${f.get('message')}`)};
$$('[data-package]').forEach(b=>b.onclick=()=>wa(`Please share details for the ${b.dataset.package} package.`));
$$('[data-specialist]').forEach(b=>b.onclick=()=>{selectAppointmentService('Cut & Finish');wa(`I would like to book a consultation with ${b.dataset.specialist}.`)});
$('#bridalGuide').onclick=()=>wa('Please share the bridal services guide, trial process and package scope.');

$('#comparisonRange').oninput=e=>$('#comparisonAfter').style.width=`${e.target.value}%`;

$('#previousStyle').onclick=()=>setStyle(state.style-1,true);$('#nextStyle').onclick=()=>setStyle(state.style+1,true);
$('#customizerToggle').onclick=()=>$('#customizerPanel').classList.toggle('open');
$('#autoToggle').onclick=e=>{state.auto=!state.auto;e.target.textContent=state.auto?'Pause Auto':'Play Auto';restartAuto()};
$('#colorPicker').oninput=e=>setColor(e.target.value);
$('#colorSearch').onchange=e=>{const v=e.target.value.trim().toLowerCase(),found=colors.find(c=>c.name.toLowerCase().includes(v));if(found)setColor(found.hex,colors.indexOf(found));else if(/^#[0-9a-f]{6}$/i.test(v))setColor(v)};
$('#lockColor').onclick=e=>{state.colorLocked=!state.colorLocked;e.target.classList.toggle('locked',state.colorLocked);e.target.textContent=state.colorLocked?'Color Locked':'Lock Color'};
$('#lockText').onclick=e=>{state.textLocked=!state.textLocked;e.target.classList.toggle('locked',state.textLocked);e.target.textContent=state.textLocked?'Text Locked':'Lock Text'};
$('#fontSelect').onchange=e=>document.documentElement.style.setProperty('--font',e.target.value);
$('#fontSearch').onchange=e=>{const v=e.target.value.trim();if(v)document.documentElement.style.setProperty('--font',`${v}, Arial, sans-serif`)};
$('#lockFont').onclick=e=>{state.fontLocked=!state.fontLocked;e.target.classList.toggle('locked',state.fontLocked);e.target.textContent=state.fontLocked?'Font Locked':'Lock Font'};
$('#themeToggle').onclick=e=>{const dark=document.documentElement.dataset.theme!=='dark';document.documentElement.dataset.theme=dark?'dark':'light';e.target.textContent=dark?'Light Mode':'Dark Mode'};
$('#menuButton').onclick=()=>{const n=$('#navLinks');n.classList.toggle('open');$('#menuButton').setAttribute('aria-expanded',n.classList.contains('open'))};$$('#navLinks a').forEach(a=>a.onclick=()=>$('#navLinks').classList.remove('open'));

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.1});$$('.reveal').forEach(el=>observer.observe(el));
renderServices();setStyle(0);restartAuto();