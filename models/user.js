const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        // unique: true // Added unique: true for email as it's typically a unique identifier
    },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User',userSchema);