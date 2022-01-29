let book = document.getElementById('book-title');
let author = document.getElementById('author');
let year = document.getElementById('year');
let button = document.getElementById('button');
let table = document.getElementById('table');

button.addEventListener('click', function(){
    let bookName = book.value;
    let authorName = author.value;
    let date = year.value;

    let template = `
                <tr>
                <td>${bookName}</td>
                <td>${authorName}</td>
                <td>${date}</td>
                </tr>
                    `;

    table.innerHTML += template;
})