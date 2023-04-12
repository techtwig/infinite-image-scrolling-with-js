
const containerOfImage=document.querySelector('.imageContainer');
const loader=document.querySelector('.loader');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

async function getImages(){
  try{
    for(i=0;i<5;i++){
  const height=getRandomIntInclusive(200,600);
  const width=getRandomIntInclusive(200,600);

      await fetch(`https://picsum.photos/${height}/${width}`).
      then(res=>{
        console.log(res.url)
        loader.hidden=true
      const image =  document.createElement('img');
       image.src = `${res.url}`
       image.classList.add("card");
      containerOfImage.appendChild(image)
      })
    }

    
  }
  catch(e){
    alert(`${e.message}`); 
  }
}
 getImages();


window.addEventListener('scroll',()=>{

    const scrollY=window.scrollY;
    const innerHeight=window.innerHeight;
    const total=scrollY + innerHeight
    const offsetHeight=document.body.offsetHeight-1;
     
    if(total>=offsetHeight){
  loader.hidden=false
    console.log('documentElement.scrollHeight',offsetHeight)
    getImages();
    }
})

