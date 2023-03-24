import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';

import { InformationUser } from "../../protocols";
import sessionRepository from "../../repositories/session-repositories";
import { duplicatedEmailError } from "./errors";
import { notFoundError } from "../../errors/not-found-error";
import { unauthorizedError } from "../../errors/unauthorized-error";

async function usersPost(infoUser:InformationUser) {
    const repetEmail = await sessionRepository.findUsersbyEmail(infoUser.email);
    if (repetEmail){
        throw duplicatedEmailError();
    }

    const hashedPassword = await bcrypt.hash(infoUser.password, 12);
    return await sessionRepository.createUser(infoUser.email, hashedPassword, infoUser.username);
}

async function usersSession(email:string, password: string) {
    const token = uuidv4();

    const user = await sessionRepository.findUsersbyEmail(email);
    if (!user){
        throw notFoundError();
    }

    const passwordOK = await bcrypt.compare(password, user.password);
    if (!passwordOK) {
        throw unauthorizedError();
    }

    const session = await sessionRepository.findSessionbyId(user.id);
    if (session) {
        return session;
    }

    return await sessionRepository.createSession(token, user.id);
}

const sessionService = {
    usersPost,
    usersSession,
};
  
export default sessionService;