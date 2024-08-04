import modelsUsers from "../models.users.js";
import { customSign } from "../../../config/jwt.js";
import {
	sendResponse,
	sendError,
} from "../../../middlewares/hanlde.response.js";

export async function registerUser(request, response) {
	try {
		const { fullname, password, role } = request.body;

		// Create a new user instance
		const user = new modelsUsers({ fullname, password, role });

		// Generate a token with user details
		const token = await customSign({ id: user._id });

		// Save the user
		await user.save();

		// Send the response
		sendResponse(response, "User registered successfully", { user, token });
	} catch (e) {
		sendError(response, 500, e, "Error while registering user");
	}
}
