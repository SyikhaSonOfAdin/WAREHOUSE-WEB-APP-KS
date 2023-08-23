const bodyParser = require('body-parser');
const express = require('express');
const { User } = require('./functions-module');

const app = express();
const router = express.Router();

router.use(bodyParser.json());
router.post('/authentication', async (req, res) => {
    const { email, password } = req.body;

    try {
        const login = new User();

        login.user_by_Email(email)
            .then(result => {
                if (result.password == password) {
                    res.status(200).json({
                        Access: 'Granted'
                    })
                } else {
                    res.json({
                        Access: 'Denied'
                    })
                }
            })

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;