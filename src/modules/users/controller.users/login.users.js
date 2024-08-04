import modelsUsers from "../models.users.js";
import { customSign } from "../../../config/jwt.js";
import { sendResponse, sendError } from "../../../middlewares/hanlde.response.js"

export async function loginUser(request, response) {
	try {
		const { fullname, password } = request.body;
		const user = await modelsUsers.findOne({ fullname, password });
		if (!user) {
			return sendError(response, 400, null, "Invalid fullname or password");
		}
        const token = await customSign({id :user._id})
		await sendResponse(response, "Login successful", { token });
	} catch (e) {
		sendError(response, 500, e, "Error while logging in");
	}
}