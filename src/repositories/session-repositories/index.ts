import { prisma } from "../../config/database";

async function findUsersbyEmail(email: string){
    return prisma.user.findFirst({
        where: { 
            email: email 
        },
    });
}

async function findSessionbyId(userId: number){
    return prisma.session.findFirst({
        where: { 
            id: userId 
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

async function createSession(token:string, userId:number) {
    return prisma.session.create({
        data: {
            token:token,
            userId:userId
        }
    })
}

const sessionRepository = {
    findUsersbyEmail,
    findSessionbyId,
    createUser,
    createSession
}

export default sessionRepository;