import spedingRepositry from "../../repositories/spending-repositories";
import { notFoundError } from "../../errors/not-found-error";
import sessionRepository from "../../repositories/session-repositories";
import { NewSpending } from "../../protocols";
import { newSpendingSchema } from "../../schemas/postSpending-schema";
import { badRequestError } from "../../errors/bad-request-error";
import { unauthorizedError } from "../../errors/unauthorized-error";


async function getSpending(userId: number) {
    await userExists(userId);

    return await spedingRepositry.findSpedingbyUserId(userId);
}

async function postSpending(userId: number, newSpending: NewSpending) {
    await userExists(userId);
    await validationSchema(newSpending);
    
    return await spedingRepositry.createSpeding(userId, newSpending);
}

async function deleteSpending( userId: number, spendingId: number) {
    await spendingExists(spendingId, userId);

    return await spedingRepositry.deleteSpending(spendingId);
}

async function putSpending(userId: number, spendingId: number, newSpending: NewSpending) {
    await spendingExists(spendingId, userId);
    await validationSchema(newSpending);

    return await spedingRepositry.updateSpending(spendingId, newSpending);
}

const spedingService = {
    getSpending,
    postSpending,
    deleteSpending,
    putSpending
}

export default spedingService

//Regras de Negocio
async function userExists(userId: number) {
    const user = await sessionRepository.findUsersbyId(userId);
    if (!user) {
        throw notFoundError();
    }
}

async function validationSchema(newSpending: NewSpending) {
    const { error } = newSpendingSchema.validate(newSpending, {abortEarly: false});
    if ( error ) {
        throw badRequestError()
    }
}

async function spendingExists(spendingId: number, userId: number) {
    const spending = await spedingRepositry.findSpedingbySpendingId(spendingId);
    if (!spending) {
        throw notFoundError();
    }

    if (spending.userId !== userId) {
        throw unauthorizedError()
    }
}