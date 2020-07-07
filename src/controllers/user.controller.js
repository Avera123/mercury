const usersCtrl = {};

usersCtrl.getUsers = (req, res) => res.json({ Message: 'Get Users' });

usersCtrl.postUser = (req, res) => res.json({ Message: 'Post Users Request' });

usersCtrl.getUser = (req, res) => res.json({ Message: 'Post Users Request' });

usersCtrl.putUser = (req, res) => res.json({ Message: 'Post Users Request' });

usersCtrl.deleteUser = (req, res) => res.json({ Message: 'Post Users Request' });

module.exports = usersCtrl;