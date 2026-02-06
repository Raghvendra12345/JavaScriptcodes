
const API_URL ="https://crudcrud.com/api/a7454483de2f484682dd78882fae753b/orders";

//page reloadss
window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(API_URL)
    .then((res) => {
      res.data.forEach((order) => displayOrder(order));
    })
    .catch((err) => console.log(err));
});



function handleFormSubmit(event) {
  event.preventDefault();

  const price = event.target.price.value;
  const dish = event.target.dish.value;
  const table = event.target.table.value;

  const orderDetails = {
    price,
    dish,
    table,
  };

  axios
    .post(API_URL, orderDetails)
    .then((res) => {
      displayOrder(res.data);
      event.target.reset();
    })
    .catch((err) => console.log(err));
}


function displayOrder(order) {
  const tablee = document.getElementById(order.table);

  const li = document.createElement("li");
  li.textContent = `${order.dish} - ${order.price} `;

  li.id = order._id;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete Order";

  deleteBtn.addEventListener("click", () => {
    deleteOrder(order._id, li);
  });

  li.appendChild(deleteBtn);
  tablee.appendChild(li);
}

// Deletee 
function deleteOrder(id, li) {
  axios
    .delete(`${API_URL}/${id}`)
    .then(() => {
      li.remove();
    })
    .catch((err) => console.log(err));
}
