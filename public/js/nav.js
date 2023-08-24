// document.addEventListener('DOMContentLoaded', function() {
//     let ul = document.querySelector('.links-container');

//     auth.onAuthStateChanged((user) => {
//         if (user) {
//             // user is logged in
//             ul.innerHTML += `
//             <li class="link-item"><a href="/admin" class="link">Dashboard</a></li>
//             <li class="link-item"><a href="#" onclick="logoutUser()" class="link">Logout</a></li>
//             `
//         } else {
//             // user not logged in
//             ul.innerHTML += `
//             <li class="link-item"><a href="/admin" class="link">Login</a></li>
//             `
//         }
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    // Move the ul query inside the DOMContentLoaded event to ensure the element exists
    let ul = document.querySelector('.links-container');

    if (ul) {
        auth.onAuthStateChanged((user) => {
            if (user) {
                // user is logged in
                ul.innerHTML = `
                <li class="link-item"><a href="/admin" class="link">Dashboard</a></li>
                <li class="link-item"><a href="#" onclick="logoutUser()" class="link">Logout</a></li>
                `;
            } else {
                // user not logged in
                ul.innerHTML = `
                <li class="link-item"><a href="/admin" class="link">Login</a></li>
                `;
            }
        });
    } else {
        console.error("Error: .links-container element not found.");
    }
});
