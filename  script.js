function sendDataToGoogleScript(action) {
    var url = 'https://script.google.com/macros/s/AKfycbzude3T6YqReIz3GJaab1pPGB2BGWc7NtOZQ-5zbrtY0wvFeMdxId3sXb59ohcBJg37/exec';
    var data = {
        action: action
    };

    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch(url, options)
        .then(response => {
            if (response.ok) {
                console.log('Дані успішно відправлені на сервер');
                // Тут можна додати код для відкриття камери, якщо потрібно
            } else {
                console.error('Помилка при відправленні даних на сервер:', response.status);
            }
        })
        .catch(error => console.error('Помилка при відправленні даних:', error));
}

document.getElementById("addProductBtn").addEventListener("click", function() {
    sendDataToGoogleScript("Додати товар");
});

document.getElementById("returnProductBtn").addEventListener("click", function() {
    sendDataToGoogleScript("Повернути товар");
});
