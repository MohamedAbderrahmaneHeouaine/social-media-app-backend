const express = require("express");
const { deleteUser, followUser, getUser, UnFollowUser, updateUser, getAllUsers } = require("../Controllers/UserController.js");
const authMiddleWare = require('../middleware/authMiddleWare.js')
const router = express.Router();

router.get('/', getAllUsers)
router.get('/:id', getUser)
router.put('/:id',authMiddleWare,updateUser)
router.delete('/:id', authMiddleWare,deleteUser)
router.put('/:id/follow', authMiddleWare,followUser)
router.put('/:id/unfollow',authMiddleWare, UnFollowUser)
module.exports =  router;