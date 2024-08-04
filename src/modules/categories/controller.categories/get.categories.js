import modelCategories from "../model.categories.js";
import {
	sendError,
	sendResponse,
} from "../../../middlewares/hanlde.response.js";

export async function getCategories(request, response) {
	try {
		const categories = await modelCategories.find();
		await sendResponse(response, "All categories are here", categories);
	} catch (e) {
		sendError(response, 500, e, "error while gettin categories");
	}
}
