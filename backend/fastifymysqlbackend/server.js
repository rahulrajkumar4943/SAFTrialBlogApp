const fastify = require("fastify")({ logger: true });
const cors = require("@fastify/cors");

fastify.register(cors, {
    // put your options here
    origin: "*",
});

fastify.register(require("@fastify/mysql"), {
    connectionString: "mysql://SAFuser:admin123@localhost:3306/firstcruddb",
});

// get all posts
fastify.get("/api/posts", function (req, reply) {
    fastify.mysql.query(
        "SELECT * FROM posts",
        [req.params],
        function onResult(err, result) {
            reply.send(err || result);
        }
    );
});

// get one post with specific id
fastify.get("/api/posts/:id", function (req, reply) {
    fastify.mysql.query(
        "SELECT * FROM posts WHERE id=?",
        [req.params.id],
        function onResult(err, result) {
            reply.send(err || result);
        }
    );
});

// create post
// INSERT INTO posts VALUES (3, 'third title', 'third body');
fastify.post("/api/posts", function (req, reply) {
    //console.log(req.body)
    // req.body looks like this V
    // {
    //     title: 'this is a test title post',
    //     body: 'this is a test title body'
    // }
    fastify.mysql.query(
        "INSERT INTO posts SET ?",
        [req.body],
        function onResult(err, result) {
            reply.send(err || result);
        }
    );
});

// update a post
fastify.put("/api/posts/:id", function (req, reply) {
    //console.log(req.body)
    // req.body looks like this V
    // {
    //     title: 'this is a test title post',
    //     body: 'this is a test title body'
    // }
    fastify.mysql.query(
        "UPDATE posts SET ? WHERE id=?",
        [req.body, req.params.id],
        function onResult(err, result) {
            reply.send(err || result);
        }
    );
});

// delete all posts
fastify.delete("/api/posts", function (req, reply) {
    fastify.mysql.query(
        "DELETE * FROM posts",
        [req.params],
        function onResult(err, result) {
            reply.send(err || result);
        }
    );
});

// delete one post with a specific id
fastify.delete("/api/posts/:id", function (req, reply) {
    // delete the post
    fastify.mysql.query(
        "DELETE FROM posts WHERE id=?",
        [req.params.id],
        function onResult(err, result) {
            reply.send(err || result);
        }
    );
});

// delete comments for one post with a specific id
fastify.delete("/api/posts/comments/:postid", function (req, reply) {
    // delete the post
    fastify.mysql.query(
        "DELETE FROM comments WHERE postid=?",
        [req.params.postid],
        function onResult(err, result) {
            reply.send(err || result);
        }
    );
});

// create a comment for a post with a specific id
fastify.post("/api/posts/comment/:id", function (req, reply) {
    fastify.mysql.query(
        "INSERT INTO comments SET ?",
        [req.body],

        // req.body looks like this
        // {
        //     "postid": 2,
        //     "content": "this is a comment"
        // }

        function onResult(err, result) {
            reply.send(err || result);
        }
    );
});

// get comments for a specific post
fastify.get("/api/posts/comments/:postid", function (req, reply) {
    fastify.mysql.query(
        "SELECT * FROM comments WHERE postid=?",
        [req.params.postid],
        function onResult(err, result) {
            reply.send(err || result);
        }
    );
});

fastify.listen({ port: 3000 }, (err) => {
    if (err) throw err;
    console.log(`server listening on ${fastify.server.address().port}`);
});
