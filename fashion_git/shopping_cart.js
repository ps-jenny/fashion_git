let cartContainer = document.getElementById("cart_container")


let cartList = [
  {
    id: 0,
    name: "Jacket",
    url: "Image/jacket-3.jpg",
    count: 1,
    item_price: 499,
    actual_price: 499,
    color: "Brown",
  },
  {
    id: 1,
    name: "Jeans",
    url: "Image/jacket-2.jpg",
    count: 1,
    item_price: 400,
    actual_price: 400,
    color: "Brown",
  },
  {
    id: 2,
    name: "Skirts",
    url: "Image/jacket-1.jpg",
    count: 1,
    item_price: 499,
    actual_price: 499,
    color: "Brown",
  },
  {
    id: 3,
    name: "Jenny",
    url: "Image/jacket-3.jpg",
    count: 1,
    item_price: 499,
    actual_price: 499,
    color: "Brown",
  }
]

function renderCartItem (item) {
    let renderHtml = `
    <div class="card rounded-3 mb-4">
        <div class="card-body p-4">
            <div class="row d-flex justify-content-between align-items-center">
            <div class="col-md-2 col-lg-2 col-xl-2">
                <img
                src="${item.url}"
                class="img-fluid rounded-3" alt="Cotton T-shirt">
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3">
                <p class="lead fw-normal mb-2">${item.name}</p>
                <p><span class="text-muted">Size: </span>M <span class="text-muted">Color: </span>${item.color}</p>
            </div>
            <div class="col-md-3 col-lg-3 col-xl-2 d-flex align-items-center">
                <button class="btn btn-link px-2"
                onclick="decrement(${item.id})">
                <i class="fas fa-minus"></i>
                </button>

                <p class="mb-0 mx-2">${item.count}</p>

                <button class="btn btn-link px-2"
                onclick="increment(${item.id})">
                <i class="fas fa-plus"></i>
                </button>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 class="mb-0">$${item.actual_price}</h5>
            </div>
            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
            </div>
            </div>
        </div>
    </div>
    `
    cartContainer.innerHTML += renderHtml;
}


function decrement (id) {
    let item = cartList[id];
    let ChangeCount = item.count -1;
    if (ChangeCount >= 0) {
        item.count = ChangeCount;
        item.actual_price = item.item_price * item.count;
        cartLoop();
    } else {
        alert("Value shouldn't be negative value")
    }
}
function increment (id) {
    let item = cartList[id];
    let ChangeCount = item.count + 1;
    item.count = ChangeCount;
    item.actual_price = item.item_price * item.count;
    cartLoop();
}


function cartLoop () {
    cartContainer.innerHTML = "";
    for(let i=0; i<cartList.length; i++) {
        renderCartItem(cartList[i]);
    }
}

cartLoop();