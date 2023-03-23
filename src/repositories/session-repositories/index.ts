import { prisma } from "../../config/database";

async function findUsersbyEmail(email: string){
    return prisma.user.findFirst({
        where: { 
            email: email 
        },
    });
}

async function createUser(email:string, password:string, username:string){
    return prisma.user.create({
        data: {
            email:email,
            password:password,
            username:username
        }
    })
}

const sessionRepository = {
    findUsersbyEmail,
    createUser
}

export default sessionRepository;