const display =(data) => {
    console.log(data);
    let cont = document.getElementById("container");
    cont.innerHTML = null;

    for (let item of data){
        let d =  disDiv(item)
        cont.append(d);

    }

}
const disDiv =(data)=>{
    let box = document.createElement("div");
    box.className = "item_box";
    let book = document.createElement("h2");
    book.textContent = ` Book Name :${data.book}`
    let author = document.createElement("h4");
    author.textContent = ` Author : ${data.author}`
    
    let comments = document.createElement("h4");
    comments.textContent = ` Comments : ${data.comments}`
    

    box.append(book,author,comments);
    return box;

}
export {display};