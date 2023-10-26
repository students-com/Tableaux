const verify = document.querySelector('#verify');
const resultDiv = document.querySelector('#result');

verify.addEventListener('click', () => {
    resultDiv.innerHTML = "";
    // Vérifier la présence d'une balise <table>
    const tableElement = document.querySelector('table');
    if (!tableElement) {
        const resultRow = document.createElement('p');
        resultRow.style.color = "red";
        resultRow.textContent = "Le contenu ne contient pas d'éléments tableau";
        resultDiv.appendChild(resultRow);
    }

    // Vérifier la présence de 6 balises <th>
    const thElements = document.querySelectorAll('th');
    if (thElements.length !== 6) {
        const resultRow = document.createElement('p');
        resultRow.style.color = "red";
        resultRow.textContent = "Le contenu ne tableau pas le nombre requit d'en-tete ";
        resultDiv.appendChild(resultRow);
    }

    // Vérifier la présence de 14 balises <tr>
    const trElements = document.querySelectorAll('tr');
    if (trElements.length !== 7) {
        const resultRow = document.createElement('p');
        resultRow.style.color = "red";
        resultRow.textContent = "Le tableau ne contient pas le nombre requit de ligne";
        resultDiv.appendChild(resultRow);
    }

    // Vérifier la présence de 42 balises <td>
    const tdElements = document.querySelectorAll('td');
    if (tdElements.length !== 36) {
        const resultRow = document.createElement('p');
        resultRow.style.color = "red";
        resultRow.textContent = "Le tableau ne contient pas le nombre requit de cellule";
        resultDiv.appendChild(resultRow);
    }
    if(tableElement && thElements.length === 6 && trElements.length === 7 && tdElements.length === 36){
        const resultRow = document.createElement('p');
        resultRow.style.color = "green";
        resultRow.textContent = "Bravos vous avez compléter l'exercice";
        resultDiv.appendChild(resultRow);
    }
})