const fs = require("fs");

const ls = (done) => {

    fs.readdir(process.cwd(), (err, files) => {
        if(err){
            done(err.message)
        }else{
            files.forEach((file) => {
                done(file)
            })
            // done(files)
        }
    })
}

module.exports = ls