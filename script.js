//your code here!
const list = document.getElementById('infi-list'); // Ensure this is the ID of your list
let itemCount = 0; // Initial number of items

// Function to create and append list items
function addItems(count) {
    for (let i = 0; i < count; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `Item ${itemCount + 1}`;
        list.appendChild(listItem);
        itemCount++;
    }
}

// Add initial items
addItems(10);

// Infinite scroll functionality
window.addEventListener('scroll', () => {
    // Check if the user has scrolled to the bottom of the page
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // Add 2 more items when reaching the end of the list
        addItems(2);
    }
});
