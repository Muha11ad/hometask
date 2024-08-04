import modelCategories from "../model.categories.js"
import { sendError, sendResponse } from "../../../middlewares/hanlde.response.js"

export async function postCategories(request, response){
    try {
        let { name }  = request.body
        let category = await modelCategories.create({name})
        category.save()
        sendResponse(response, "Categories added", {category_name : name})
    } catch (error) {
        sendError(response, error.status, error, "Error in postCategories")
    }
    }