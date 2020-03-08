const addButton = document.getElementById("add");

let todos = [];

const add = () => {
    const task = document.getElementById('task').value;
    todos.push(task);
    show();
    return false;
}

const remove = (id) => {
    todos.splice(id,1);
    show();
    return false;
}


const show = () => {
    let html = '<ul>';
    for (let i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">X</button></li>';
    };
    html += '</ul>';
    
    document.getElementById('todos').innerHTML = html

    const buttons = document.getElementsByClassName('remove');
    for (let i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('dblclick', () => {
            remove(i)
        });
    };
}
addButton.addEventListener("click", () => {
    add();
})