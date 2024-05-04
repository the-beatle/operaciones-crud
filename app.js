
const pets = [];
const form = document.getElementById("pet-form");

function createPetStringTemplate(pet) {
    return `
           <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Nombre: ${pet.name}</h5>
                <p class="card-text">Propietario:${pet.owner}</p>
                <a href="#" class="btn btn-primary">Actualizar</a>
                <a href="#" class="btn btn-primary">Borrar</a>
            </div>
        </div> 
    `
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const formData = new FormData(form);
    const pet = {
        name: formData.get("name"),
        owner: formData.get("owner"),
    }
    pets.push(pet)
    const petList = document.getElementById("pet-list");
    petList.innerHTML+= createPetStringTemplate(pet);

    form.reset();
});