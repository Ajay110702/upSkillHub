import dotenv from "dotenv";
dotenv.config();

const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;
const STRIPE_SECRET_KEY ="sk_test_51R9nLcFaMyrA7bWdewBCl2ZTct2r54wc7Vz1nRKb8wuWleMpIZantP9Me05e0DslRDzmfcBSc7fFQT6awvrQDLg300hbI4K8sj"

export default {
  JWT_USER_PASSWORD,
  JWT_ADMIN_PASSWORD,
  STRIPE_SECRET_KEY,
};