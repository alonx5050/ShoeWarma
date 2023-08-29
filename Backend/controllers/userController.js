const User = require('../models/UserSchema.js');

exports.createUser = async (req, res, next) => {
    const newUser = await User.create(req.body);
    res.json(newUser);
}
exports.getAllUsers = async (req, res, next) => {
    const users = await User.find();
    res.json({
        data: users
    })
};

exports.login = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email });
    console.log(user);
    if (password === user.password) {
        res.json({ user });

    }
    else {
        res.status(400).send('Wrong Password')
    }
}
exports.getUser = async (req, res, next) => {
    const id = req.params.id;
    const user = await User.findById(id);
    res.json({ user });
}


exports.updateUser = async (req, res, next) => {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate(id, req.body, {
        new: true,

    });
    res.status(204).json({
        status: 'success',
        data: user,
    });
};


exports.deleteUser = async (req, res, next) => {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.send('User Deleted')
}