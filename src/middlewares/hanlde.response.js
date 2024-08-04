export function sendError(response, status, error, message) {
	response.status(status).send({
		success: false,
		message: error ? message + error.message : message,
	});
}

export function sendResponse(response, message, data) {
	response.send({
		success: true,
		message: message,
		data: data || [],
	});
}
