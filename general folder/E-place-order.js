const orderlist = [];
folder2(); 
screenlist = '';
function folder2() {
  let screenlist = '';
  for (let i = 0; i < orderlist.length; i++) {
    const fileObject = orderlist[i];
    const { itemname, quantityneeded, descriptiontype, unittype, amounttype } = fileObject;
    fileHtml = `
    <div>
      ${itemname}
    </div>
    <div>
      ${quantityneeded}
    </div>
    <div>
      ${descriptiontype}
    </div>
    <div>
      ${unittype}
    </div>
    <div>
      ${amounttype}
    </div>
    <button onclick="
      orderlist.splice(${i}, 1)
      folder2();
      totalF();
      fun4();
    "
    class="delete-button">delete</button>
    `;
    screenlist += fileHtml

    document.querySelector('.screen-display').innerHTML = screenlist;
  }
}
function orderf() {
  /* const storetotal = document.querySelector('.store-total');
   const totalholder = document.querySelector('.total-price');
   const notisnumadd = document.querySelector('.notis-num');
   const notisnum = document.getElementById('notis-nhide')
   const bodypop = document.getElementById('pop-bhide');
   const name = document.getElementById('name');
   const quantity = document.getElementById('quantity');
  */ const description = document.getElementById('description');
   const names = name.value;
   const quantitys = quantity.value;
   const descriptions = description.value;
  /* const unit = document.querySelector('.unit-price');
   const amount = document.querySelector('.amount');
   const total = document.querySelector('.total');
   */const units = unit.innerHTML;
   const amounts = amount.innerHTML;
   //console.log(names)
   //console.log(quantitys)
  // console.log(descriptions)
 /*  JSON.parse(localStorage.getItem('laststore'));
   //totalholder.innerHTML = Number(storetotal.innerHTML) + Number( amounts)

   storetotal.innerHTML = amounts
   localStorage.setItem('laststore',JSON.stringify(storetotal.innerHTML))
   */
   orderlist.push({
     itemname: names,
     quantityneeded: quantitys,
     descriptiontype: descriptions,
     unittype: units,
     amounttype: amounts
   })

   name.value = 'emty';
   quantity.value = 0;
   unit.innerHTML = 0;
   description.value= '';
   
   amount.innerHTML = unit.innerHTML*quantity.value;
   folder2();
   totalF();
   

   notisnumadd.innerHTML = Number(notisnumadd.innerHTML)+ 1;
   
    bodypop.id = '';
   setTimeout(function() {
     if (bodypop.id === '') {
       bodypop.id = 'pop-bhide';
     }
    }, 1000)

    if (notisnum.id === 'notis-nhide') {
      notisnum.id = '';
    }
     
    console.log(bodypop.id);
  } 