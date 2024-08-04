import modelCategories from "../model.categories.js";
import {
	sendError,
	sendResponse,
} from "../../../middlewares/hanlde.response.js";

export async function putCategory(request, response) {
	const { id } = request.params;
	const updateData = request.body;

	try {
		const updatedCategory = await modelCategories.findByIdAndUpdate(id, updateData, { new: true });
		if (!updatedCategory) {
			return sendError(response, 404, null, "Category not found");
		}
		await sendResponse(response, "Category updated successfully", updatedCategory);
	} catch (e) {
		sendError(response, 500, e, "Error while updating category");
	}
}
