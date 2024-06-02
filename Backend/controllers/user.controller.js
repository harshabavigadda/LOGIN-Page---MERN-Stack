import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ access: false, error: "Give all data" });
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.json({
      access: false,
      error: "User Not registered",
    });
  }

  const passverify = await user.isPasswordCorrect(password);

  if (!passverify) {
    res.json({
      access: false,
      error: "Password is incorrect",
    });
  }

  const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_KEY, {
    expiresIn: "1m",
  });

  const refreshToken = jwt.sign({ email }, process.env.REFRESH_TOKEN_KEY, {
    expiresIn: "5m",
  });

  console.log(accessToken);
  res.cookie("accessToken", accessToken, {
    maxAge: 60000,
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
  res.cookie("refreshToken", refreshToken, {
    maxAge: 300000,
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
  res.status(200).json({
    access: true,
    data: "Successfully Logged in",
  });
};

const userRegister = async (req, res) => {
  const { userName, email, password } = req.body;

  if (!userName || !email || !password) {
    return res.status(400).json({ success: false, error: "Give All Data" });
  }

  const userexist = await User.findOne({ email });

  if (userexist) {
    return res.json({
      success: false,
      error: "User already registered please Login",
    });
  }

  try {
    await User.create({ userName, email, password })
      .then((result) => {
        // console.log(result)
        res.status(200).json({ success: true, data: result });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    res.status(400).json({ success: false, error: error });
  }
};

// Middle wares to generate new tokens

const userDashboard = (req, res) => {
  console.log(req)
  res.json({ login: true, data: "HI" });
};

export { userLogin, userRegister, userDashboard };
