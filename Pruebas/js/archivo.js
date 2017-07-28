
function agreagarLi(id){
  console.log(id);


  if (id=='idBtnVendedor'){
    console.log('holavendedor');
    var texto=document.getElementById('txtVendedor').value;
    var li=document.createElement('LI');
    var liElementos= document.getElementById('listaVendedores').getElementsByTagName('li');
    li.innerHTML=texto==''?'(nada)':texto;
    document.getElementById('listaVendedores').appendChild(li).setAttribute("id", "idVendedor"+liElementos.length);
  }
  else {
    console.log('holavendedor');
    var texto=document.getElementById('txtProducto').value;
    var li=document.createElement('LI');
    var liElementos= document.getElementById('listaProducto').getElementsByTagName('li');
    li.innerHTML=texto==''?'(nada)':texto;
    document.getElementById('listaProducto').appendChild(li).setAttribute("id", "idProducto"+liElementos.length);
  }
}

function borrar(){
    lis=document.getElementById('listaVendedores').getElementsByTagName('li');
    console.log(lis);
    for(var i=0; i<lis.length;i++){
        lis[i].onclick=function(){
            if(confirm('¿Borrar este li?'))
          //  console.log(this);
            this.parentNode.removeChild(this);
        };
    }

}
