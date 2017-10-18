const mongoose = require('mongoose');

const uri = 'mongodb://localhost/node0409';

mongoose.connect(uri, { useMongoClient: true });
mongoose.Promise = global.Promise;

/*

embed
User: [
    { _idUser, name, posts: [] },
    { _idUser, name, posts: [] },
    { _idUser, name, posts: [] },
]

reference
User: [
    {_idUser, name, idPosts: []}
]
Post: [
    { content, comments }
]
*/
