import { prisma } from "../../config/database";

async function findSpedingbyUserId(userId: number){
    return prisma.spendings.findMany({
        where: { 
            userId: userId 
        },
    });
}

const spedingRepositry = {
    findSpedingbyUserId,
}

export default spedingRepositry;