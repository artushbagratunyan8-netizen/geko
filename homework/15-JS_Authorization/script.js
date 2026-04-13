const users = [
  { username: "admin", password: "1234", isBlocked: false },
  { username: "john", password: "qwerty", isBlocked: true },
  { username: "anna", password: "pass", isBlocked: false }
];
function login(users, username, password) {
    for(let i = 0; i < users.length; i++) {

        if(users[i].username === username) {
            if (users[i].password !== password){
                console.log("Սխալ Գաղտնաբառ");
            } 
            else if (users[i].isBlocked) {
                console.log("Օգտատերը արգելափակված է ");
            }
            else{
                console.log("Բարի գալուստ," + username);
            }
            return;
        }
    }
    console.log("Օգտատերը չի գտնվել");
}
login(users, "admin", "1234");
login(users, "john", "qwerty");
login(users, "anna", "1111");
login(users, "mike", "2222");