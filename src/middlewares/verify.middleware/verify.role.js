import { customVerify } from "../../config/jwt.js"
import { sendError } from "../hanlde.response.js";
import  modelsUsers  from "../../modules/users/models.users.js";
export function verifyRole(...roles) {
	return async (request, response, next) => {
		try {
			const { token } = request.headers;

			// Check if token is provided
			if (!token) {
				return sendError(response, 403, null, "Token is invalid");
			}

			// Verify the token and get the user ID
			const {id, iat} = customVerify(token);
			// Find user by ID
			const user = await modelsUsers.findById(id);

			// Check user's role
			if (user) {
				if (roles.includes(user.role)) {
					return next();
				} else {
				return sendError(response, 403, null, "Unauthorized user");
				}
			} else {
				return sendError(response, 404, null, "Cannot find user");
			}
		} catch (error) {
			return sendError(response, 501, error, "Error in verify role :");
		}
	};
}
