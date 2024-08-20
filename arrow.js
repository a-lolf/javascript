const user = {
  username: "Amaan",
  _id: 123,
  welcomeMsg: function (arg1) {
    console.log(`Welcome ${this.username}`);
  },
};

user.username = "sam";
user.welcomeMsg();

function chai() {
  console.log("this");
}

chai();

const showProduct = (args) => {
    console.log(`${args} was passed`);
    
}

showProduct("vedu")
