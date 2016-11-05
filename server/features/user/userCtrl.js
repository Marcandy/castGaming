const User = require('./user');

module.exports = {

    getUser(req, res) {
      User.find( {}, (err, user) => {
      if( err ){
        return res.status(500).json(err);
      }
        return res.status(200).json(user);
        })
    },

    postUser(req, res) {
        new User(req.body).save((err, user) => {
            if (err) {
                return res.status(500), json(err)
            }
            return res.status(200).json(user)
        });
    }
}
