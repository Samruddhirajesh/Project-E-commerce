const itemsController = new ItemsController(0);
const newItemForm = document.querySelector('#newItemForm');
newItemForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newItemName = document.querySelector('#newItemName');
    const newItemDescription = document.querySelector('#newItemDescription');
    const newItemImageUrl = document.querySelector('#newItemImageUrl');    
    const name = newItemName.value;
    const description = newItemDescription.value;
    const imageUrl = newItemImageUrl.value;
    itemsController.addItem(name, description, imageUrl);
    newItemDescription.value = '';    
});