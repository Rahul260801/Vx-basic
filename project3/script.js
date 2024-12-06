
// // document.addEventListener("DOMContentLoaded",function(){ // // Wait for the DOM to be fully loaded before running the script
// //     const form = document.querySelector("form"); // // Get the form and output elements
// //     const output = document.getElementById("output");
// //     function display(){ // // Check if there's existing data in local storage and display it
// //         const storedata = localStorage.getItem("data");
// //         if(storedata){
// //             const data = JSON.parse(storedata);
// //             output.innerHTML = `
// //             <h3>Registation Data </h3>
// //             <p><strong>Full name:</strong> ${data.name}</p>
// //             <p><strong>Email:</strong> ${data.email}</p>
// //             <p><strong>Phone:</strong> ${data.phonecode} ${data.phnnum}</p>
// //             <p><strong>DOB:</strong> ${data.dob}</p>
// //             <p><strong>Location:</strong> ${data.location}</p>
// //             <p><strong>Age:</strong> ${data.age}</p>
// //             <p><Gender>Gender:</strong> ${data.gender}</p>
// //             `;
// //         }
// //     }
// //     display(); // // Call displayStoredData when the page loads


// //     form.addEventListener("submit",function(e){
// //         e.preventDefault(); //// Event listener for form submission

// //         const name = document.getElementById("name").value;
// //         const email = document.getElementById("email").value;
// //         const phoneCode = document.getElementById("phonecode").value;
// //         const phnnum = document.getElementById("phnnum").value;
// //         const dob = document.getElementById("dob").value;
// //         const location = document.getElementById("location").value;
// //         const age = document.getElementById("age").value;
// //         const gender = document.querySelector('input[name="gender"]:checked').value;

            
// //         const formdata = {
// //             name:name,
// //             email:email,
// //             phonecode:phoneCode,
// //             phnnum:phnnum,
// //             dob: dob,
// //             location: location,
// //             age: age,
// //             gender: gender
// //         };
// //         localStorage.setItem("data",JSON.stringify(formdata));// Store the data in localStorage
// //         display(); // // Display the stored data
// //         form.reset();
// //     });
// // });

// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.querySelector("form");
//     const tableBody = document.getElementById("registrationTable").querySelector("tbody");

//     // Function to display stored registration data in the table
//     function displayStoredData() {
//         // Retrieve the stored data from localStorage
//         const storedData = localStorage.getItem("registrationData");

//         // If no data exists in localStorage, initialize it as an empty array
//         let dataArray = [];
//         if (storedData) {
//             try {
//                 // Parse the stored data and ensure it's an array
//                 dataArray = JSON.parse(storedData);
//                 // If the parsed data is not an array, reset to an empty array
//                 if (!Array.isArray(dataArray)) {
//                     dataArray = [];
//                 }
//             } catch (e) {
//                 // If parsing fails (e.g., corrupted data), reset to an empty array
//                 dataArray = [];
//             }
//         }

//         // Clear the table body before adding new data
//         tableBody.innerHTML = "";

//         // Loop through the stored data and add rows to the table
//         dataArray.forEach((data) => {
//             const row = document.createElement("tr");
//             row.innerHTML = `
//                 <td>${data.name}</td>
//                 <td>${data.email}</td>
//                 <td>${data.phonecode} ${data.phnnum}</td>
//                 <td>${data.dob}</td>
//                 <td>${data.location}</td>
//                 <td>${data.age}</td>
//                 <td>${data.gender}</td>
//             `;
//             tableBody.appendChild(row);
//         });
//     }

//     // Display stored data when the page loads
//     displayStoredData();

//     // Event listener for form submission
//     form.addEventListener("submit", function(e) {
//         e.preventDefault(); // Prevent the form from actually submitting

//         // Get the values from the form fields
//         const name = document.getElementById("name").value;
//         const email = document.getElementById("email").value;
//         const phoneCode = document.getElementById("phonecode").value;
//         const phnnum = document.getElementById("phnnum").value;
//         const dob = document.getElementById("dob").value;
//         const location = document.getElementById("location").value;
//         const age = document.getElementById("age").value;
//         const gender = document.querySelector('input[name="gender"]:checked').value;

//         // Create an object to store the form data
//         const formData = {
//             name: name,
//             email: email,
//             phonecode: phoneCode,
//             phnnum: phnnum,
//             dob: dob,
//             location: location,
//             age: age,
//             gender: gender
//         };

//         // Retrieve the existing data from localStorage, or initialize an empty array if no data is present
//         const existingData = localStorage.getItem("registrationData");
//         let dataArray = [];
        
//         // If data exists, parse it
//         if (existingData) {
//             try {
//                 dataArray = JSON.parse(existingData);
//                 // If the parsed data is not an array, reset it to an empty array
//                 if (!Array.isArray(dataArray)) {
//                     dataArray = [];
//                 }
//             } catch (e) {
//                 dataArray = []; // Reset if parsing fails
//             }
//         }

//         // Add the new form data to the array
//         dataArray.push(formData);

//         // Store the updated data array in localStorage
//         localStorage.setItem("registrationData", JSON.stringify(dataArray));

//         // Display the updated data in the table
//         displayStoredData();

//         // Reset the form after submission
//         form.reset();
//     });
// });


document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const tableBody = document.querySelector("#registrationTable tbody");

    // Function to display the stored data in the table
    function displayData() {
        const storedData = localStorage.getItem("registrationData");
        const dataArray = storedData ? JSON.parse(storedData) : [];

        // Clear the table before displaying updated data
        tableBody.innerHTML = "";

        // Loop through the data and create rows for the table
        dataArray.forEach((data, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${data.name}</td>
                <td>${data.email}</td>
                <td>${data.phonecode} ${data.phnnum}</td>
                <td>${data.dob}</td>
                <td>${data.location}</td>
                <td>${data.age}</td>
                <td>${data.gender}</td>
                <td>
                    <button class="edit-btn" data-index="${index}">Edit</button>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
        });

        // Attach edit and delete button event listeners
        document.querySelectorAll(".edit-btn").forEach((btn) => {
            btn.addEventListener("click", editData);
        });
        document.querySelectorAll(".delete-btn").forEach((btn) => {
            btn.addEventListener("click", deleteData);
        });
    }

    // Handle form submission (add or edit data)
    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent form from submitting

        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phonecode: document.getElementById("phonecode").value,
            phnnum: document.getElementById("phnnum").value,
            dob: document.getElementById("dob").value,
            location: document.getElementById("location").value,
            age: document.getElementById("age").value,
            gender: document.querySelector('input[name="gender"]:checked').value
        };

        // Retrieve the existing data or initialize an empty array
        const storedData = localStorage.getItem("registrationData");
        const dataArray = storedData ? JSON.parse(storedData) : [];

        // Add the new data to the array
        dataArray.push(formData);

        // Save the updated data array to localStorage
        localStorage.setItem("registrationData", JSON.stringify(dataArray));

        // Display the updated data in the table and reset the form
        displayData();
        form.reset();
    });

    // Edit data from a specific row
    function editData(e) {
        const index = e.target.getAttribute("data-index");
        const storedData = localStorage.getItem("registrationData");

        if (storedData) {
            const dataArray = JSON.parse(storedData);
            const selectedData = dataArray[index];

            // Pre-fill the form with selected data
            document.getElementById("name").value = selectedData.name;
            document.getElementById("email").value = selectedData.email;
            document.getElementById("phonecode").value = selectedData.phonecode;
            document.getElementById("phnnum").value = selectedData.phnnum;
            document.getElementById("dob").value = selectedData.dob;
            document.getElementById("location").value = selectedData.location;
            document.getElementById("age").value = selectedData.age;
            document.querySelector(`input[name="gender"][value="${selectedData.gender}"]`).checked = true;

            // Remove the selected entry and update the data
            dataArray.splice(index, 1);
            localStorage.setItem("registrationData", JSON.stringify(dataArray));

            // Display updated data
            displayData();
        }
    }

    // Delete data from a specific row
    function deleteData(e) {
        const index = e.target.getAttribute("data-index");
        const storedData = localStorage.getItem("registrationData");

        if (storedData) {
            const dataArray = JSON.parse(storedData);

            // Remove the selected data
            dataArray.splice(index, 1);

            // Save the updated data array to localStorage
            localStorage.setItem("registrationData", JSON.stringify(dataArray));

            // Display updated data
            displayData();
        }
    }

    // Initial display of stored data when the page loads
    displayData();
});
