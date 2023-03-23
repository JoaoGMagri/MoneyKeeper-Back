import bcrypt from "bcrypt";

import { InformationUser } from "../../protocols";
import sessionRepository from "../../repositories/session-repositories";
import { duplicatedEmailError } from "./errors";

async function usersPost(infoUser:InformationUser) {
    const repetEmail = await sessionRepository.findUsersbyEmail(infoUser.email);
    if (repetEmail){
        throw duplicatedEmailError();
    }

    const hashedPassword = await bcrypt.hash(infoUser.password, 12);
    
    return await sessionRepository.createUser(infoUser.email, hashedPassword, infoUser.username);
    
}

const sessionService = {
    usersPost,
};
  
export default sessionService;