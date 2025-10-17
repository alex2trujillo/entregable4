let form=document.querySelector(".formuariocontacto form");
    form.addEventListener("submit",(Event)=>{
        Event.preventDefault();
        let nombre= document.getElementById("nombre"). value;
        let telefono= document.getElementById("telefono"). value;
        let correo= document.getElementById("correo"). value;
        console.log("nombre",nombre);
        console.log("telefono",telefono);
        console.log("correo",correo);
        alert("hola "+nombre+" su tefono es:"+telefono+" su correo es:"+correo);

    });
    function contenedor(){
        let contenido=document.getElementById("contenido");
        contenido.style.display=( contenido.style.display=="none" ||  contenido.style.display=="")?"block":"none";
    }