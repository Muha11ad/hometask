import modelMovies from "../model.movies.js";
import { sendError, sendResponse } from "../../../middlewares/hanlde.response.js";

export async function deleteMovie(request, response) {
	const { id } = request.params;

	try {
		const deletedMovie = await modelMovies.findByIdAndDelete(id);
		if (!deletedMovie) {
			return sendError(response, 404, null, "Movie not found");
		}
		await sendResponse(response, "Movie deleted successfully", deletedMovie);
	} catch (e) {
		sendError(response, 500, e, "Error while deleting movie");
	}
}