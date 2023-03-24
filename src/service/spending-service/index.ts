import spedingRepositry from "../../repositories/spending-repositories";
import { notFoundError } from "../../errors/not-found-error";
import sessionRepository from "../../repositories/session-repositories";

async function getSpending(userId: number) {

    const user = await sessionRepository.findUsersbyId(userId);
    if (!user) {
        throw notFoundError();
    }

    return await spedingRepositry.findSpedingbyUserId(userId);
}

const spedingService = {
    getSpending,
}

export default spedingService