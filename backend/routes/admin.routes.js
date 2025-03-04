import express, { Router } from "express";


import { getStudentsAdmin , putMarksAdmin , putAdminAttendance} from "../controllers/admin.controller.js";

const router = express.Router();

router.get("/adminstudents",getStudentsAdmin);
router.post("/adminmarks",putMarksAdmin);
router.post("/adminattendance",putAdminAttendance);


export default router;