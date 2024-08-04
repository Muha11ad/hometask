import { model, Schema, Types } from "mongoose";

const userSchema = new Schema(
	{
        id: {
			type: Types.ObjectId,
		},
		fullname: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			enum: ['user', 'admin'],
			required: true,
		},
		password: {
			type: String,
			required: true,
		}
	},
	{
		collection: "users",
	}
);

export default model("User", userSchema);
