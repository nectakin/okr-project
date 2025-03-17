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

// ЛАБОРАТОРНА 7

 // 1) 1. використання події миші через атрибут
function changeColor() {
    let box = document.getElementById("clickBox");
    box.style.backgroundColor = box.style.backgroundColor === "rgb(255, 24, 147)" ? "pink" : "rgb(255, 24, 147)";
}

 //    2. використання події миші через властивість
    let boxElement = document.getElementById("clickBox");
    boxElement.onmouseover = function () {
    boxElement.style.border = "2px solid pink";
    };

    boxElement.onmouseleave = function () {
    boxElement.style.border = "none";
    };

// 2) addEventListener + різні обробники
function handler1() {
    alert("Обробник 1");
}

function handler2() {
    console.log("Обробник 2");
}

    boxElement.addEventListener("click", handler1);
    boxElement.addEventListener("click", handler2);
    
  // 3) handleEvent + event.currentTarget
let eventHandlerObj = {
    handleEvent(event) {
    alert("Було натиснуто на: " + event.currentTarget.tagName);
    }
};
boxElement.addEventListener("click", eventHandlerObj);
    

 /* // 4) removeEventListener
setTimeout(() => {
    boxElement.removeEventListener("click", handler1);
}, 5000); */

// 5) підсвічування списку event.target
document.getElementById("itemList1").onclick = function(event) {
    if (event.target.tagName === "LI") {
    let items = document.querySelectorAll("#itemList1 li");
    items.forEach(item => item.classList.remove("active")); 
    event.target.classList.add("active"); 
    }
};

// 6) меню з data-атрибутами + "Поведінка"
document.getElementById("menu1").onclick = function(event) {
    if (event.target.tagName === "BUTTON") {
    let action = event.target.dataset.action;
        if (action === "alert") {
            alert("alert");
        } else if (action === "log") {
            console.log("Виконано дію з data-action='log'");
        } else if (action === "color") {
            document.body.style.backgroundColor = "lightyellow";
            setTimeout(() => {
                document.body.style.backgroundColor = "";
            }, 5000);
        }
    }
};



// ЛАБОРАТОРНА 8

// 1) mouseover, mouseout + event.target, event.relatedTarget.
   const itemList = document.getElementById("itemList1");

itemList.addEventListener("mouseover", (event) => {
    if (event.target.tagName === "LI") {
        event.target.style.backgroundColor = "#f48fb1"; 
        event.target.style.color = "white";
    }

    const relatedElement = event.relatedTarget;
    if (relatedElement && relatedElement.tagName !== "LI") {
        //  itemList.style.transform = "scale(1.05)";
        //  itemList.style.transition = "transform 0.3s ease-in-out";
    }
});

itemList.addEventListener("mouseout", (event) => {
    if (event.target.tagName === "LI") {
        event.target.style.backgroundColor = "";
        event.target.style.color = "black";
    }
    const relatedElement = event.relatedTarget;
    if (relatedElement && relatedElement.tagName !== "LI") {
        // itemList.style.transform = "scale(1)";
    }
});

    
// 2) Реалізація перетягування елемента
   const dragItem = document.getElementById('dragItem');
    const dropTarget = document.getElementById('dropTarget');

    let isDragging = false;
    let shiftX, shiftY;

    dragItem.onmousedown = function(event) {
      shiftX = event.clientX - dragItem.getBoundingClientRect().left;
      shiftY = event.clientY - dragItem.getBoundingClientRect().top;
      dragItem.style.position = 'absolute';
      dragItem.style.zIndex = 1000; 
      document.body.append(dragItem); 

      function moveAt(pageX, pageY) {
        dragItem.style.left = pageX - shiftX + 'px';
        dragItem.style.top = pageY - shiftY + 'px';
      }

      moveAt(event.pageX, event.pageY);

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        dragItem.hidden = true; 
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        dragItem.hidden = false;

        if (elemBelow === dropTarget) {
          dropTarget.classList.add('highlight');
        } else {
          dropTarget.classList.remove('highlight');
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      dragItem.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        dragItem.onmouseup = null;

        if (dropTarget.classList.contains('highlight')) {
          dropTarget.classList.remove('highlight');
          dropTarget.appendChild(dragItem); 
          dragItem.style.left = '0px';
          dragItem.style.top = '0px';
        }
      };
    };

    dragItem.ondragstart = function() {
      return false;
    };