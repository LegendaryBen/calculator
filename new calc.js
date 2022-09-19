function query(a){
  return document.querySelector(a);
};

function create(a){
  return document.createElement(a);
};

function queryAll(a){
  return document.querySelectorAll(a);
};

let sound = query("#sound");
let topscreen = query(".topscreen");
let buttonsection = query(".buttonsection");

for(let i=0;i<4;i++){
  let j = topscreen.appendChild(create("section"));
};

let first = topscreen.children;
let second = first[0];
second.innerHTML = `<img src=sun-lightmode.svg >
<img src=moon-lightmode.svg>`

let buttons = ["AC","Del",'√',"/","1","2","3","*","4","5","6","-","7","8","9","+","00","0",".","="];

for(let i=0;i<buttons.length;i++){
    let j = buttonsection.appendChild(create("div"));
    for(let k=0;k<1;k++){
     let m = j.appendChild(create("a"));
     m.className = "link";
     m.innerHTML = buttons[i];
    }
}

let p = queryAll(".link");
let v = Array.from(p);

function change(){
  for(let s =0;s<v.length;s++){
  v[s].addEventListener("click",solve);
  v[s].style.paddingBottom = "22px";
  v[s].style.paddingTop = "22px";
  v[s].style.paddingLeft = "28px";
  v[s].style.paddingRight = "28px";
  v[s].style.borderRadius = "50%";
};


v[0].style.padding = "22px";
v[1].style.padding = "22px";
v[16].style.padding = "22px";
v[0].style.color = "green";
v[1].style.color = "green";
v[2].style.color = "green";
v[3].style.color = "#F53854";
v[7].style.color = "#F53854";
v[11].style.color = "#F53854";
v[15].style.color = "#F53854";
v[19].style.color = "#F53854";

v[18].style.paddingTop = "21px";
v[18].style.paddingLeft = "30px";
v[18].style.paddingRight = "30px";
v[18].style.paddingBottom = "21px";
};

change();

function solve(e){
  sound.play();
  switch (e.target.innerHTML) {
    case 'AC':
      first[1].innerHTML="";
      first[2].innerHTML="";
      break;
      
    case 'Del':
      first[1].innerHTML= first[1].innerHTML.slice(0,-1);
      break;
      
    case "=":
      try{
       first[2].innerHTML = eval(first[1].innerHTML);
      }catch{
        first[2].innerHTML ="SyntaxError";
      }
      break;
      
      
    case '√':
    let y = prompt("Enter a Number");
    
    function hey(){
      let u = first[2];
      let w = first[1];
      if(isNaN(y)){
        u.innerHTML = "Error";
      }else{
      w.innerHTML = e.target.innerHTML + y;
      u.innerHTML = Math.sqrt(y);
      }
    };
    hey();
    break;
    
    default:
      first[1].innerHTML+=e.target.innerHTML;
  }
};

let img = second.children;
img[0].addEventListener("click",change3);

img[1].addEventListener("click",change2);

function change2(){
  img[0].src ="sun- darkmode.svg";
  img[1].src ="moon-darkmode.svg";
  second.style.backgroundColor="#014031";
  topscreen.style.backgroundColor="#011D16";
  first[1].style.color="white";
  first[2].style.color="white";
  buttonsection.style.backgroundColor="#014031";
  for(let u of v){
    u.style.backgroundColor ="#014031";
  }
    v[0].style.color = "#08EA68";
    v[1].style.color="#08EA68";
    v[2].style.color="#08EA68";
    v[4].style.color="white";
    v[5].style.color="white";
    v[6].style.color="white";
    v[8].style.color="white";
    v[9].style.color="white";
    v[10].style.color="white";
    v[12].style.color="white";
    v[13].style.color="white";
    v[14].style.color="white";
    v[16].style.color="white";
    v[17].style.color="white";
    v[18].style.color="white";
};

function change3(){
  img[0].src = "sun-lightmode.svg";
  img[1].src = "moon-lightmode.svg";
  change();
  v[4].style.color="black";
  v[5].style.color="black";
  v[6].style.color="black";
  v[8].style.color="black";
  v[9].style.color="black";
  v[10].style.color="black";
  v[12].style.color="black";
  v[13].style.color="black";
  v[14].style.color="black";
  v[16].style.color="black";
  v[17].style.color="black";
  v[18].style.color="black";
  buttonsection.style.backgroundColor="#E0E0E0"
  
  for(let u of v){
    u.style.backgroundColor ="#E5E5E5";
  };
  topscreen.style.backgroundColor="#DEDEDE";
  first[0].style.backgroundColor="#E5E5E5";
  first[1].style.color="black";
  first[2].style.color="black";
};