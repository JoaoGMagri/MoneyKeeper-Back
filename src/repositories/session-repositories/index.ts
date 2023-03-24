import { prisma } from "../../config/database";

async function findUsersbyEmail(email: string){
    return prisma.users.findFirst({
        where: { 
            email: email 
        },
    });
}

async function findUsersbyId(userId: number){
    return prisma.users.findFirst({
        where: { 
            id: userId 
        },
    });
}

async function findSessionbyId(userId: number){
    return prisma.sessions.findFirst({
        where: { 
            userId: userId 
        },
    });
}

async function findSessionbyToken(token: string){
    return prisma.sessions.findUnique({
        where: {
            token: token
        },
    });
}

async function createUser(email:string, password:string, username:string){
    return prisma.users.create({
        data: {
            email:email,
            password:password,
            username:username
        }
    })
}

async function createSession(token:string, userId:number) {
    return prisma.sessions.create({
        data: {
            token:token,
            userId:userId
        }
    })
}

const sessionRepository = {
    findUsersbyEmail,
    findUsersbyId,
    findSessionbyId,
    findSessionbyToken,
    createUser,
    createSession
}

export default sessionRepository;