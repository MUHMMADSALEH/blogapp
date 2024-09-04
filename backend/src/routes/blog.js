import express from "express"
import { BlogController } from "../controllers/blog.js";
const router=express.Router()


router.post("/",BlogController.add);

// Get a perticular post

router.get("/",BlogController.getAll)
router.get("/:id",BlogController.getSingle)

// update a purticular post
router.put("/:id",BlogController.update)

//delete a perticular post
router.delete("/:id",BlogController.delete);

export default router