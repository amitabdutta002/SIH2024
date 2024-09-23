import { Student } from "../models/Student.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const genrateRefreshAndAccessToken = async (studentId) => {
    try {
        const student = await Student.findById(studentId);
        const AccessToken = student.generateAccessToken();
        const RefreshToken = student.generateRefreshToken();
        
        student.refreshToken = RefreshToken;
        await student.save({ validateBeforeSave: false });

        return [AccessToken, RefreshToken];
    } catch (error) {
        throw new ApiError(
            500,
            "Something went wrong while generating refresh and access token"
        );
    }
};

const registerStudent = asyncHandler(async (req, res, next) => {
    const { fullName, email, password } = req.body;
    console.log([fullName, email, password]);

    if ([fullName, email, password].some((field) => field?.trim() === "")) {
        throw new ApiError(
            400,
            "All fields are required"
        );
    }

    const existingUser = await Student.findOne({ email });

    if (existingUser) {
        throw new ApiError(
            409,
            "Student Exists"
        );
    }

    const student = await Student.create({
        fullName,
        email,
        password
    });
    
    const createUser = await Student.findById(student._id).select(
        "-password -refreshToken"
    );

    return res
        .status(200)
        .json(new ApiResponse(200, createUser, "Student Registered Successfully"));
});

const loginStudent = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    console.log([email, password]);

    if (!email || !password) {
        throw new ApiError(413, "Email and Password are required");
    }

    const student = await Student.findOne({ email });
    if (!student) {
        throw new ApiError(412, "Student does not exist");
    }

    const isPasswordCorrect = await student.isPasswordCorrect(password);
    if (!isPasswordCorrect) {
        throw new ApiError(401, "Invalid credentials");
    }

    const [AccessToken, RefreshToken] = await genrateRefreshAndAccessToken(student._id);

    const loggedInStudent = await Student.findById(student._id).select(
        "-password -refreshToken"
    );
    const options = {
        httpOnly: true,
        secure: true,
    };

    return res
        .status(201)
        .cookie("AccessToken", AccessToken, options)
        .cookie("RefreshToken", RefreshToken, options)
        .json(
            new ApiResponse(201, loggedInStudent, "Student Logged In")
        );
});

const logoutStudent = asyncHandler(async (req, res, next) => {
    await Student.findByIdAndUpdate(
        req.student?._id,
        {
            $unset: {
                refreshToken: 1
            }
        },
        {
            new: true,
        }
    );

    const options = {
        httpOnly: true,
        secure: true,
    };
    
    return res
        .status(200)
        .clearCookie("AccessToken", options)
        .clearCookie("RefreshToken", options)
        .json(
            new ApiResponse(
                203, {}, "Student Logged Out"
            )
        );
});

export { registerStudent, loginStudent, logoutStudent };
