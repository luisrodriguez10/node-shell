const fs = require("fs");

const cat = (done, cmd) => {
    const params = cmd.split(" ").slice(1);
    fs.readFile(params[0], (err, result) => {
        if (err) {
          done(err.message)
        } else {
          done(result)
        }
      });
}

module.exports = cat