import { Router } from "express";
import { Auth } from "./auth.controller";

const router = Router();

router.post("/register_client", Auth.registerClient);

router.post("/register_seller", Auth.registerSeller);

router.post("/register_admin", Auth.registerAdmin);

router.post("/login/", Auth.login);

router.post("/logout", Auth.logout);

router.post("/protected", Auth.protected);

router.post("/seller_assigment", Auth.assignSeller);

export default router;
