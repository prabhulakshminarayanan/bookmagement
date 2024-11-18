let books=[];

function addBook(title,author){
    const book={
        id: Date.now().toString(),
        title: title,
        author: author
    }
    books.push(book);
    renderBooks();
    
}


function editBook(id, newTitle, newAuthor){
    books.forEach((book)=>{
        if(book.id===id){
            book.title=newTitle;
            book.author=newAuthor;
        }
    });
    renderBooks();
   
   
}

function deleteBook(id){
    books=books.filter((book)=>book.id!==id);
    renderBooks();
    document.getElementById("form").reset();
    document.getElementById("id").value="";
}


function getBook(id){
    const book= books.find((book)=>book.id===id);
    document.getElementById("title").value=book.title;
    document.getElementById("author").value=book.author;
    document.getElementById("id").value=book.id;
}

function handleFormSubmit(event){
    event.preventDefault();
    const title=document.getElementById("title").value;
    const author=document.getElementById("author").value;
    const id=document.getElementById("id").value;

    if(id){
        editBook(id,title,author);
    }else{
        addBook(title,author);
    }
    document.getElementById("form").reset();
    document.getElementById("id").value="";
    

}



function renderBooks(){
    const tbody=document.getElementById("books-body");
    tbody.innerHTML="";
    books.forEach((book)=>{
        const row=document.createElement("tr");

        row.innerHTML=`
        <td>${book.title} </td>
        <td>${book.author} </td>
        <td>
            <button onclick="getBook('${book.id}')">Edit</button>
            <button class="delete" onclick="deleteBook('${book.id}')">Delete</button>
        </td>
        `;
        tbody.appendChild(row);

    })
}

document.getElementById("form").addEventListener("submit", handleFormSubmit);