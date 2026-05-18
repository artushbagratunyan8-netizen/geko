const orders = [
  {
    id: 1,
    user: "Ivan",
    items: [
      { name: "Laptop", price: 1200, qty: 1 },
      { name: "Mouse", price: 25, qty: 2 }
    ],
    status: "pending",
    createdAt: "2026-04-28"
  },
  {
    id: 2,
    user: "Anna",
    items: [
      { name: "Phone", price: 800, qty: 1 }
    ],
    status: "completed",
    createdAt: "2026-04-20"
  },
  {
    id: 3,
    user: "Ivan",
    items: [
      { name: "Keyboard", price: 100, qty: 1 }
    ],
    status: "pending",
    createdAt: "2026-04-29"
  }
];

function calculateOrderTotal(order) {
  let total = 0;

  for (let i = 0; i < order.items.length; i++) {
    const item = order.items[i];
    total += item.price * item.qty;
  }

  return total;
}

function getUserPendingOrders(orders, username) {
  const result = [];

  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];

    if (order.user === username && order.status === "pending") {
      result.push(order);
    }
  }

  return result;
}

function getTotalRevenue(orders) {
  let total = 0;

  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];

    if (order.status === "completed") {
      total += calculateOrderTotal(order);
    }
  }

  return total;
}

function groupOrdersByUser(orders) {
  const result = {};

  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];

    if (!result[order.user]) {
      result[order.user] = [];
    }

    result[order.user].push(order);
  }

  return result;
}

function getTopUsers(orders, topN) {
  const spending = {};

  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];

    if (order.status === "completed") {
      const total = calculateOrderTotal(order);

      if (!spending[order.user]) {
        spending[order.user] = 0;
      }

      spending[order.user] += total;
    }
  }

  const result = [];

  for (let user in spending) {
    result.push({ user: user, total: spending[user] });
  }

  result.sort((a, b) => b.total - a.total);

  return result.slice(0, topN);
}

console.log(calculateOrderTotal(orders[0]));
console.log(getUserPendingOrders(orders, "Ivan"));
console.log(getTotalRevenue(orders));
console.log(groupOrdersByUser(orders));
console.log(getTopUsers(orders, 2));
