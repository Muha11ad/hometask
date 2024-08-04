import modelMovies from "../model.movies.js";
import { sendError, sendResponse } from "../../../middlewares/handle.response.js";

export async function putMovie(request, response) {
	const { id } = request.params;
	const updateData = request.body;

	try {
		const updatedMovie = await modelMovies.findByIdAndUpdate(id, updateData, { new: true }).populate('category');
		if (!updatedMovie) {
			return sendError(response, 404, null, "Movie not found");
		}
		await sendResponse(response, "Movie updated successfully", updatedMovie);
	} catch (e) {
		sendError(response, 500, e, "Error while updating movie");
	}
}
