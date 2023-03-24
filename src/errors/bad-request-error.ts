import { ApplicationError } from "../protocols";

export function badRequestError(): ApplicationError {
  return {
    name: "BadRequestError",
    message: "The request body must be correct",
  };
}