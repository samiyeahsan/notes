function happyMonday(){

}


// Here is a "normal" function using try/catch
try {
  const noway = happyMonday()
  console.log(noway)
} catch(err){
  console.log(err)
}


// Here is a inquirer prompt() call with then() blocks using a catch() block at the end
inquirer.prompt([

]).then( responses => {

}).catch(err => {

})


// Here is a fetch call with then() blocks using a catch() block at the end
fetch(".....")
  .then( resp => resp.json() )
  .then( data => {
    // put data on the page
  })
  .catch(err => {

  })

// Here is an async/await using try/catch
async function doSomething(){
  try {
    const resp = await fetch("....")
    const data = await resp.json()
  } catch(err){

  }
}