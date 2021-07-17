import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
	{
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true, minLength: 6 },
		name: { type: String },
		last_name: { type: Date },
		events: [String],
		role: { type: String, enum: ['user', 'admin'], required: true, default: 'user' },
	},
	{
		versionKey: false,
	}
);

export default mongoose.models.User || mongoose.model('User', UserSchema);
