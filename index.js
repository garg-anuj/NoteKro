let Fname = document.querySelector('#Fname')
let Lname = document.querySelector('#Lname')
let clickBtn = document.querySelector('#submitbtn')
// let form = document.querySelector('#form')

show()
clickBtn.addEventListener('click', submitBtn)
function createInput() { localStorage.removeItem("userData"); show() }


function setLocalStorage() {

  let data = JSON.parse(localStorage.getItem('userData'));
  let showData = document.querySelector("#show");
  let nodeHtml = ''


  if (data) {
    data.map((ele, id) => {
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
  let arr = JSON.parse(localStorage.getItem("userData")) //initalyy yeah null Rehta hai
  let arrData = {
    name: `${Fname.value}`,
    surName: `${Lname.value}`
  }

  if (Fname.value == '' && Lname.value == '') {
    console.log('fill the input')

  }
  else if (arr === null) {
    console.log('yea abhi null vlue hai')
    let arr = [];
    arr.push(arrData)
    localStorage.setItem("userData", JSON.stringify(arr));
    show()
  }
  else {
    console.log('bhi null nhi hai');
    arr.push(arrData)
    localStorage.setItem("userData", JSON.stringify(arr));
    show()
  }
}




function delBtn(id) {
  let data = JSON.parse(localStorage.getItem('userData'))
  data.splice(id, 1)
  console.log(data)
  localStorage.setItem('userData', JSON.stringify(data))
  show()
}


function editBtn(id) {
 
  let data = JSON.parse(localStorage.getItem('userData'))
  Fname.value = data[id].name;
  Lname.value = data[id].surName;
  let newBtn = `<button id="update" >Edit</button>`//onClick='updBtn(${id})'
  //   console.log(form)

  if (!(document.querySelector('#update'))) {
    form.insertAdjacentHTML("beforeend", newBtn);
  }

  document.querySelector('#update').addEventListener('click', (ele) => {
    data[id].name = Fname.value;
    localStorage.setItem("userData", JSON.stringify(data))
    show()
  })

}

function show() { setLocalStorage(); }




