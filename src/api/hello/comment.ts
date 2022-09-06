import CustomError from "../../errors/CustomError"
import ApiResponseHandler from "../apiResponseHandler"

export default async (req, res) => {
    try {
        if (!req.headers.authorization) {
            throw new CustomError('Unauthorized', 403)
        }
        await ApiResponseHandler.success(req, res, req.body)

    } catch (error) {
        await ApiResponseHandler.error(req, res, error)
    }
}