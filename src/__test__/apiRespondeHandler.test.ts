import ApiResponseHandler from "../api/apiResponseHandler";

describe('apiResponseHandler', () => {

    it('ApiResponseHandler.success ', async () => {
        const mockResponse = {
            sendStatus: jest.fn(),
        }
        await ApiResponseHandler.success(null, mockResponse, undefined);
    })
    it('ApiResponseHandler.error 500 ', async () => {
        const mockResponse = {
            status: (code) => {
                return {
                    send: (message) => {
                        return {
                            sendStatus: message,
                        }
                    },
                }
            }

        }
        const mockError = {
            code: 500,
        }
        await ApiResponseHandler.error(null, mockResponse, mockError);
    })
    it('ApiResponseHandler.error 400', async () => {
        const mockResponse = {
            status: (code) => {
                return {
                    send: (message) => {
                        return {
                            sendStatus: message,
                        }
                    },
                }
            }

        }
        const mockError = {
            code: 400,
        }
        await ApiResponseHandler.error(null, mockResponse, mockError);
    })
})