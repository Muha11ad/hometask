import  jwt from "jsonwebtoken"

export const customSign = (payload) => {
    return jwt.sign(payload, "secret_key")
}

export const customVerify = (token) => {
       return jwt.verify(token, "secret_key")
       
}
