import { Schema, model } from 'mongoose';

const userSchema = new Schema({

    email: string,

});

export default model('User', UserSchema);
