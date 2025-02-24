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

const idView = document.getElementById('id-view');
const nameView = document.getElementById('name-view');
const notesView = document.getElementById('notes-view');

function addThing() {
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
    idView.value = this.id;
    nameView.value = thingArray[this.id].name;
    notesView.value = thingArray[this.id].notes; 
}

function editThing() {
    let thing = thingArray[idView.value];
    thing.name = nameView.value;
    thing.notes = notesView.value;
    thingArray[idView.value] = thing;

    let li = document.getElementById(idView.value);
    li.innerText = thing.name;
}

const submit = document.getElementById('submit-button');
submit.addEventListener('click', addThing);

const edit = document.getElementById('edit-button');
edit.addEventListener('click', editThing);
