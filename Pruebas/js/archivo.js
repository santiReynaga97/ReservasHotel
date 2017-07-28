
function agregarLista(idTxt){
  if (idTxt =='idBtnVendedor'){
    agregar("txtVendedor","listaVendedores","Vendedor");
  }
  else {
    agregar("txtProducto","listaProducto","Producto");
  }
}

function borrarLista(idLista){
  if(idLista == 'listaVendedores'){
    borrar(idLista);
  }
  else{
    borrar(idLista);
  }
}


function  agregar(texBox,lista,nombre){
  var texto=document.getElementById(texBox).value;
  var li=document.createElement('LI');
  var liElementos= document.getElementById(lista).getElementsByTagName('li');
  li.innerHTML=texto==''?'(nada)':texto;
  document.getElementById(lista).appendChild(li).setAttribute("id", "id"+nombre+liElementos.length);
}


function borrar(lista){
    lis=document.getElementById(lista).getElementsByTagName('li');
    console.log(lis);
    for(var i=0; i<lis.length;i++){
        lis[i].onclick=function(){
            if(confirm('¿Borrar este li?'))
          //  console.log(this);
            this.parentNode.removeChild(this);
        }
    }
}
