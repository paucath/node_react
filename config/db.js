const mongoose = require('mongoose');

mongoose
    .connect("mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.ur9u4.mongodb.net/nodereact?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log('Connect to mongoDB'))
    .catch((err) => console.log('Failed to connect to MongoDB', err));

