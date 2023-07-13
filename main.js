var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
  e.preventDefault();
  // Get input value
  var newItem = document.getElementById('item').value.trim();

  if (newItem !== '') {
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button element
    var deleteBtn = document.createElement('button');
    // Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    // Append delete button to li
    li.appendChild(deleteBtn);

    // Create edit button element
    var editBtn = document.createElement('button');
    // Add classes to edit button
    editBtn.className = 'btn btn-primary btn-sm float-right edit mr-2';
    // Append text node
    editBtn.appendChild(document.createTextNode('Edit'));
    // Append edit button to li
    li.appendChild(editBtn);

    // Append li to list
    itemList.appendChild(li);

    // Clear the input field
    document.getElementById('item').value = '';

    // Add edit functionality to the newly added edit button
    editBtn.addEventListener('click', editItem);
  }
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Edit item
function editItem(e) {
  var li = e.target.parentElement;
  var itemText = li.firstChild.textContent;

  // Check if an input field or Save button already exists
  if (li.querySelector('.edit-input') || li.querySelector('.save')) {
    return; // Exit the function if already in edit mode
  }

  // Create an input field
  var input = document.createElement('input');
  input.type = 'text';
  input.className = 'form-control edit-input';
  input.value = itemText;

  // Replace the item text with the input field
  li.replaceChild(input, li.firstChild);

  // Create save button
  var saveBtn = document.createElement('button');
  saveBtn.className = 'btn btn-success btn-sm float-right save mr-2';
  saveBtn.appendChild(document.createTextNode('Save'));
  li.appendChild(saveBtn);

  // Add event listener to save button
  saveBtn.addEventListener('click', function () {
    saveItem(li, input.value.trim());
  });

  // Add event listener to save changes on input blur
  input.addEventListener('blur', function () {
    saveItem(li, input.value.trim());
  });
}

// Save item changes
function saveItem(li, newItemName) {
  // Update the item name if a valid input is provided
  if (newItemName !== '') {
    var itemText = document.createTextNode(newItemName);
    li.replaceChild(itemText, li.firstChild);
    alert('Item saved successfully!');
  } else {
    alert('Please provide a valid item name.');
  }

  // Remove save button if it exists
  var saveBtn = li.querySelector('.save');
  if (saveBtn) {
    li.removeChild(saveBtn);
  }
}

// Add edit button to existing list items
var existingItems = itemList.getElementsByTagName('li');
for (var i = 0; i < existingItems.length; i++) {
  var editBtn = document.createElement('button');
  editBtn.className = 'btn btn-primary btn-sm float-right edit mr-2';
  editBtn.appendChild(document.createTextNode('Edit'));
  editBtn.addEventListener('click', editItem);
  existingItems[i].appendChild(editBtn);
}

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) !== -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
