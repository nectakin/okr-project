//1. діалог
function dialogWithUser() {
    let name = prompt("Як вас звати?");
    if (name) {
        alert(`Привіт, ${name}!`);
    } else {
        alert("Ви не ввели ім'я.");
    }
}

//2.  інфо про розробника
function showDeveloperInfo(lastName, firstName, position = "Студент") {
    alert(`Розробник: ${lastName} ${firstName}, Посада: ${position}`);
}

//3. порівняння двох рядків
function compareStrings() {
    let str1 = prompt("Введіть перший рядок:");
    let str2 = prompt("Введіть другий рядок:");

    if (str1.length > str2.length) {
        alert(`Більший рядок: ${str1}`);
    } else if (str2.length > str1.length) {
        alert(`Більший рядок: ${str2}`);
    } else {
        alert("Рядки однакові за довжиною.");
    }
}

//4. зміна фону сторінки
function changeBackground() {
    document.body.style.backgroundColor = "lightblue";
    setTimeout(() => {
        document.body.style.backgroundColor = "";
    }, 30000);
}

//5. перенаправлення на іншу сторінку 
function redirect() {
    location.href = "https://www.google.com"; 
}


//6. додаткові маніпуляціїї з DOM 

function modifyPage() {
    // getElementById
   let title = document.getElementById("title");
        if (title) {
            title.innerHTML = "Новий заголовок";
        }
        
    // querySelectorAll
    let paragraphs = document.querySelectorAll(".text");
    paragraphs[0].outerHTML = "<p class='text' style='color: red;'>Оновлений перший параграф.</p>";
        
    //  nodeValue 
    let textNode = document.createTextNode("Текстовий вузол");
    console.log(textNode.nodeValue); 

    // додавання елемента у контейнер
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "Це новий параграф, доданий через JavaScript.";
    let container = document.getElementById("container");
    container.append(newParagraph);
        
    // append,prepend,after,replacewith 
    let newDiv = document.createElement("div");
    let textContent = document.createTextNode("Це текст у новому div");
    newDiv.append(textContent);
    document.body.append(newDiv);

    let anotherParagraph = document.createElement("p");
    anotherParagraph.textContent = "Цей параграф додається через prepend.";
    container.prepend(anotherParagraph);

    let lastParagraph = document.createElement("p");
    lastParagraph.textContent = "Цей параграф додається після контейнера.";
    container.after(lastParagraph);

   let replaceParagraph = document.createElement("p");
    replaceParagraph.textContent = "Заміна другого параграфа.";
    replaceParagraph.style.color = "blue"
    
    if (paragraphs.length > 1) {
    paragraphs[1].replaceWith(replaceParagraph);
}

    //title.remove();
    //document.write("<p>Цей текст додано через document.write.</p>");
}