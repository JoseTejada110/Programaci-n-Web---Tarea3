function getContacts() {
    var divContact = document.getElementById("divContact");
    fetch("http://www.raydelto.org/agenda.php").then(function(data) {
        return data.json();
    }).then(function(contactsList){
        
        for(var i = 0; i <= contactsList.length; i++){
            var contact = contactsList[i];
            let contactListItem = document.createElement("p");

            contactListItem.textContent = i+1 + "- " + contact.nombre + " " + contact.apellido + " --- Tel: " + contact.telefono;
            divContact.appendChild(contactListItem);
        }
    });
}

function saveContact() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let telefono = document.getElementById('telefono').value;
    const newContact = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
    };

    fetch('http://www.raydelto.org/agenda.php', {
        method: 'POST',
        body: JSON.stringify(newContact),
    }).then(res=> res.json()).then(data=> console.log(data));
    
}