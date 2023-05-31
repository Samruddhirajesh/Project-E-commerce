class ItemsController {
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }
    addItem(name, description,imageUrl) {
        const item = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            description: description,
            imageUrl: imageUrl
        };

        // Push the item to the items property
        this.items.push(item);
        localStorage.setItem("items", JSON.stringify(this.items));
    

    }
}

