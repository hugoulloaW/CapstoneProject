// importamos la librería .env para acceder al archivo .env, que se instaló previamente
import dotenv from 'dotenv'
dotenv.config()
// se definió un arreglo URLS para almacenar los url que se pudieran presentar
export const URLS = {
  LOGIN_URL: process.env.URL
}
// se dinió un arreglo CREDENTIALS para almacenar el usuario y contraseña
export const CREDENTIALS = {
  STANDART_USER: {
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.PASSWORD,
    BADUSERNAME: process.env.BADUSERNAME,
    BADPASSWORD: process.env.BADPASSWORD

  }
}
export const CHECKOUT_INFO = {
  CHECKOUT: {
    FIRSTNAMEINPUT: process.env.FIRSTNAME,
    LASTNAMEINPUT: process.env.LASTNAME,
    ZIPCODEINPUT: process.env.ZIPCODE
  }
}
