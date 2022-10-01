const animeListData=[
     'Attack on titan','Demon slayer','Death note','Naruto','Fruits Basket: Prelude',
     'Spy x Family','Tomodachi Game',' Dolls Frontline','Fullmetal Alchemist: Brotherhood',
     
]

const autoCompelet=document.getElementById('autocomplete')

autoCompelet.addEventListener('input',(e)=>{
  
/**
 * first we have to show all 
 * array data while we start typing
 */

if(e.target.value.length <1){
     console.log('hi')
     let resultData= animeListData.map((el) =>{
          return `<li>${el}</li>`
     })
    
          document.getElementById('result').innerHTML=resultData.join('')

   
}else{
     let result =animeListData.filter((el) => el.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
     let resultData= result.map((el) =>{
          return `<li>${el}</li>`
     })
     if(resultData.length ===0){
          document.getElementById('result').innerHTML=`<li>Search Not Found</li>`
     }else{
          document.getElementById('result').innerHTML=resultData.join('')
     }
     
}
console.log(e.target.value)

/**
 * if data enter data is there filter it out
 */



})


