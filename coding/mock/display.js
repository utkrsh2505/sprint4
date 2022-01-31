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
    book.textContent = `${data.book}`

    box.append(book);
    return box;

}
export {display};