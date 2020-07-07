const { Router } = require('express');
const router = Router();

router.route('/')
    .get((req, res) => res.json({ Message: 'Get Users' }))
    .post((req, res) => res.json({ Message: 'Post Users Request' }));

module.exports = router;