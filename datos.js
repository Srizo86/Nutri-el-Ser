

function enviandoDatos() {
var name_formulario = document.querySelector("#name").value
var lastname_formulario = document.querySelector("#last_name").value
var email_formulario = document.querySelector("#email").value
var talleres_formulario = document.querySelector("#talleres").checked
var comunidad_formulario = document.querySelector("#comunidad").checked
    if(name_formulario == '' || lastname_formulario == '' || email_formulario == ''){
        Swal.fire({
            icon: 'error',
            title: 'Completa el Formulario',
            text: 'Gracias',
          })
    } else {
        if(talleres_formulario == false && comunidad_formulario ==false){
            Swal.fire({
                icon: 'success',
                title: 'Recibiras información talleres o Comunidad',
                text: 'Recibiras un correo con toda la información seleccionada',
              })
        } else {
            if(talleres_formulario == true && comunidad_formulario == true){
                Swal.fire({
                    icon: 'Gracias',
                    title: 'Elegiste Talleres y Comunidad',
                    text: 'Recibirasun correo con toda la información seleccionada',
                  })
            } else{
                if(talleres_formulario == true){
                    Swal.fire({
                        icon: 'Gracias',
                        title: 'Elegiste Talleres',
                        text: 'Recibirasun correo con toda la información seleccionada',
                      })
                } else {
                    Swal.fire({
                        icon: 'Gracias',
                        title: 'Elegiste Comunidad',
                        text: 'Recibirasun correo con toda la información seleccionada',
                      })
                }
            }
        }
    }
}

