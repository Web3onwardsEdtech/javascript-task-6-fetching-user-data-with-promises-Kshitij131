function fetchUserData() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users/2')
            .then(response => {
                if (!response.ok) {
                    reject(`HTTP error! Status: ${response.status}`);
                } else {
                    return response.json();
                }
            })
            .then(data => {
                if (data && data.name && data.email) {
                    resolve({ name: data.name, email: data.email });
                } else {
                    reject('Incomplete user data received');
                }
            })
            .catch(error => {
                reject(`Error fetching user data: ${error.message}`);
            });
    });
}

// Example Usage:
fetchUserData()
    .then(data => console.log(data))       // Output: { name: "Leanne Graham", email: "Sincere@april.biz" }
    .catch(error => console.log(error));  // Output: Error fetching user data: ...

