const addButton = document.getElementById("add");

let todos = [];

// let today = new Date();
// let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// console.log(date);
// date = date.split(' ')[0];
// document.getElementById("todaysdate").innerHTML = today;

// console.log(date);


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

// const refreshArray


// const editLi = () => {
//     todos[i].innerHTML = inputText.value;
// }

const show = () => {
    let html = '<ul>';
    for (let i=0; i<todos.length; i++) {
        html += '<li class="checked">' + todos[i] + '<button class="remove" id="' + i + '">X</button></li>';
    };
    html += '</ul>';
    
    document.getElementById('todos').innerHTML = html

const removeButton = document.getElementsByClassName('remove');
    for (let i=0; i < removeButton.length; i++) {
        removeButton[i].addEventListener('click', () => {
            remove(i)
        });
    };
}

const editButton = document.getElementsByClassName('edit');
    for (let i=0; i < editButton.length; i++) {
        editButton[i].addEventListener('click', () => {
        // style.textDecoration = "line-through";  
        });
    }





addButton.addEventListener("click", () => {
    add();
})

