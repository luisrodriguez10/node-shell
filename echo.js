const echo = (done, cmd) => {
    const params = cmd.split(" ").slice(1);
    done(params.join(" "))
}

module.exports = echo