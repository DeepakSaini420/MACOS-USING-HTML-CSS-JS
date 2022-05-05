const input = document.getElementById('ip');
const sr =document.getElementById('sr');
const ob = document.getElementById('c1');
const min = document.getElementById('c3');
const br = document.getElementById('browser');
const saf = document.getElementById('safari');
const player = document.getElementById('ply');
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const terminal = document.getElementById('terminal');
const itune = document.getElementById('it');
const music = document.getElementById('msic');
const term= document.getElementById('terminal');
const comamand = document.getElementById('written');
var i=0;
var j=0;
var k=0;
var m=0;
saf.addEventListener('click',()=>{
    if(br.style.display==='block'){
        br.style.display='none';
    }else{
        br.style.display='block';
    }
})
s1.addEventListener('click',()=>{
    if(i==0){
        player.setAttribute('src','Alec Benjamin - Let Me Down Slowly [Official Music Video].mp3')
        i++;
    }else{
        player.setAttribute('src','');
        i=0
    }
})
s2.addEventListener('click',()=>{
    if(j==0){
        player.setAttribute('src','yt1s.com - Serena  Safari Lyrics.mp3')
        j++;
    }else{
        player.setAttribute('src','');
        j=0
    }
})
s3.addEventListener('click',()=>{
    if(k==0){
        player.setAttribute('src','Charlie Puth - Attention [Official Video].mp3')
        k++;
    }else{
        player.setAttribute('src','');
        k=0
    }
})
s4.addEventListener('click',()=>{
    if(m==0){
        player.setAttribute('src','y2mate.com - Alan Walker Fade  Background music.mp3')
        m++;
    }else{
        player.setAttribute('src','');
        m=0
    }
})
a1.addEventListener('click',()=>{
    itune.style.visibility='hidden';
    player.setAttribute('src','');
})
a3.addEventListener('click',()=>{
    itune.style.visibility='hidden';
})
music.addEventListener('click',()=>{
    if(itune.style.visibility==='visible'){
        itune.style.visibility='hidden';
    }else{
        itune.style.visibility='visible';
    }
})
min.addEventListener('click',()=>{
    br.style.display="none";
})
ob.addEventListener('click',()=>{
    br.style.display='none';
    sr.innerHTML='';
    input.value = '';
})
window.addEventListener('keydown',(e)=>{
    if(input.value!=''){
        if(e.keyCode===13){
            var vl = input.value;
            sr.style.backgroundImage='';
            sr.innerHTML=`<iframe src='https://www.google.com/webhp?q=${vl}&igu=1'></iframe>`
        }
    }
    
})
var string =[];
var x = [];
var insa = ['fds','sdf','sd']
window.addEventListener('keydown',(e)=>{
    // console.log(e);
    if(term.style.display!=='none'){
        string.push(e.key);
        if(e.keyCode===8){
            comamand.innerText='';
            string=[];
            console.log(string);
        }if(e.key==='Enter'){
            console.log("HEllo");
            s=string.join('');
            console.log(j);
            if(s==="lsEnter"){
                document.getElementById('ans').innerText='No Element Found In Directory';
            }else if(s==="clearEnter"){
                document.getElementById('ans').innerText="";
            }else if(s===`touch ${string[2]}Enter`){
                
            }
        }else{
            s=string.join('');
            comamand.innerText = s; 
        }
    }
})
t1.addEventListener('click',()=>{
    if(document.getElementById('ter1').style.display==='block'){
        document.getElementById('ter1').style.display='none';
    }else{
        document.getElementById('ter1').style.display='block';
    }
})