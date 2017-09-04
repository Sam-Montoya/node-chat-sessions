var blacklist = ['hi', 'whaddup'];

module.exports = function (req, res, next) {
    while (blacklist.find(word => req.body.text.includes(word))) {
        const badWord = blacklist.find(word => req.body.text.includes(word));
        req.body.text = req.body.text.replace(badWord, '*'.repeat(badWord.length));
    }

    next();
}