// let store = [];

// function watch() {
//   store.forEach((el, index) => {
//     console.log(el);

//   });
// }

// function add() {
//   let PhoneName = prompt("Enter Phone Name ");
//   let PhonePrice = +prompt("Enter Phone Price ");
//   let NewOne = { Name: PhoneName, price: PhonePrice };
//   store.push(NewOne);
//   // console.log(store);
//   console.clear();
//   watch();
// }

// function del() {
//   let ObjectNum = +prompt("Enter the number of object you want delete ") - 1;
//   store.splice(ObjectNum, 1);
//   console.clear();
//   watch();
// }
// function edit() {
//   let ObjectNum = +prompt("Enter the index of object you want update  ") - 1;
//   let NewPrice = +prompt("Enter the new prie  ");
//   store[ObjectNum].price = NewPrice;

//   console.clear();

//   watch();
// }
// ========================================================================================
// let phone = ["iphone11","iphone12" ,"iphone13" ,"iphone14","iphone15"]
// let price = [500,700 ,900 ,800,1000]

// function call() {
//     phone.forEach( (el,index) =>{
//         console.log (`the phone name is ${el} `  )
//       })
// }
// function add (){
//     let ProductName = prompt ("enter phone name")
//     let productPrice= +prompt ("enter phone price")
//    phone.push(ProductName)
//    price.push(productPrice)
// //    console.log(phone);
// //    console.log(price);
// //    price.indexOf = phone.indexOf
// call()

// }
// =====================================================
// let product = [
//     // {name : "samsung11",
//     //   price : 200
//     // },
//     // {name : "samsung11",
//     //   price : 400
//     // },
//     // {name : "samsung11",
//     //   price : 500
//     // }
// ]
// let namePhone = document.querySelector(".nameInput")
// let PhonePrice = document.querySelector(".priceInput")
// let table = document.querySelector("table tbody")

// function render() {

//     product.forEach((el,index) => {
//         table.innerHTML += `
//        <tr>
//         <td>${el.name}</td>
//         <td>${el.price}</td>
//         <td><button onclick=""> remove </button></td>

//        </tr>

//         `
//     });
// }
// function add() {
//     table.innerHTML=""
//     product.push({name :namePhone.value,
//         price : PhonePrice.value
//       })
//       render()

// }
//  function del(prindex) {

//     product.splice( index ,1)
//       render()

// }
// =========================================================================

// let things = [
// ]
// let input = document.querySelector("input");
// let table = document.querySelector("table tbody");

// function renderArr() {
//     table.innerHTML = ""

//     things.forEach((el,index) => {
//      table.innerHTML +=    `
//       <tr>  <td>${el.name}</td>
//          <td><button>del</button></td>
//          </tr>

//         `

//     });

// }

// function addTolist() {
//     let newObject = {name : input.value}
//     things.push(newObject)
//     // console.log (things)
//     renderArr()
// }

// ==========================================================================
// let button = document.getElementsByTagName("button")
// let par = document.getElementsByTagName("p")
// // console.log (button[0])
// function showParagraph (){

//

// =======================================================================

let inutValue = document.querySelector("input");
let balance = 0;
let data = [];
let table = document.querySelector("table tbody");

function saveToLocalStorage() {
  localStorage.setItem("balance", balance);
  localStorage.setItem("data", JSON.stringify(data));
}

function loadFromLocalStorage() {
  let storedBalance = localStorage.getItem("balance");
  let storedData = localStorage.getItem("data");

  if (storedBalance !== null) {
    balance = parseFloat(storedBalance);
  }

  if (storedData !== null) {
    data = JSON.parse(storedData);
  }

  showBalance(balance);
  renderData();
}
function showBalance(arg) {
  let balanceVal = document.querySelector("p span");
  balanceVal.innerHTML = ` ${arg}`;
}
showBalance(balance);

function renderData() {
  table.innerHTML = "";
  data.forEach((el, index) => {
    table.innerHTML += `
 <tr>
     <td>${el.operationvalue}</td>
     <td>${el.type}</td>
     <td>${el.before}</td>
     <td>${el.after}</td>
    <th><button class="btn btn-danger" onclick="deleteRow(${index},${el.before})">del</button></th>
    
 </tr>
    
    
     `;
    saveToLocalStorage();
  });
}

function withdraw() {
  if (inutValue.value == "") {
    alert("ادخل قيمة السحب");
  } else {
    if (inutValue.value > balance) {
      alert("the amount not found");
    } else {
      orginalbalance = balance;
      balance -= +inutValue.value;
      showBalance(balance);
      let Obj = {
        operationvalue: +inutValue.value,
        type: "withdraw",
        before: orginalbalance,
        after: balance,
      };
      data.push(Obj);
    saveToLocalStorage();
      
      renderData();
    }
  }

  inutValue.value = "";
}
 renderData()
function edaa() {
  if (inutValue.value == "") {
    alert("ادخل قيمة الايداع");
  } else {
    orginalbalance = balance;
    balance += +inutValue.value;

    showBalance(balance);

    let Obj = {
      operationvalue: +inutValue.value,
      type: "Deposite",
      before: orginalbalance,
      after: balance,
    };

    data.push(Obj);
    saveToLocalStorage();
   
    renderData();
  }

  inutValue.value = "";
}
function deleteRow(index, before) {
  balance = before;
  data.splice(index, 1);
  renderData();
  showBalance(balance);
}
loadFromLocalStorage();
