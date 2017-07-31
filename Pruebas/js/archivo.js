var flag;

function agregarLista(idTxt){
  if (idTxt =='idBtnVendedor'){
    agregar("txtVendedor","listaVendedores","Vendedor");
  }
  else {
    agregar("txtProducto","listaProducto","Producto");
  }
}


function EliminarEventoyAgregarEvento(lista){

          flag =1;
          var idlista=document.getElementById(lista);
          idlista.removeAttribute('onclick');

          idlista=document.getElementById(lista);
          idlista.onclick=function(){
                borrarLista(this.id);
          }
      // no realizar nada
  }


  function dejarDeEliminar(lista){
        flag = 0;
        var idlista=document.getElementById(lista);
        idlista.removeAttribute('onclick');

        document.getElementById(lista).onclick=function(){
          agregarAlCarrito(lista);
        }
  }




function  agregar(texBox,lista,nombre){
//if textbox.value==false

  var texto=document.getElementById(texBox).value;
  var li=document.createElement('LI');
  var liElementos= document.getElementById(lista).getElementsByTagName('li');
  li.innerHTML=texto==''?'(nada)':texto;
  document.getElementById(lista).appendChild(li).setAttribute("id", "id"+nombre+liElementos.length);

}




function borrarLista(idLista){
  if(idLista == 'listaVendedores'){
    borrar(idLista);
  }
  else{
    borrar(idLista);
  }
}


function borrar(lista){
    lis=document.getElementById(lista).getElementsByTagName('li');
    for(var i=0; i<lis.length;i++){
        lis[i].onclick=function(){
          if(flag==1){
            if(confirm('¿Borrar este li?'))
          //  console.log(this);
            this.parentNode.removeChild(this);
          }
        }
    }
}




function agregarAlCarrito(lista){
  lis=document.getElementById(lista).getElementsByTagName('li');
  for(var i=0; i<lis.length;i++){
      lis[i].onclick=function(){
        if(confirm('¿Quiere Agregar el Producto al Carrito?')){
            var listaCarrito =document.createElement('li');
            listaCarrito.innerHTML =this.innerHTML;
            //listaCarrito.innerHTML= lis[i].innerHTML;
            document.getElementById('listaCarrito').appendChild(listaCarrito);;
          }
        }
  }
}
