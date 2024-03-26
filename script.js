// document.addEventListener("DOMContentLoaded", function () {
//     const productCardsContainer = document.getElementById("product-cards");
  
//     function generateProductCard(title, author, price, imageUrl) {
//       const cardDiv = document.createElement("div");
//       cardDiv.classList.add("bg-white", "rounded-lg", "overflow-hidden", "shadow-md", "product-card", "w-72");
//       cardDiv.innerHTML = `
//         <div class="image-container">
//           <img src="${imageUrl}" alt="${title}" class="w-full h-64 object-cover">
//         </div>
//         <div class="p-4">
//           <h2 class="text-lg font-bold mb-2">${title}</h2>
//           <p class="text-gray-700 mb-2">Author: ${author}</p>
//           <p class="text-gray-700 mb-2">Price: ${price}</p>
//         </div>
//       `;
//       productCardsContainer.appendChild(cardDiv);
//     }
  
//     generateProductCard("Manga Title 1", "Author Name 1", "$19.99", "https://i.pinimg.com/564x/71/5c/07/715c07b54901446813ba1b69a2994a99.jpg");
//     generateProductCard("Manga Title 2", "Author Name 2", "$24.99", "https://i.pinimg.com/564x/37/6f/c1/376fc1cd4a32c1750c9e853f4ee9c38c.jpg");
//     generateProductCard("Manga Title 3", "Author Name 3", "$29.99", "https://i.pinimg.com/564x/11/d0/6f/11d06ff893e7e126482c083a674921f1.jpg");
//   });

// script.js
function viewProduct(productUrl) {
    window.location.href = productUrl; // Redirect to the product page
  }
  
  // script.js
document.addEventListener("DOMContentLoaded", function () {
    // Function to generate product card
    function generateProductCard(title, author, price, imageUrl) {
      const productContainer = document.getElementById("product-cards");
  
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("bg-white", "rounded-lg", "overflow-hidden", "shadow-md", "product-card");
      cardDiv.innerHTML = `
        <div class="image-container hover:opacity-75">
          <img src="${imageUrl}" alt="${title}" class="w-full h-64 object-cover">
        </div>
        <div class="p-4">
          <h2 class="text-lg font-bold mb-2">${title}</h2>
          <p class="text-gray-700 mb-2">Author: <a href="#" class="author-link text-blue-500 hover:underline">${author}</a></p>
          <p class="text-gray-700 mb-2">Price: ${price}</p>
        </div>
      `;
  
      // Add click event to view product details
      cardDiv.addEventListener("click", function () {
        window.location.href = "product.html"; // Redirect to the product page
      });
  
      productContainer.appendChild(cardDiv);
    }
  
    // Example product data (you can fetch this from an API)
    const products = [
      { title: "Manga Title 1", author: "Author Name 1", price: "$19.99", imageUrl: "https://i.pinimg.com/564x/37/6f/c1/376fc1cd4a32c1750c9e853f4ee9c38c.jpg" },
      { title: "Manga Title 2", author: "Author Name 2", price: "$24.99", imageUrl: "https://i.pinimg.com/564x/71/5c/07/715c07b54901446813ba1b69a2994a99.jpg" },
      { title: "Manga Title 3", author: "Author Name 3", price: "$29.99", imageUrl: "https://i.pinimg.com/564x/11/d0/6f/11d06ff893e7e126482c083a674921f1.jpg" },
      // Add more product data as needed
    ];
  
    // Generate product cards
    products.forEach(product => {
      generateProductCard(product.title, product.author, product.price, product.imageUrl);
    });
  
    // Add click event to author links
    const authorLinks = document.querySelectorAll(".author-link");
    authorLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent card click event from triggering
        // You can handle author link clicks here
        alert("Author link clicked: " + link.textContent);
      });
    });
  });
  