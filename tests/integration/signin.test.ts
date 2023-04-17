import supertest from "supertest";
import app from "@/app";
import httpStatus from "http-status";

const server = supertest(app);

describe("Testando Login ", () => {

    it("conectando", async () => {
        const response = await server.get("/health");
        
        expect(response.status).toBe(httpStatus.OK);
    })

    it("primeiro", async () => {

        const body = {
            email: "jgmagri@hotmail.com", 
            password: "123456"
        };

        const response = await server.post("/session").send(body);

        expect(response.status).toBe(httpStatus.NOT_FOUND);

    })

})