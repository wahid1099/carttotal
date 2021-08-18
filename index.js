function updateProductNumber(productId,price,isIncreasing) {
    //getting productnumber id converting to int and if the paran is true adding product and if its false decresing it
    const productInput=document.getElementById(productId+'-number');
    let productNumber=productInput.value;
    if(isIncreasing==true) {
        productNumber=parseInt(productNumber)+1;
    }else if(productNumber>0){
        productNumber=parseInt(productNumber)-1;

    }
    productInput.value=productNumber;
    const productTotal=document.getElementById(productId + '-total');
    productTotal.innerText=productNumber*price;
    //calling calcute function
    calculattotal();
}

//getting input values
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculattotal(){
    const phoneTotal = getInputValue('phone')*1219;
    const casetotal = getInputValue('case')*59;
    const subTotal=phoneTotal+casetotal;
    const tax=subTotal/10;
    const totalprice=subTotal+tax;
    //update on html file
    document.getElementById('subtotal').innerText =subTotal;
    document.getElementById('tax-ammount').innerText =tax;
    document.getElementById('total').innerText =totalprice;
}
// phone increase decrease events
document.getElementById('phone-plus').addEventListener("click",function(){

    updateProductNumber('phone',1219,true);

});

document.getElementById('phone-minus').addEventListener("click",function(){

    updateProductNumber('phone',1219,false);


});
//cart increase and decrease events
document.getElementById('case-plus').addEventListener("click",function(){

    updateProductNumber('case',59,true);

});

document.getElementById('case-minus').addEventListener("click",function(){
    
    updateProductNumber('case',59,false);


});
