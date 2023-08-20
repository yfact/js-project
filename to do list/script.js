const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert('Please input something');
    }
    else {
        let li = document.createElement('li');
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = '';
        let span = document.createElement('span');
        span.textContent = 'x';
        li.appendChild(span);
        saveData();
    }
}

listContainer.addEventListener('click', function(e){
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
     localStorage.setItem('data', listContainer.innerHTML);
}

function loadData() {
    listContainer.innerHTML = localStorage.getItem('data');
}

loadData();