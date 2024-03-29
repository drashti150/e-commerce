$(document).ready(function () {
    let nameArry = {};
    const categories = {
        "Vegetables": [{
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
                price: "8$",
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
            }
        ],
        "Fruits": [{
                name: "Apples",
                id: "4",
                price: "5$",
                image: "img4.jpg",
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
                id: "5",
                price: "6$",
                image: "img5.jpg",
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
                name: "Kiwis",
                id: "6",
                price: "4$",
                image: "img6.jpg",
                vendors: [{
                        "name": "Hardik bhai"
                    },
                    {
                        "name": "Jignesh bhai"
                    },
                    {
                        "name": "Nikunj bhai"
                    }
                ]
            }
        ],
        "Dairy Items": [{
                name: "Paneer",
                id: "7",
                price: "5$",
                image: "img7.jpg",
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
                name: "Sweets",
                id: "8",
                price: "3$",
                image: "img8.jpg",
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
                name: "Milk",
                id: "9",
                price: "8$",
                image: "img9.jpg",
                vendors: [{
                        "name": "Naresh bhai"
                    },
                    {
                        "name": "Dilip bhai"
                    },
                    {
                        "name": "Dipak bhai"
                    }
                ]
            }
        ]
    };

    let arr = [];
    let userId = 0;
    let productId = 0;

    function displayOrderedItems() {
        const productsContainer = $("#productsContainer");
        let orderProductIds = [];

        nameArry = JSON.parse(localStorage.getItem("nameArry"));
        const userId = localStorage.getItem("userId");

        if (nameArry && nameArry[userId]) {
            orderProductIds = nameArry[userId];
        }

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
                        <button class="delete-btn" onclick="removeItem('${product.id}')" style="background-color: #e74c3c; color: #fff; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">Delete</button>
                    </div>`;
                productsContainer.append(productHTML);
            }
        });

    }

    displayOrderedItems();

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
    console.log(nameArry)
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

























// // // Function to remove the item from the page
// // function removeItemPage(productId) {
// //     $(`[data-product-id="${productId}"]`).closest('.product-card').remove();
// // }

// // function removeItem(productId) {
// //     console.log("Delete item id is :" + productId);

// //     if (window.confirm("Are you sure you want to Delete?")) {
// //         removeItemPage(productId);
// //         console.log("Item deleted from the cart.")
// //         // location.reload();
// //     } else {
// //         console.log("Not Delete this item.")
// //     }
// // }


// // // function reloadPage() {
// // //     location.reload();
// // // }

















// // // delete from storage
// // // function storage(nameArry) {
// // //     localStorage.setItem("nameArry", JSON.stringify(nameArry));
// // // }

// // // function deleteItem(nameArry, userId, productId) {
// // //     nameArry[userId].splice(nameArry[userId].indexOf(productId), 1);
// // //     storage(nameArry);
// // // }

// // // function removeItem(productId) {
// // //     let nameArry = JSON.parse(localStorage.getItem("nameArry"));
// // //     let userId = localStorage.getItem("userId");
// // //     console.log("Delete item id is :" + productId);

// // //     if (window.confirm("Are you sure you want to Delete?")) {
// // //         deleteItem(nameArry, userId, productId);
// // //         location.reload();
// // //     }
// // // }