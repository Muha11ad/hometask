import { model, Schema, Types } from "mongoose";

const movieSchema = new Schema(
	{
		id: {
			type: Types.ObjectId,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		year: {
			type: Number,
			required: true,
		},
		category: {
			type: Types.ObjectId,
			ref: "Category",
			required: true,
		},
	},
	{
		collection: "movies",
	}
);

export default model("Movie", movieSchema);
