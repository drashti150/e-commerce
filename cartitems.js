// if (!localStorage.getItem("isLoggedIn")) {
//     window.location.href = "cart";
//     navigateTologgedIn();
//   }
$(document).ready(function () {
    $("#logSubmit").click(function () {
        $(".demo").show();
        $(".box").hide();
    });
});
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

console.log(categories);

localStorage.setItem("products", JSON.stringify(categories));

$(document).ready(function () {
    $("#logSubmit").click(function () {
        $(".demo").show();
        $(".box").hide();
    });

    updateCartCount();
    getproducts();

});

let orderProducts = [];
let userId = 0;
let nameArry = {};

document.addEventListener("DOMContentLoaded", function () {
    userId = localStorage.getItem("userId");
    productId = localStorage.getItem("productid");

    if (localStorage.getItem("nameArry")) {
        nameArry = JSON.parse(localStorage.getItem("nameArry"));
        orderProducts = nameArry[userId] ? nameArry[userId] : [];
        updateCartCount();
    }
});

//  add in the cart
function addToCart(id) {
    console.log("selected item Id is : " + id);
    if (orderProducts.includes(id)) {
        console.log('Item already added to the cart');
    } else {
        orderProducts.push(id);
        let val = Number($("#cartcount").html());
        val++;
        $("#cartcount").html(val);
        $(`#cart-${id}`).html('<i class="fa fa-check-square-o" style="margin-left: 15px; color: white; background: red; width: 60px; height: 40px; line-height: 40px; text-align: center" aria-hidden="true"></i>');
        nameArry[userId] = orderProducts;
        localStorage.setItem("nameArry", JSON.stringify(nameArry));
    }
}

function cartIconColors() {
    let stored = JSON.parse(localStorage.getItem("nameArry"))[userId] || [];
    stored.forEach(productId => {
        $(`#cart-${productId} i`).css("color", "red");
    })
}

$(document).ready(function () {
    cartIconColors();
})


function getproducts() {
    for (let key in categories) {
        let html = `<h2 style="color:black;text-align:left;margin:20px;text-decoration:none;text-decoration-style:single; font-size:x-large;">${key}</h2><div class="pro-container">`;

        categories[key].forEach(product => {

            html += `<div class="pro">
                                <img src="${product.image}">
                                <div class="desc">
                                    <span>${product.name}</span>
                                    <h6></h6>
                                    <div class="stars">
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    </div>
                                    <div class="productcart">
                                    <h5>${product.price}</h5>
                                    
                                <a href="#" class="add" id="cart-${product.id}">
                                    <i class="fa fa-shopping-cart cart" style="font-size: xx-large;margin-bottom:20px; margin-left :15px"; onclick='addToCart("${product.id}")' aria-hidden="true"></i>
                                </a>
                                </div>

                            </div>`;
        });

        html += "</div>";
        $("#product1").append(html);
    }
}

//  cart item
function updateCartCount() {
    if (orderProducts.length > 0) {
        let val = orderProducts.length;
        $("#cartcount").html(val);
    }
}

function findProductById(productId) {
    for (let key in categories) {
        let product = categories[key].find(product => product.id === productId);
        if (product) {
            return product;
        }
    }
    return null;

}

//  logout
function logout() {
    localStorage.removeItem("userId");
    window.location.href = "login.html";
    navigatetoHome();
}

function viewCart() {
    // localStorage.setItem("cartItems", JSON.stringify(orderProducts));
    window.location.href = "product.html"
}

function navigatetoHome() {
    let domain = window.location.href.split("/").slice(0, 5).join("/");
    location.replace(`${domain}/login.html`);
}
