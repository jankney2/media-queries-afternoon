console.log('whatup son ')

let header= document.getElementsByTagName('header')[0]

function addNavBack() {
 
  console.log('fired')
 if(!header.classList.contains('navBack')) {
  header.classList.add('navBack')
  console.log(header)
 }
}


//scroll event listener

document.addEventListener('scroll', addNavBack)