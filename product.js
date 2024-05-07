$(document).ready(function () {
    let nameArry = {};
    let categories = {
        "Vegitables": [{
                name: "Potatoes",
                id: "1",
                price: "5$",
                image: "img1.jpg",
                vendors: [{
                        "name": "Ketan bhai"
                    },
                    {
                        "name": "Ravi bhai"
                    },
                    {
                        "name": "Suresh bhai"
                    }
                ]
            },
            {
                name: "Onions",
                id: "2",
                price: "3$",
                image: "img2.jpg",
                vendors: [{
                        "name": "Mukesh bhai"
                    },
                    {
                        "name": "Paresh bhai"
                    },
                    {
                        "name": "Babu bhai"
                    }
                ]
            },
            {
                name: "Tomatoes",
                id: "3",
                price: "6$",
                image: "img3.jpg",
                vendors: [{
                        "name": "Mukesh bhai"
                    },
                    {
                        "name": "Paresh bhai"
                    },
                    {
                        "name": "Babu bhai"
                    }
                ]
            },
            {
                name: "Carrots",
                id: "4",
                price: "3$",
                image: "img4.jpg",
                vendors: [{
                        "name": "Mukesh bhai"
                    },
                    {
                        "name": "Paresh bhai"
                    },
                    {
                        "name": "Babu bhai"
                    }
                ]
            },
            {
                name: "Sweetcorn",
                id: "5",
                price: "4$",
                image: "img5.jpg",
                vendors: [{
                        "name": "Mukesh bhai"
                    },
                    {
                        "name": "Paresh bhai"
                    },
                    {
                        "name": "Babu bhai"
                    },
    
                ]
            },
            {
                name: "Broccoli",
                id: "6",
                price: "9$",
                image: "img6.jpg",
                vendors: [{
                        "name": "Mukesh bhai"
                    },
                    {
                        "name": "Paresh bhai"
                    },
                    {
                        "name": "Babu bhai"
                    },
    
                ]
            },
            {
                name: "Cabbage",
                id: "7",
                price: "4$",
                image: "img7.jpg",
                vendors: [{
                        "name": "Mukesh bhai"
                    },
                    {
                        "name": "Paresh bhai"
                    },
                    {
                        "name": "Babu bhai"
                    },
    
                ]
            }
        ],
        "Fruits": [{
                name: "Kiwi",
                id: "8",
                price: "5$",
                image: "img8.jpg",
                vendors: [{
                        "name": "Ritesh bhai"
                    },
                    {
                        "name": "Ravikant bhai"
                    },
                    {
                        "name": "Sailesh bhai"
                    }
                ]
            },
            {
                name: "Mangoes",
                id: "9",
                price: "6$",
                image: "img9.jpg",
                vendors: [{
                        "name": "Mahesh bhai"
                    },
                    {
                        "name": "Jaysukh bhai"
                    },
                    {
                        "name": "Pankaj bhai"
                    }
                ]
            },
            {
                name: "Apples",
                id: "10",
                price: "8$",
                image: "img10.jpg",
                vendors: [{
                        "name": "Mahesh bhai"
                    },
                    {
                        "name": "Jaysukh bhai"
                    },
                    {
                        "name": "Pankaj bhai"
                    }
                ]
            },
            {
                name: "Litchi",
                id: "11",
                price: "7$",
                image: "img11.jpg",
                vendors: [{
                        "name": "Mahesh bhai"
                    },
                    {
                        "name": "Jaysukh bhai"
                    },
                    {
                        "name": "Pankaj bhai"
                    }
                ]
            },
            {
                name: "CusterdApples",
                id: "12",
                price: "7$",
                image: "img12.jpg",
                vendors: [{
                        "name": "Hardik bhai"
                    },
                    {
                        "name": "Jignesh bhai"
                    },
                    {
                        "name": "Nikunj bhai"
                    },
    
                ]
            },
            {
                name: "Pears",
                id: "13",
                price: "6$",
                image: "img13.jpg",
                vendors: [{
                        "name": "Hardik bhai"
                    },
                    {
                        "name": "Jignesh bhai"
                    },
                    {
                        "name": "Nikunj bhai"
                    },
    
                ]
            },
            {
                name: "Avocado",
                id: "14",
                price: "5$",
                image: "img14.jpg",
                vendors: [{
                        "name": "Hardik bhai"
                    },
                    {
                        "name": "Jignesh bhai"
                    },
                    {
                        "name": "Nikunj bhai"
                    },
    
                ]
            },
            
        ],
        "Dairy_item": [{
                name: "Rasgulla",
                id: "15",
                price: "5$",
                image: "img15.jpg",
                vendors: [{
                        "name": "Mohan bhai"
                    },
                    {
                        "name": "Kishor bhai"
                    },
                    {
                        "name": "Ankit bhai"
                    }
                ]
            },
            {
                name: "Shrikhand",
                id: "16",
                price: "4$",
                image: "img16.jpg",
                vendors: [{
                        "name": "Bhavik bhai"
                    },
                    {
                        "name": "Bhavesh bhai"
                    },
                    {
                        "name": "Ajay bhai"
                    }
                ]
            },
            {
                name: "Paneer",
                id: "17",
                price: "7$",
                image: "img17.jpg",
                vendors: [{
                        "name": "Bhavik bhai"
                    },
                    {
                        "name": "Bhavesh bhai"
                    },
                    {
                        "name": "Ajay bhai"
                    }
                ]
            },
            {
                name: "Ice-cream",
                id: "18",
                price: "6$",
                image: "img18.jpg",
                vendors: [{
                        "name": "Bhavik bhai"
                    },
                    {
                        "name": "Bhavesh bhai"
                    },
                    {
                        "name": "Ajay bhai"
                    }
                ]
            },
            {
                name: "Paneer",
                id: "19",
                price: "3$",
                image: "img19.jpg",
                vendors: [{
                        "name": "Naresh bhai"
                    },
                    {
                        "name": "Dilip bhai"
                    },
                    {
                        "name": "Dipak bhai"
                    },
    
                ]
            },
            {
                name: "Sweets",
                id: "20",
                price: "72$",
                image: "img20.jpg",
                vendors: [{
                        "name": "Naresh bhai"
                    },
                    {
                        "name": "Dilip bhai"
                    },
                    {
                        "name": "Dipak bhai"
                    },
    
                ]
            },{
                name: "Milk",
                id: "21",
                price: "8$",
                image: "img21.jpg",
                vendors: [{
                        "name": "Naresh bhai"
                    },
                    {
                        "name": "Dilip bhai"
                    },
                    {
                        "name": "Dipak bhai"
                    },
    
                ]
            }
        ]
    }


    // function displayOrderedItems() {
    //     const productsContainer = $("#productsContainer");
    //     let orderProductIds = [];

    //     nameArry = JSON.parse(localStorage.getItem("nameArry"));
    //     const userId = localStorage.getItem("userId");

    //     if (nameArry && nameArry[userId]) {
    //         orderProductIds = nameArry[userId];
    //     }

    //     let subtotal = 0;
    //     orderProductIds.forEach(productId => {
    //         // Find the product by productId
    //         const product = findProductById(productId);
    //         if (product) {
    //             const productHTML = `<div class="product-card" data-product-id="${product.id}" style="display: flex; align-items: center; margin-bottom: 10px;">
    //                     <img src="${product.image}" alt="${product.name}" style="width: 100px; height: 120px; margin-right: 10px;">
    //                     <div class="product-details" style="flex: 1;">
    //                         <div class="product-id">ID: ${product.id}</div>
    //                         <div class="product-name">Name: ${product.name}</div>
    //                         <div class="product-price">Price: ${product.price}</div>
    //                     </div>
                        
    //                     <div class="product-quantity">
    //                     <button class="decrease">-</button>
    //                     <input type="number" class="quantity-input" value="1">
    //                     <button class="increase">+</button>
    //                 </div>
    //                     <button class="delete-btn" onclick="removeItem('${product.id}')" style="background-color: #e74c3c; color: #fff; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">Delete</button>
    //                 </div>`;
    //             productsContainer.append(productHTML);
    //             // subtotal += product.price; // Update subtotal
    //             const price = parseFloat(product.price.replace('$', ''));
    //             subtotal += price; // Update subtotal


    //         }
    //     });
    function displayOrderedItems() {
        const productsContainer = $("#productsContainer");
        let orderProductIds = [];
    
        nameArry = JSON.parse(localStorage.getItem("nameArry"));
        const userId = localStorage.getItem("userId");
    
        if (nameArry && nameArry[userId]) {
            orderProductIds = nameArry[userId];
        }
    
        let subtotal = 0;
        orderProductIds.forEach(productId => {
            // Find the product by productId
            const product = findProductById(productId);
            if (product) {
                const productHTML = `<div class="product-card" data-product-id="${product.id}" style="display: flex; align-items: center; margin-bottom: 10px;">
                        <img src="${product.image}" alt="${product.name}" style="width: 100px; height: 120px; margin-right: 10px;">
                        <div class="product-details" style="flex: 1;">
                            <div class="product-id">ID: ${product.id}</div>
                            <div class="product-name">Name: ${product.name}</div>
                            <div class="product-price">Price: ${product.price}</div>
                        </div>
                        <div class="product-quantity">
                            <button class="decrease">-</button>
                            <input type="number" class="quantity-input" value="1">
                            <button class="increase">+</button>
                        </div>
                        <button class="delete-btn" onclick="removeItem('${product.id}')">Delete</button>
                    </div>`;
                productsContainer.append(productHTML);
    
                const price = parseFloat(product.price.replace('$', ''));
                subtotal += price; 
            }
        });
    
        // Calculate taxes
        const GST10 = subtotal * 0.1;
        const GST5 = subtotal * 0.05;
        const GST2 = subtotal * 0.02;

        // Update the UI with subtotal and taxes
        $("#subtotal").text(`Subtotal: ${subtotal}`);
        $("#GST10").text(`GST10% : ${GST10}`);
        $("#GST5").text(`GST5% : ${GST5}`);
        $("#GST2").text(`GST2% : ${GST2}`);

        // Calculate total
        const total = subtotal + GST10 + GST5 + GST2;
        $("#Total").text(`Total : ${total}`);
    }

    displayOrderedItems();

    productsContainer.on('click', '.increase', function () {
        const quantityInput = $(this).siblings('.quantity-input');
        let currentValue = parseInt(quantityInput.val());
        currentValue++;
        quantityInput.val(currentValue);
        updateCart(); // Call a function to update the cart total
    });

    // Decrease button event listener
    productsContainer.on('click', '.decrease', function () {
        const quantityInput = $(this).siblings('.quantity-input');
        let currentValue = parseInt(quantityInput.val());
        if (currentValue > 1) {
            currentValue--;
            quantityInput.val(currentValue);
            updateCart(); // Call a function to update the cart total
        }
    });

    function findProductById(productId) {
        for (let key in categories) {
            const product = categories[key].find(product => product.id === productId);
            if (product) {
                return product;
            }
        }
        return null;
    }
});

function removeItem(productId) {
    let nameArry = JSON.parse(localStorage.getItem("nameArry"));
    const userId = localStorage.getItem("userId");
    console.log("Delete item id is :" + productId);

    if (window.confirm("Are you sure you want to delete?")) {
        deleteItem(nameArry, userId, productId);
    }
}

function deleteItem(nameArry, userId, productId) {
    console.log(nameArry[userId]);

    let index = nameArry[userId].indexOf(productId);
    nameArry[userId].splice(index, 1);

    console.log(nameArry[userId].indexOf(productId));
    storage(nameArry);
}

function storage(nameArry) {
    localStorage.setItem("nameArry", JSON.stringify(nameArry));
}
