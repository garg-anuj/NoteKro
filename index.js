let Fname = document.querySelector('#Fname')
let Lname = document.querySelector('#Lname')
let clickBtn = document.querySelector('#submitbtn')
// let form = document.querySelector('#form')

let arrList = JSON.parse(localStorage.getItem("userData"));

show()
clickBtn.addEventListener('click', submitBtn)
function createInput() { localStorage.removeItem("userData"); show() }


function setLocalStorage() {

  // let arrList = JSON.parse(localStorage.getItem('userData'));
  let showData = document.querySelector("#show");
  let nodeHtml = ''


  if (arrList) {
    arrList.map((ele, id) => {
      nodeHtml +=
        ` <div id="content">
                    <div><i class="fa-regular fa-eye"></i></div>
                  <div class="textItem"><p>${ele.name} ${ele.surName} </p></div>
                  <div>
                    <button class="btns" id="edit" onClick='editBtn(${id})'> <i class="fa-regular fa-pen-to-square"> </i> </button>
                    <button class="btns" id="del" onClick='delBtn(${id})' > <i class="fa-solid fa-trash"></i></button>
                  </div>
                </div>   `


    })
    showData.innerHTML = nodeHtml
  }
  else {
    console.log('nothing to show ')
    showData.innerHTML =
      `
     <div id="content">
            <div><i class="fa-regular fa-eye"></i></div>
          <div class="textItem"><p>Nothing To show Add Item</p></div>
        </div>
        `
  }
  Fname.value = ""
  Lname.value = ""
}


function submitBtn(e) {
  e.preventDefault()
  // let arrList = JSON.parse(localStorage.getItem("userData")); //initalyy yeah null Rehta hai
  let arrData = {
    name: `${Fname.value}`,
    surName: `${Lname.value}`
  }

  if (Fname.value == '' && Lname.value == '') {
    console.log('fill the input')

  }
  else if (arrList === null) {
    // console.log('yea abhi null vlue hai')
    let arrList = [];
    arrList.push(arrData)
    localStorage.setItem("userData", JSON.stringify(arrList));
    show()
  }
  else {
    // console.log('yeab abhi null nhi hai');
    arrList.push(arrData)
    localStorage.setItem("userData", JSON.stringify(arrList));
    show()
  }
}




function delBtn(id) {
  // let arrList = JSON.parse(localStorage.getItem('userData'));
  arrList.splice(id, 1)
  console.log(arrList)
  localStorage.setItem('userData', JSON.stringify(arrList))
  show()
}


function editBtn(id) {
 
  // let arrList = JSON.parse(localStorage.getItem('userData'))
  console.log(id,arrList[id])
  Fname.value = arrList[id].name;
  Lname.value = arrList[id].surName;
  let newBtn = `<button id="update" >Edit</button>`//onClick='updBtn(${id})'
  //   console.log(form)

  if (!(document.querySelector('#update'))) {
    form.insertAdjacentHTML("beforeend", newBtn);
  

  document.querySelector('#update').addEventListener('click', (ele) => {
    console.log(Fname.value , Lname.value)
    arrList[id].name = Fname.value;
    arrList[id].surName = Lname.value;
    console.log(id,arrList[id]);
    
    localStorage.setItem("userData", JSON.stringify(arrList))
    console.log(arrList);
    console.log("-----------------")
    show()
  })

}

};




function show() { setLocalStorage(); }

console.log(arrList)




