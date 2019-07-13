var i1 = {
    name: "Игровая приставка Nintendo Switch",
    imgSrc: "img/item1.png",
    price: 17999
};

var i2 = {
    name: "Смартфон Honor 7A Pro",
    imgSrc: "img/item2.png",
    price: 7990
};

var i3 = {
    name: "Автомагнитола Pioneer AVH-Z5100BT",
    imgSrc: "img/item3.png",
    price: 25689
};

var i4 = {
    name: "Розетка Schneider Electric ПРИМА RA32-211R-B,32А, с заземлением, белый",
    imgSrc: "img/item4.png",
    price: 268
};

var i5 = {
    name: "Игровая приставка Sony PlayStation 4 1 ТБ",
    imgSrc: "img/item5.png",
    price: 22990
};

var itemsArray = [i1, i2, i3, i4, i5];

var sum = 0;

function init() {
    var catalog = document.getElementsByClassName("catalog")[0];
    var i, item;
    for (i=0;i<itemsArray.length; i++){
        item = document.createElement("div");
        item.setAttribute("class", "catalog__item");
        item.appendChild(document.createTextNode(itemsArray[i].name));

        itemImg = document.createElement("img");
        itemImg.src = itemsArray[i].imgSrc;
        itemImg.setAttribute("class", "catalog__img");

        item.appendChild(itemImg);

        item.appendChild(document.createTextNode(itemsArray[i].price + "\u20bd"));

        itemBtn = document.createElement("button");
        itemBtn.setAttribute("class", "catalog__button");
        itemBtn.textContent = "Купить";
        itemBtn.setAttribute("id", "btn_"+i);
        itemBtn.onclick = addItem;
        item.appendChild(itemBtn);

        catalog.appendChild(item);
    }
}

function addItem(obj){
    var selectedItem = itemsArray[obj.target.id.split("_")[1]];
    var selectedItems = document.getElementsByClassName("selected_items")[0];
    var tr = selectedItems.insertRow(-1);
    var td = tr.insertCell(-1);
    td.appendChild(document.createTextNode(selectedItem.name));
    var td = tr.insertCell(-1);
    td.style.textAlign = "right";
    td.style.paddingLeft = "15px";
    td.appendChild(document.createTextNode("    " + selectedItem.price + "\u20bd"));

    sum += selectedItem.price;
    document.getElementsByClassName("sum")[0].textContent = "Всего: " + sum + "\u20bd";    
}

window.onload = init;