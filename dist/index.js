"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// use `prisma` in your application to read and write data in your DB
function updateUser(username_1, _a) {
    return __awaiter(this, arguments, void 0, function* (username, { firstName, lastName, }) {
        yield prisma.user.update({
            where: { email: username },
            data: {
                firstName,
                lastName,
            },
        });
        console.log("user was successfully updated");
    });
}
function CreateUser(firstName, lastName, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = yield prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                password,
            },
        });
        console.log("user was created", newUser);
    });
}
// CreateUser("gurpreet1", "kaur", "gk1@gmail.com", "pwd");
updateUser("gk1@gmail.com", {
    firstName: "surbhi",
    lastName: "bhandari",
});
