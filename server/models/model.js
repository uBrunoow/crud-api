const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    counter: {
        type: Number,
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true,  
    },
    status: {
        type: String,
        required: true,  
    } 
});

userSchema.statics.getNextCounterValue = async function () {
    const maxUser = await this.findOne({}, { counter: 1 }, { sort: { counter: -1 } });
    if (maxUser) {
        return maxUser.counter + 1;
    } else {
        return 1;
    }
};

userSchema.statics.updateCountersAfterDelete = async function (deletedCounter) {
    const usersToUpdate = await this.find({ counter: { $gt: deletedCounter } });
    for (const user of usersToUpdate) {
        user.counter--;
        await user.save();
    }
};

userSchema.pre('save', async function (next) {
    if (this.isNew) {
        this.counter = await this.constructor.getNextCounterValue();
    }
    next();
});

userSchema.pre('remove', async function (next) {
    await this.model.updateCountersAfterDelete(this.counter);
    next();
});

const Userdb = mongoose.model('Userdb', userSchema);

module.exports = Userdb;
