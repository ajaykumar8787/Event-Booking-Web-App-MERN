import mongoose from 'mongoose';

const otpSchema = new mongoose.Schema({
    email: { type: String, required: true },
    otp: { type: String, required: true },
    action: { type: String, enum: ['account_verification', 'event_booking'] },
    createdAt: { type: Date, default: Date.now, expires: 300 }
});

// This is the default export
export default mongoose.models.Otp || mongoose.model('Otp', otpSchema);