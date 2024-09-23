import { Router } from "express";
import { registerStudent,loginStudent,logoutStudent } from "../controllers/Student.controllers.js";

const studentRoute = Router()
studentRoute.route('/register').post(registerStudent);
studentRoute.route('/login').post(loginStudent);
studentRoute.route('/logout').post(logoutStudent);

export default studentRoute