
let serial = 0;
// card 1 
document.getElementById('first-card').addEventListener('click',function(){
    // console.log('clicked')

    serial +=1;
    // get the data from html using id
    // const productName = document.getElementById('first-name').innerText;
    // const productPrice = document.getElementById('first-price').innerText;
    // const productQuantity = document.getElementById('first-quantity').innerText;

    //  getting data using common function using getElementById method
    const pd = getData("first-name", "first-price", "first-quantity");

    // console.log(productName, productPrice, productQuantity);
    // console.log(firstElement);

    const priceTotal = parseInt(pd.productPrice)  * parseInt(pd.productQuantity);

    displayData(pd.productName, pd.productPrice, pd.productQuantity, priceTotal);
    disabledButton("first-card");

    
});
//  card 2
// using event from browser
document.getElementById('second-card').addEventListener('click', function(e){
    serial +=1;
    // console.log(e.target.parentNode.parentNode.children[0].innerText);
    // console.log(e.target.parentNode.parentNode.children[2].children[0].innerText);
    // console.log(e.target.parentNode.parentNode.children[3].children[0].innerText);

    // const pName = e.target.parentNode.parentNode.children[0].innerText;
    // const pPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    // const pQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;

    // console.log(productName, productPrice, productQuantity);

    const pd = getAllData(e);

    const sumTotal = parseInt(pd.pPrice) + parseInt(pd.pQuantity);
    // console.log(sumTotal);
    displayData(pd.pName, pd.pPrice, pd.pQuantity, sumTotal);
    disabledButton("second-card");

})

// card 3 
document.getElementById('third-card').addEventListener('click',function(){
    // console.log('clicked')

    serial +=1;
    // get the data from html using id
    // const productName = document.getElementById('third-name').innerText;
    // const productPrice = document.getElementById('third-price').innerText;
    // const productQuantity = document.getElementById('third-quantity').innerText;

    // console.log(productName, productPrice, productQuantity);
    // console.log(firstElement);

    // /  getting data using common function using getElementById method
  const pd = getData("third-name", "third-price", "third-quantity");

    const priceTotal = parseInt(pd.productPrice)  - parseInt(pd.productQuantity);

    displayData(pd.productName, pd.productPrice, pd.productQuantity, priceTotal);
    disabledButton("third-card");

    
});
// card 4
document.getElementById("second-last").addEventListener("click", function (e) {
    serial += 1;
    const pd = getAllData(e);
    // ** logic
    const sumTotal = parseInt(pd.pPrice) ** parseInt(pd.pQuantity);
    //   show the data using function
    displayData(pd.pName, pd.pPrice, pd.pQuantity, sumTotal);
    //   disabled button using function
    disabledButton("second-last");
  });
  

// last card

document.getElementById('last-card').addEventListener('click', function(){
    serial +=1;
    const productName = document.getElementById("last-title").innerText;
    const productPrice = document.getElementById("first-input").value;
    const productQuantity = document.getElementById("second-input").value;
    if (
      productPrice == "" ||
      productQuantity == "" ||
      productPrice <= 0 ||
      productQuantity <= 0
    ) {
      return alert("please enter any valid number");
    }
    const total = parseInt(productPrice) / parseInt(productQuantity);
    //   show the data using function
    displayData(productName, productPrice, productQuantity, total);

    disabledButton("last-card");
})

// common function to display data
function displayData(nameOfP, priceOfP, quantityOfP, resultP){
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${serial}</td>
        <td>${nameOfP}</td>
        <td>${priceOfP}</td>
        <td>${quantityOfP}</td>
        <td>${resultP}</td>
        <td>
            <button class="btn btn-sm btn-red-500">Square</button>
        </td>
    `;

    container.appendChild(tr);
    document.getElementById("total-product").innerText =serial;

}
// common function to disable button
function disabledButton(id) {
    document.getElementById(id).setAttribute("disabled", true);
  }


// common function to get data using event object
function getAllData(e) {
    const pName = e.target.parentNode.parentNode.children[0].innerText;
    const pPrice =
      e.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantity =
      e.target.parentNode.parentNode.children[3].children[0].innerText;
    //   console.log(pName, pPrice, pQuantity);
  
    const pd = {
      pName: pName,
      pPrice: pPrice,
      pQuantity: pQuantity,
    };
  
    return pd;
  }
  // common function to get data using getElementById method
function getData(id1, id2, id3) {
    // get the data from htm using id
    const productName = document.getElementById(id1).innerText;
    const productPrice = document.getElementById(id2).innerText;
    const productQuantity = document.getElementById(id3).innerText;
  
    const pd = {
      productName: productName,
      productPrice: productPrice,
      productQuantity: productQuantity,
    };
    return pd;
  }