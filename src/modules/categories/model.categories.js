import { model, Schema, Types } from "mongoose";

const categoriesSchema = new Schema(
	{
		id: {
			type: Types.ObjectId,
		},
		name: {
			type: String,
			required: true,
		},
	},
	{
		collection: "categories",
	}
);

export default model("Category", categoriesSchema);
