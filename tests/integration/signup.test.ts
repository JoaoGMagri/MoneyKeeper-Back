import supertest from "supertest";
import app from "@/app";
import httpStatus from "http-status";

const server = supertest(app);

describe("Testando Cadastro ", () => {

    it("primeiro", async () => {

        const body = {
            email: "jgmagri@hotmail.com", 
            password: "123456",
            username: "Joao"
        };

        const response = await server.post("/session/signUp").send(body)

        expect(response.status).toBe(httpStatus.CREATED);

    })

})