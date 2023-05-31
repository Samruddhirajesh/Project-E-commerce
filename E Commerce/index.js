const itemsController = new ItemsController(0);
const newItemForm = document.querySelector('#newItemForm');
newItemForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newItemNameInput = document.querySelector('#newItemNameInput');
    const newItemDescription = document.querySelector('#newItemDescription');
    const name = newItemNameInput.value;
    const description = newItemDescription.value;
    const createdAt = new Date();
    itemsController.addItem(name, description, createdAt);
    newItemNameInput.value = '';
    newItemDescription.value = '';
});
function addItemCard(item){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}
addItemCard({'name':'Hoodies ',
    'img':'F:\JFSJD\PROJECTS\E Commerce\Resources\Images\new9.jpeg',
    'description':'New collection'});

addItemCard({'name':'Orange Dress',
    'img':'F:\JFSJD\PROJECTS\E Commerce\Resources\Images\new11.jpeg',
    'description':'New collection'})

addItemCard({'name':'Blue Dress',
    'img':'F:\JFSJD\PROJECTS\E Commerce\Resources\Images\new29.jpeg',
    'description':'New collection'})

