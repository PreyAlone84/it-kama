function canAccess(user, resource) {
  return user.isAuth && (user.role === "admin" || resource.owner === user.id);
}

// Тесты:
console.log(canAccess({ isAuth: true, role: "admin" }, { owner: "user1" })); // true
console.log(canAccess({ isAuth: true, id: "user1" }, { owner: "user1" })); // true
console.log(canAccess({ isAuth: false, role: "admin" }, { owner: "user1" })); // false
