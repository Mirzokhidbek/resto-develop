import { NextFunction, Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service"


const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.render("home");
    // response options: send | json | redirect | end | render
  } catch (err) {
    console.log("Error on goHome", err);
    res.redirect("/admin");
  }
};

// GET /admin/signup  →  shows the signup page
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.render("signup");
  } catch (err) {
    console.log("Error on getSignup", err);
    res.redirect("/admin");
  }
};

// GET /admin/login  →  shows the login page
restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.render("login");
  } catch (err) {
    console.log("Error on getLogin", err);
    res.redirect("/admin");
  }
};



export default restaurantController;
