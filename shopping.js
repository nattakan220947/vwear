window.onload = pageLoad;

function pageLoad() {
    // ใช้ AJAX โหลด products.json
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "products.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            showData(data);
        }
    };
    xhr.send();
}

function showData(data) {
    let layer = document.getElementById("layer");
    let keys = Object.keys(data);

    // ลบ div เดิมออก (กันซ้ำ)
    layer.innerHTML = "";

    for (let i = 0; i < keys.length; i++) {
        let product = data[keys[i]];

        // สร้างกล่องสินค้า
        let box = document.createElement("div");

        // แทรกรูปสินค้า
        let img = document.createElement("img");
        img.src = product.img;
        img.style.width = "100%";
        img.style.height = "250px";

        // แสดงชื่อ
        let name = document.createElement("h3");
        name.textContent = product.name;

        // แสดง brand
        let brand = document.createElement("p");
        brand.textContent = "Brand: " + product.brand;

        // แสดงราคา
        let price = document.createElement("p");
        price.textContent = "Price: " + product.price + " Bath";

        // เอามาใส่ใน div
        box.appendChild(img);
        box.appendChild(name);
        box.appendChild(brand);
        box.appendChild(price);

        layer.appendChild(box);
    }
}

