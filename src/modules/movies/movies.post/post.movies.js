import modelMovies from "../model.movies.js";
import { sendError, sendResponse } from "../../../middlewares/handle.response.js";

export async function postMovie(request, response) {
	try {
		const { title, description, year, category_id } = request.body;
		const movie = new modelMovies({ title, description, year, category_id });
		await movie.save();
		await sendResponse(response, "Movie created successfully", movie);
	} catch (e) {
		sendError(response, 500, e, "Error while creating movie");
	}
}