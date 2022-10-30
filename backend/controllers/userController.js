const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    RegNum,
    PhoneNum,
    PhoneNum2,
    SchoolAddress,
    HomeAddress,
    HomeAddress2,
    SchoolContact,
    SchoolContact2,
    HomeContact,
    HomeContact2,
  } = req.body;

  if (
    (!name,
    !RegNum,
    !PhoneNum,
    !PhoneNum2,
    !SchoolAddress,
    !HomeAddress,
    !HomeAddress2,
    !SchoolContact,
    !HomeContact2,
    !HomeContact,
    !SchoolContact2)
  ) {
    res.status(400);
    throw new Error("invalid add all fields");
    }
    
    const userExists = await User.findOne({ RegNum })
    
    if (userExists) {
        res.status(400)
        throw new Error("User already exists");
    }

    const user = await User.create({
      name,
      RegNum,
      PhoneNum,
      PhoneNum2,
      SchoolAddress,
      HomeAddress,
      HomeAddress2,
      SchoolContact,
      SchoolContact2,
      HomeContact,
      HomeContact2,
    });

    if (user) {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          RegNum: user.RegNum,
          PhoneNum: user.PhoneNum,
          PhoneNum2: user.PhoneNum2,
          SchoolAddress: user.SchoolAddress,
          HomeAddress: user.HomeAddress,
          HomeAddress2: user.HomeAddress2,
          SchoolContact: user.SchoolContact,
          SchoolContact2: user.SchoolContact2,
          HomeContact: user.HomeContact,
          HomeContact2: user.HomeContact2,
        });
    } else {
        res.status(400)
        throw new Error('invalid user data')
    }
});



module.exports = {registerUser};