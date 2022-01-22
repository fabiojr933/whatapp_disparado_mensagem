const moment = require('moment');

exports.home = async (req, res) => {
    try {            
        res.render('index');
    } catch (error) {

    }
}