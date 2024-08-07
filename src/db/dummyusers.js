class User {
  name;
  email;
  password;
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

const DummyUsers = [
  new User("Alice", "useralice@email.com", "alicespassword"),
  new User("Bob", "userbob@email.com", "bobspassword"),
  new User("Catie", "usercatie@email.com", "catiespassword"),
  new User("One!", "1", "1"),
];

export function findUser(email, password) {
  const user = DummyUsers.filter(
    (user) => user.email == email && user.password == password
  );
  if (user.length > 0) {
    return { email: user[0].email, name: user[0].name };
  } else {
    return null;
  }
}
