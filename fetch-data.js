 // Function to fetch user data from API
async function fetchUserData() {
    // Define API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Get reference to the display container
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from API
        const response = await fetch(apiUrl);

        // Convert response to JSON
        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create a <ul> to hold user names
        const userList = document.createElement('ul');

        // Loop through users and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append user list to container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Display error message if fetch fails
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Run fetchUserData when the page loads
document.addEventListener('DOMContentLoaded', fetchUserData);

