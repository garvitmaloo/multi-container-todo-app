import type { Request, Response } from "express";
import getAllUsers from "../getAllUsers";

describe("Get all users request", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let responseObject: any;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      statusCode: 0,
      send: jest.fn().mockImplementation((response) => {
        responseObject = response;
      })
    };
  });

  test("200 - status code", () => {
    const expectedStatusCode = 200;
    const expectedResponse = [
      {
        name: "User One",
        email: "user1@email.com"
      },
      {
        name: "User Two",
        email: "user2@email.com"
      }
    ];

    getAllUsers(mockRequest as Request, mockResponse as Response);

    expect(mockResponse.statusCode).toBe(expectedStatusCode);
    expect(responseObject).toEqual(expectedResponse);
  });
});
