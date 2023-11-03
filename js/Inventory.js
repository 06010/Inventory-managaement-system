document.addEventListener('DOMContentLoaded', function () {
    const itemForm = document.getElementById('item-form');
    const itemList = document.getElementById('item-list');

    itemForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const itemName = document.getElementById('item-name').value;
        if (itemName) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span>${itemName}</span><button class="delete">Delete</button>`;
            itemList.appendChild(listItem);
            document.getElementById('item-name').value = '';

            // Add event listener to delete button
            listItem.querySelector('.delete').addEventListener('click', function () {
                itemList.removeChild(listItem);
            });
        }
    });
});
