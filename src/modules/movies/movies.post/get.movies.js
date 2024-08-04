import modelMovies from "../model.movies.js";
import { sendResponse, sendError } from "../../../middlewares/hanlde.response.js";

export async function getMovie(request, response) {
	try {
		const movies = await modelMovies.find()
		await sendResponse(response, "All movies are here", movies);
	} catch (e) {
		sendError(response, 500, e, "Error while getting movies");
	}
}