import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const studentSchema = mongoose.Schema({
    fullName:{
        type:String,
        require: true,
        trim: true,
        index: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
    },
    password: {
        type: String,
        require: [true, "password is required"],
    },
    refreshToken: {
        type: String,
    },
},{
    timestamps: true
})
studentSchema.pre('save', async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
});

studentSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

studentSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRE
        }
    )
}

studentSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRE
        }
    )
}


export const Student = mongoose.model("Student",studentSchema);