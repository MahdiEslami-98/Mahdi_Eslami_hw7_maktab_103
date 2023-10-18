const addBtn = <HTMLButtonElement>document.getElementById("add_btn");
const addModalElem = <HTMLDivElement>document.querySelector(".add-modal");
const mainElem = <HTMLElement>document.querySelector("main");
const tBodyElem = <HTMLTableSectionElement>document.getElementById("list");
const cancelBtn = <HTMLButtonElement>document.getElementById("cancel");
const saveBtn = <HTMLButtonElement>document.getElementById("save");

const modelElem = <HTMLInputElement>document.getElementById("model_inp");
const imageElem = <HTMLInputElement>document.getElementById("pic_inp");
const processorElem = <HTMLInputElement>document.getElementById("cpu_inp");
const ramElem = <HTMLInputElement>document.getElementById("ram_inp");
const storageElem = <HTMLInputElement>document.getElementById("hd_inp");
const displayElem = <HTMLInputElement>document.getElementById("display_inp");
const graphicsElem = <HTMLInputElement>document.getElementById("gpu");
const osElem = <HTMLInputElement>document.getElementById("os_inp");
const weightElem = <HTMLInputElement>document.getElementById("weight_inp");
const batteryElem = <HTMLInputElement>document.getElementById("battery_inp");
const priceElem = <HTMLInputElement>document.getElementById("price_inp");

type productType = {
  id: string;
  model: string;
  image: string;
  processor: string;
  ram: string;
  storage: string;
  display: string;
  graphics: string;
  os: string;
  weight: string;
  battery: string;
  price: string;
};

const productsDB: Array<productType> = [
  {
    id: "1",
    model: "ASUS TUF Gaming F15 FX507ZC",
    image: "1",
    processor: "Intel Core i7-12700H",
    ram: "16",
    storage: "1 TB SSD",
    display: "15.6",
    graphics: "NVIDIA GeForce RTX 3050",
    os: "None",
    weight: "2.2",
    battery: "3",
    price: "55,700,000",
  },
  {
    id: "2",
    model: "ASUS ROG Strix G15 G513RC",
    image: "2",
    processor: "AMD Ryzen 7-6800H",
    ram: "16",
    storage: "512 GB SSD",
    display: "15.6",
    graphics: "NVIDIA GeForce RTX 3050Ti",
    os: "None",
    weight: "2.2",
    battery: "2",
    price: "46,990,000",
  },
  {
    id: "3",
    model: "HP Pavilion x360",
    image: "3",
    processor: "Intel Core i5-1335U",
    ram: "16",
    storage: "512 GB SSD",
    display: "14",
    graphics: "Intel UHD Graphics",
    os: "Windows 11 Home",
    weight: "2.2",
    battery: "3",
    price: "46,700,000",
  },
];

let products = [...productsDB];
let isOpen = false;

const deleteProduct = (id: string) => {
  products = products.filter((product) => product.id !== id);
  renderProducts(products);
};

const renderProducts = (arr: Array<productType>) => {
  tBodyElem.innerHTML = "";
  arr.forEach((product: productType) => {
    tBodyElem.insertAdjacentHTML(
      "beforeend",
      `
      <tr>
        <td>${product.model}</td>
        <td><img src="./image/${product.image}.jpg" alt=""></td>
        <td>${product.processor}</td>
        <td>${product.ram} GB</td>
        <td>${product.storage}</td>
        <td>${product.display} Inch</td>
        <td>${product.graphics}</td>
        <td>${product.os}</td>
        <td>${product.weight} Kg</td>
        <td>${product.battery}h</td>
        <td>${product.price}</td>
        <td><button class="btn">Buy now</button></td>
        <td><button class="btn" onclick="deleteProduct('${product.id}')">X</button></td>
      </tr>
    `
    );
  });
};
renderProducts(products);

const addProduct = () => {
  if (
    modelElem.value &&
    imageElem.value &&
    processorElem.value &&
    ramElem.value &&
    storageElem.value &&
    displayElem.value &&
    graphicsElem.value &&
    osElem.value &&
    weightElem.value &&
    batteryElem.value &&
    priceElem.value
  ) {
    products.push({
      id: `${products.length + 1}`,
      model: modelElem.value,
      image: imageElem.value,
      processor: processorElem.value,
      ram: ramElem.value,
      storage: storageElem.value,
      display: displayElem.value,
      graphics: graphicsElem.value,
      os: osElem.value,
      weight: weightElem.value,
      battery: batteryElem.value,
      price: priceElem.value,
    });
    renderProducts(products);
  }
};

addBtn.addEventListener("click", () => {
  addModalElem.style.right = "-200px";
  mainElem.classList.add("active");
});
saveBtn.addEventListener("click", addProduct);
cancelBtn.addEventListener("click", () => {
  addModalElem.style.right = "-700px";
  mainElem.classList.remove("active");
});
