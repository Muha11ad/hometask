import modelMovies from "../model.movies.js";
import { sendError, sendResponse } from "../../../middlewares/handle.response.js";

export async function getMovies(request, response) {
	try {
		const movies = await modelMovies.find().populate('category');
		await sendResponse(response, "All movies are here", movies);
	} catch (e) {
		sendError(response, 500, e, "Error while getting movies");
	}
}