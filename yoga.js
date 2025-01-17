function show() {
    let showBar=document.getElementById('menu-bar')
    showBar.setAttribute('class','hide')
    let hideBar=document.getElementById('cross-bar')
    hideBar.setAttribute('class','show')
    
    let list=document.getElementById('opt')
    let res=list.getAttribute('class');
    if(res=='hide'){
         list.setAttribute('class','show')
    }
 }
 
 function hide(){
     let showBar=document.getElementById('menu-bar')
     showBar.setAttribute('class','show')
     let hideBar=document.getElementById('cross-bar')
     hideBar.setAttribute('class','hide')
 
     let list=document.getElementById('opt')
     let res=list.getAttribute('class');
     if(res=='show')
          list.setAttribute('class','hide')
  
 }
 
 
 window.onscroll=()=>{
     //when will scrollbar down then navbar will hide
     let tog=document.getElementById('opt')
     tog.setAttribute('class','hide');
    
    //and then menu-icon will shown in front
     let nav=document.getElementById('menu-bar');
     nav.setAttribute('class','show');
 
     //and cross icon will hide but menu icon are shown in front
     let cross=document.getElementById('cross-bar')
     cross.setAttribute('class','hide');
     
 }

 
 