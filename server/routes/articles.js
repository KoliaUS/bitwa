var express = require('express');
var router = express.Router();
var debug = require('debug')('router:articles');

const options = {
    verbose: console.debug
};
const db = require('better-sqlite3')('articles.sqlite', options);

router.get("/", function (req, res, next) {
    const articles = db.prepare('SELECT * FROM article').all();
    res.send(articles);
});
router.get('/:id', (req, res, next) => {
    const id = req.params.id
    if (id) {
        const article = db.prepare('SELECT * FROM article WHERE id = ?').get(id);
        res.send(article);
    } else {
        res.send("Not Found");
    }
});
router.post("/", (req, res) => {
    const body = req.body;
    console.log(body);
    const article = {
        image: body.image,
        title: body.title,
        date: new Date().toISOString(),
        text: body.text
    }

    const stm = db.prepare("INSERT INTO article (image, title, date, text) VALUES (?,?,?,?)");
    stm.run(...Object.values(article))
    res.send(article);
});
router.patch("/:id", (req, res) => {
    const body = req.body;
    const id = req.params.id;
    if (id) {
        const article = db.prepare('SELECT * FROM article WHERE id = ?').get(id);
        if (article) {
            Object.assign(article, body);
            const stm = db.prepare(
                "UPDATE article SET image = ?, title = ?, date = ?, text = ? WHERE id = ?"
            );
            stm.run(article.image, article.title,article.date,article.text,parseInt(id));
        } else {
            res.sendStatus(404)
        }
        res.send(article);
    } else {
        res.sendStatus(404);
    }
});
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    if (id) {
        db.prepare("DELETE FROM article WHERE id = ?").run(id)
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
})
module.exports = router;
