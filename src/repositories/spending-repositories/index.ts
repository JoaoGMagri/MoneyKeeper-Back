import { NewSpending } from "../../protocols";
import { prisma } from "../../config/database";

async function findSpedingbyUserId(userId: number){
    return prisma.spendings.findMany({
        where: { 
            userId: userId 
        },
        orderBy:{
            createdAt: 'desc'
        }
    });
}

async function findSpedingbySpendingId(spendingId: number){
    return prisma.spendings.findFirst({
        where: { 
            id: spendingId 
        },
    });
}

async function createSpeding(userId: number, newSpending: NewSpending) {
    return prisma.spendings.create({
        data: {
            userId: userId,
            name: newSpending.name,
            value: newSpending.value,
            type: newSpending.type,
        }
    })
}

async function deleteSpending(spendingId: number) {
    return prisma.spendings.delete({
        where: {
            id: spendingId,
        }
    })
}

async function updateSpending(spendingId: number, newSpending: NewSpending) {
    return prisma.spendings.update({
        where: {
            id: spendingId
        },
        data: {
            name: newSpending.name,
            value: newSpending.value,
            type: newSpending.type,
        }
    })
}

const spedingRepositry = {
    findSpedingbyUserId,
    findSpedingbySpendingId,
    createSpeding,
    deleteSpending,
    updateSpending,
}

export default spedingRepositry;