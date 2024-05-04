
let pets = [];
const form = document.getElementById("pet-form");

function findId(event) {
    return event.target.parentElement.parentElement.id;
}

function deletePet(event) {
    event.target.parentElement.parentElement.remove()
    const id = findId(event);
    pets = pets.filter(pet => pet.id !== parseInt(id));
}

function createPetStringTemplate(pet) {
    return `
           <div id='${pet.id}' class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Nombre: ${pet.name}</h5>
                <p class="card-text">Propietario:${pet.owner}</p>
                <button class="btn btn-primary">Actualizar</button>
                <button onclick="deletePet(event)"  class="btn btn-primary">Borrar</button>
            </div>
        </div> 
    `
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const formData = new FormData(form);
    const pet = {
        id: pets.length+1,
        name: formData.get("name"),
        owner: formData.get("owner"),
    }
    pets.push(pet)
    const petList = document.getElementById("pet-list");
    petList.innerHTML+= createPetStringTemplate(pet);
    form.reset();
});