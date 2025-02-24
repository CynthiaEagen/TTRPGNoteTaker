class Thing {
    name;
    notes;

    constructor(name, notes) {
        this.name = name;
        this.notes = notes;
    }
}   

const thingArray = [];
const list = document.getElementById('list'); 

function addThing() {
    console.log("ping");
    let thing = new Thing(
        document.getElementById('name').value,
        document.getElementById('notes').value
    );

    thingArray.push(thing);

    let li = document.createElement('li');
    li.innerHTML = thing.name;
    li.id = thingArray.length - 1;
    li.addEventListener('click', viewThing);
    list.appendChild(li);

}

function viewThing() {
    let nameView = document.getElementById('name-view');
    let notesView = document.getElementById('notes-view');

    nameView.value = thingArray[this.id].name;
    notesView.innerHTML = thingArray[this.id].notes; 
}

const submit = document.getElementById('submit-button');
submit.addEventListener('click', addThing);
