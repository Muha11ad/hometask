import modelCategories from "../model.categories.js";
import {
	sendError,
	sendResponse,
} from "../../../middlewares/hanlde.response.js";

export async function deleteCategory(request, response) {
	const { id } = request.params;

	try {
		const deletedCategory = await modelCategories.findByIdAndDelete(id);
		if (!deletedCategory) {
			return sendError(response, 404, null, "Category not found");
		}
		await sendResponse(response, "Category deleted successfully", deletedCategory);
	} catch (e) {
		sendError(response, 500, e, "Error while deleting category");
	}
}
