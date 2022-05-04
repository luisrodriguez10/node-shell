const pwd = require("./pwd");
const date = require("./date");
const echo = require("./echo");
const cat = require("./cat");
const ls = require("./ls");

const done = (message) => {
  process.stdout.write(message);
  process.stdout.write("\nprompt > ");
};

//Output a prompt
process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); //remove the newline

  if (cmd === "pwd") {
    pwd(done);
  }
  if(cmd === 'ls'){
    ls(done)
  }

  if (cmd === "date") {
    date(done);
  }
  if (cmd.startsWith("echo")) {
    echo(done, cmd);
  }
  if (cmd.startsWith("cat")) {
    cat(done,cmd)
    
  }
});
